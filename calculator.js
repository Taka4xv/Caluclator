'use strict';
$(document).ready(function(){
    let ActiveNum_btn;
    let Symbol_btn;
    let LastInput;
    let DisplayMonitor

 
 //数字ボタンクリック
    $(".btn_num").click(function NumberClick(){
        ActiveNum_btn = $(this).text()
        updateNum();
        console.log(ActiveNum_btn);
    });
    function updateNum(){
        DisplayMonitor = $("#Display").text();
        if(DisplayMonitor != "0" ){
            DisplayMonitor = DisplayMonitor.concat(ActiveNum_btn);
        }else{
            DisplayMonitor = ActiveNum_btn;
        };
        $("#Display").text(DisplayMonitor);
    };    
    
    
// 四則演算記号クリック
    $(".btn_symbol").click(function() {
        DisplayMonitor = $("#Display").text();
        Symbol_btn = $(this).text();
        LastInput = DisplayMonitor.endsWith("*") || DisplayMonitor.endsWith("/") || DisplayMonitor.endsWith("-") || DisplayMonitor.endsWith("+")
        if(!(LastInput)){
            updateSymbol()
        }
    });
    function updateSymbol(){
        DisplayMonitor = $("#Display").text();
        DisplayMonitor = DisplayMonitor.concat(Symbol_btn);
        $("#Display").text(DisplayMonitor);
        console.log(DisplayMonitor)
    };
    
// イコール
    $("#btn_equal").click(function equal(){
        DisplayMonitor = $("#Display").text();
        var result = eval(DisplayMonitor);
        $("#Display").text(result)
    });
    
    
// 全削除
    $("#btn_AC").click(function all_clear(){
        DisplayMonitor = $("#Display").text();
        $("#Display").text("0");
    });
    
    
// 一桁削除
    $("#btn_clear").click(function one_clear(){
        DisplayMonitor = $("#Display").text();
        let count = DisplayMonitor.length;/*文字カウントし、一桁以下の場合、0を入れる*/
        if(count<=1){
            $("#Display").text("0");
        }else{
            DisplayMonitor = DisplayMonitor.slice(0,-1);/*一番最後尾の文字を削除する*/
            $("#Display").text(DisplayMonitor);
        }
    });
    
    
    $("#btn_period").click(function period(){
        DisplayMonitor = $("#Display").text();
        LastInput = DisplayMonitor.endsWith("0")||DisplayMonitor.endsWith("1")||DisplayMonitor.endsWith("2")||DisplayMonitor.endsWith("3")||DisplayMonitor.endsWith("4")
        ||DisplayMonitor.endsWith("5")||DisplayMonitor.endsWith("6")||DisplayMonitor.endsWith("7")||DisplayMonitor.endsWith("8")||DisplayMonitor.endsWith("9")
    });
});