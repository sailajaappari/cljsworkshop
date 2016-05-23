

(ns cljsworkshop.core
  (:require [clojure.browser.repl :as repl]
            [goog.dom :as dom]
            [goog.events :as events]))



(defn sum
  []
  (let [x (int (.-value (js/document.getElementById "num1")))
        y (int (.-value (js/document.getElementById "num2")))
        s (js/document.getElementById "res")]
       (set! (.-innerHTML s) (+ x y)))) 
(defn main
  []
  (let [button (js/document.getElementById "Add")]
       (events/listen button "click" #(sum))))

(main)
