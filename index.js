webpackJsonp([0],[function(module,exports,__webpack_require__){"use strict";var $=__webpack_require__(1),child_process=__webpack_require__(2),exec=child_process.exec,command="npm run browser";$(function(){$("#load").click(function(){var webview_wrapper=$("#webview-wrapper");$(".webview").remove();var url=$("#url").val(),webview=$("<webview>");webview.attr("class","webview"),webview.attr("id","webview"),webview.attr("src",url),webview_wrapper.append(webview);var webview_add_event=document.getElementById("webview");webview_add_event.addEventListener("load-commit",function(event){$("#url").val(event.url)})}),$("#open-dev").click(function(){var webview=document.getElementById("webview");webview.openDevTools()}),$("#new-window").click(function(){exec(command,function(error,stdout,stderr){})}),$("#undo").click(function(){var webview=document.getElementById("webview");webview.executeJavaScript("history.back()")}),$("#redo").click(function(){var webview=document.getElementById("webview");webview.executeJavaScript("history.forward()")})})},,function(module,exports){module.exports=require("child_process")}]);