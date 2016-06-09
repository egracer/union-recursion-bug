(ns app.ui
  (:require [om.dom :as dom]
            [om.next :as om :refer-macros [defui]]
            [untangled.i18n :refer-macros [tr trf]]
            yahoo.intl-messageformat-with-locales
            [untangled.client.data-fetch :as df]))

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
      (js/console.log replies)
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

(defui ^:once Subpanel
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
    (let [{:keys [db/id] :as props} (om/props this)]
      (dom/div nil
        (condp (fn [key data] (contains? data key)) props
          :article/title (ui-article props)
          :list/title (ui-comment-list props)
          "Choose a view")))))

(def ui-report-subpanel (om/factory Subpanel))

(defui ^:once Root
  static om/IQuery
  (query [this] [:ui/react-key {:panel (om/get-query Subpanel)}])
  Object
  (render [this]
    (let [{:keys [ui/react-key panel] :or {ui/react-key "ROOT"}} (om/props this)]
      (dom/div nil
        (dom/button #js {:onClick #(om/transact! this '[(view/article)])} "View Article")
        (dom/button #js {:onClick #(om/transact! this '[(view/comments)])} "View Comments")
        (dom/div #js {:key react-key} (ui-report-subpanel panel))))))
