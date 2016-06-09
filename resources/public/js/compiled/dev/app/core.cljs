(ns app.core
  (:require
    app.mutations
    [untangled.client.core :as uc]
    [untangled.i18n :refer-macros [tr trf]]
    [untangled.client.data-fetch :as df]
    [om.next :as om]))

(def initial-state (atom {:ui/react-key       "abc"
                          :panel              [[:view :main]]
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
                                                                  [:comment/by-id 3]]}}
                          :view               {:main {:message "Choose a view"}}}))

(defonce app (atom (uc/new-untangled-client
                     :initial-state initial-state
                     :started-callback
                     (fn [{:keys [reconciler]}]
                       ; TODO
                       ))))

