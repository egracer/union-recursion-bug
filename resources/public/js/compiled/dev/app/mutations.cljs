(ns app.mutations
  (:require [untangled.client.mutations :as m]))

(defmethod m/mutate 'view/article [{:keys [state]} _ _]
  {:action (fn [] (swap! state assoc :panel [:article/by-id 5]))})

(defmethod m/mutate 'view/comments [{:keys [state]} _ _]
  {:action (fn [] (swap! state assoc :panel [:comment-list/by-id 1]))})
