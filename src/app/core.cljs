(ns app.core
  (:require
    [om.next :as om :refer-macros [defui]]
    [om.dom :as dom]
    [goog.dom :as gdom]
    [om.util :as util]))

(declare ui-comment)
(defui ^:once Comment
  static om/IQuery
  (query [_] [:db/id
              :comment/author
              :comment/text
              #_{:comment/replies '...}])
  static om/Ident
  (ident [_ props] [:comment/by-id (:db/id props)])
  Object
  (render [this]
    (let [{:keys [comment/author comment/text comment/replies]} (om/props this)]
      (dom/li nil
        (dom/h4 nil author)
        (dom/p nil text)
        (when replies
          (dom/ul nil
            (dom/li nil "Replies")))))))

(def ui-comment (om/factory Comment {:keyfn :db/id}))

(defui ^:once CommentList
  static om/IQuery
  (query [_] [:db/id
              :list/title
              {:list/comments (om/get-query Comment)}])
  static om/Ident
  (ident [_ props] [:comment-list/by-id (:db/id props)])
  Object
  (render [this]
    (let [{:keys [list/title list/comments]} (om/props this)]
      (dom/div nil
        (dom/h3 nil title)
        (dom/ul nil
          (map ui-comment comments))))))

(def ui-comment-list (om/factory CommentList))

(defui ^:once Article
  static om/IQuery
  (query [_] [:db/id
              :article/title
              :article/text])
  static om/Ident
  (ident [_ props] [:article/by-id (:db/id props)])
  Object
  (render [this]
    (let [{:keys [article/title article/text]} (om/props this)]
      (dom/div nil
        (dom/h3 nil title)
        (dom/p nil text)))))

(def ui-article (om/factory Article))

(defui ^:once Panel
  static om/IQuery
  (query [_] {:article/by-id      (om/get-query Article)
              :comment-list/by-id (om/get-query CommentList)})
  static om/Ident
  (ident [_ {:keys [db/id] :as props}]
    (condp (fn [key data] (contains? data key)) props
      :article/title [:article/by-id id]
      :list/title [:comment-list/by-id id]
      [:view :main]))
  Object
  (render [this]
    (let [props (om/props this)]
      (dom/div nil
        (condp (fn [key data] (contains? data key)) props
          ;; if props have the keyword, call the corresponding render fn
          :article/title (ui-article props)
          :list/title (ui-comment-list props)
          "Choose a view")))))

(def ui-panel (om/factory Panel))

(defui ^:once Root
  static om/IQuery
  (query [this] [{:panel (om/get-query Panel)}])
  Object
  (render [this]
    (let [{:keys [panel]} (om/props this)]
      (dom/div nil
        (dom/button #js {:onClick #(om/transact! this '[(view/article)])} "View Article")
        (dom/button #js {:onClick #(om/transact! this '[(view/comments)])} "View Comments")
        (ui-panel panel)))))

(defn read
  [{:keys [query target state ast]} dkey _]
  (when (not target)
    (case dkey
      (let [key (or (:key ast) dkey)
            data (if (util/ident? key) (get-in @state key) (get @state key))]
        {:value
         (cond
           ;; union
           (map? query) (get (om/db->tree [{key query}] @state @state) key)
           ;; top level prop
           (nil? query) data
           ;; everything else
           :else (om/db->tree query data @state))}))))

(defmulti mutate om/dispatch)

(defmethod mutate 'view/article [{:keys [state]} _ _]
  {:action (fn [] (swap! state assoc :panel [:article/by-id 5]))})

(defmethod mutate 'view/comments [{:keys [state]} _ _]
  {:action (fn [] (swap! state assoc :panel [:comment-list/by-id 1]))})

(def initial-state (atom {:panel              {}
                          :article/by-id      {5 {:db/id         5
                                                  :article/title "An article"
                                                  :article/text  "This is a great article."}}
                          :comment/by-id      {2 {:db/id           2
                                                  :comment/author  "Joe"
                                                  :comment/text    "Great!"
                                                  :comment/replies [[:comment/by-id 6]]}
                                               3 {:db/id           3
                                                  :comment/author  "Richard"
                                                  :comment/text    "Awful!"
                                                  :comment/replies [[:comment/by-id 4]]}
                                               4 {:db/id          4
                                                  :comment/author "Joe"
                                                  :comment/text   "Such a downer."}
                                               6 {:db/id          6
                                                  :comment/author "Richard"
                                                  :comment/text   "Nah."}}
                          :comment-list/by-id {1 {:db/id         1
                                                  :list/title    "Article Comments"
                                                  :list/comments [[:comment/by-id 2]
                                                                  [:comment/by-id 3]]}}}))


(def parser (om/parser {:read read :mutate mutate}))
(def reconciler (om/reconciler {:state initial-state :parser parser}))

(om/add-root! reconciler Root (gdom/getElement "app"))

