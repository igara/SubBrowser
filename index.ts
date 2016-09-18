// jQueryのモジュール
import $ = require("jquery");
// child_processのモジュール
import child_process = require("child_process");
// コマンド実行
const exec = child_process.exec;
// コマンド内容
const command = "npm run browser";

// onLoad
$(function(){

  // Loadボタンを押下
  $("#load").click(function() {
    // WebViewを表示する箇所
    var webview_wrapper = $("#webview-wrapper");
    $(".webview").remove();

    // 入力フォームのURL
    var url = $("#url").val();

    // WebViewの作成
    var webview = $("<webview>");
    webview.attr("class", "webview");
    webview.attr("id", "webview");
    webview.attr("src", url);
    // WebViewの追加
    webview_wrapper.append(webview);
    var webview_add_event:any = document.getElementById("webview");
    // WebViewのイベント追加
    webview_add_event.addEventListener("load-commit", (event:any) => {
      $("#url").val(event.url);
    });

  });

  // Open Dev Toolを押下
  $("#open-dev").click(function() {
    var webview:any = document.getElementById("webview");
    var webviewElement:Electron.WebViewElement;
    webviewElement = webview;
    // 開発者ツールを開く
    webviewElement.openDevTools();
  });

  // New Windowを押下したとき
  $("#new-window").click(function() {
    exec(command, (error:any, stdout:any, stderr:any) => {
    });
  });

  // Undoを押下したとき
  $("#undo").click(function() {
    var webview:any = document.getElementById("webview");
    var webviewElement:Electron.WebViewElement;
    webviewElement = webview;
    webviewElement.executeJavaScript("history.back()");
  });

  // Redoを押下したとき
  $("#redo").click(function() {
    var webview:any = document.getElementById("webview");
    var webviewElement:Electron.WebViewElement;
    webviewElement = webview;
    webviewElement.executeJavaScript("history.forward()");
  });
});
