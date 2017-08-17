/**
 * Created by Emel on 17.08.2017.
 */
$(document).ready(function(){
    getTweet();
    var text,title="";
    $(document).on("click","#getQuote", function () {
        getTweet();
    })
});

function getTweet() {
    $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
        var html="";
        html+="<div id='quoteContent'>"+a[0].content +"</div>";
        html+="<div id='quoteTitle'><p>— "+a[0].title+ "</p></div>";
        $(".myQuote").html(html);
        text=a[0].content;
        title=a[0].title;
        text=text.replace("<p>",'"');
        text=text.replace("</p>",'"');
        $("#tweet-quote").attr('href','https://twitter.com/intent/tweet?hashtags=quotes&text='+text+"—"+title);
        setRandomColor();
    });
}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#d1';
    for (var i = 0; i < 3; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color+4;
}
function setRandomColor() {
    $("html body").css("background-color", getRandomColor());
}

