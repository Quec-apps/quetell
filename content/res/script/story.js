function imageError() {
$("body").empty();
$("body").append(`
<style>
.error-bg {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
}
.error-txt {
    width: 100%;
    text-align: center;
    font-size: 4vw;
}
.error-btn {
    font-size: 5vw;
    padding: 1vh 4vw;
    border-radius: 10px;
    background-color: #fbb302;
} .error-btn:active {opacity:.6;}
</style>
<div class="error-bg">
<div class="error-txt">
    Failed to load
</div>
<div class="error-btn" onclick="location.reload();">Retry</div>
</div>
`);
}
$("img").attr("onerror", "imageError();");

function intro() {
setTimeout(() => {$(".top").css({opacity:'1', transform:'scale(1)'});}, 100);
setTimeout(() => {$(".mid").css({opacity:'1', transform:'scale(1)'});}, 200);
setTimeout(() => {$(".content").css({opacity:'1', transform:'scale(1)'});}, 300);
}
intro();

function outro() {
setTimeout(() => {$(".top").css({opacity:'0', transform:'scale(1.2)'});}, 300);
setTimeout(() => {$(".recent-box").css({opacity:'0', transform:'scale(1.2)'});}, 200);
setTimeout(() => {$(".bottom-ct").css({opacity:'0', transform:'scale(1.2)'});}, 100);
}

opened = localStorage.getItem("opened");
openedNumber = localStorage.getItem("openedNumber");
$("h1").html(window[opened+"_ti"+openedNumber]);
//recent_title, recent_type, recent_number
recent = [$("h1").text(), opened, openedNumber]; 
localStorage.setItem("recent", JSON.stringify(recent));
localStorage.setItem(opened+"_recent", JSON.stringify(recent));

$(document).ready(function() {

function checkMode() {
    mode = localStorage.getItem("mode");
    if (mode == "dark") {
        $("body").css({backgroundColor:'#131313'});
        $("p").css({color:'#ababab'});
        $(".button").css({backgroundColor:'#ababab'});
    } else {
        $("body").css({backgroundColor:'white'});
        $("p").css({color:'#636265'});
        $(".button").css({backgroundColor:'white'});
    }
}
checkMode();
$(".mode").click(function() {
if (mode == "dark") {
    mode = "light";
} else {
    mode = "dark";
}
localStorage.setItem("mode", mode);
checkMode();
});

function checkLang() {
lang = localStorage.getItem("lang");
    if (lang == "mal") {
    $(".mal").fadeIn(0);
    $(".eng").fadeOut(0);
} else {
    $(".mal").fadeOut(0);
    $(".eng").fadeIn(0);
}
}
checkLang();
$(".lang").click(function() {
if (lang == "mal") {
lang = "eng"
} else {
    lang = "mal"
}
localStorage.setItem("lang", lang);
checkLang();
});

function checkTextSize() {
    textSize = parseInt(localStorage.getItem("textSize"));
    $("p").css({fontSize: textSize+'vw'});
}
checkTextSize();
$(".text_size").click(function() {
if (textSize >= 6) {
    textSize = 4;
} else {
    textSize++;
}
localStorage.setItem("textSize", textSize);
checkTextSize();
});

function checkWishlist() {
if (localStorage.getItem("w_"+opened+openedNumber) == null) { //w_ = wishlist
    $(".wishlist-img").attr("src", "../../../res/icons/not_wishlist.png")
} else {
    $(".wishlist-img").attr("src", "../../../res/icons/love.png")
}
}
checkWishlist();
$(".wishlist").click(function() {
if (localStorage.getItem("w_"+opened+openedNumber) == null) {
localStorage.setItem("w_"+opened+openedNumber, $("h1").text());
} else {
localStorage.removeItem("w_"+opened+openedNumber);  
}
checkWishlist();
});

function checkComplete() {
if (localStorage.getItem("c_"+opened+openedNumber) == null) { //c_ = complete
    $(".complete-img").attr("src", "../../../res/icons/not_complete.png")
} else {
    $(".complete-img").attr("src", "../../../res/icons/complete.png")
}
}
checkComplete();
$(".complete").click(function() {
if (localStorage.getItem("c_"+opened+openedNumber) == null) {
localStorage.setItem("c_"+opened+openedNumber, $("h1").text());
} else {
localStorage.removeItem("c_"+opened+openedNumber);  
}
checkComplete();
});

function checkLike() {
if (localStorage.getItem("l_"+opened+openedNumber) == null) {
    $(".like-img").attr("src", "../../../res/icons/not_like.png");
} else {
    $(".like-img").attr("src", "../../../res/icons/like.png");
}
}
checkLike();
$(".like").click(function() {
if (localStorage.getItem("l_"+opened+openedNumber) == null) {
    localStorage.setItem("l_"+opened+openedNumber, 1);
} else {
    localStorage.removeItem("l_"+opened+openedNumber);
}
checkLike();
});

$(".next").click(function() {
outro();
openedNumber++;
localStorage.setItem("openedNumber", openedNumber);
setTimeout(() => {
    location.replace("../"+openedNumber+"/index.html");
}, 600);
});
$(".prev").click(function() {
    outro();
    openedNumber--;
    localStorage.setItem("openedNumber", openedNumber);
    setTimeout(() => {
        location.replace("../"+openedNumber+"/index.html");
    }, 600);
    });

if (localStorage.getItem(opened+"_total") == openedNumber) {
    $(".next").css({opacity:'.5'});
    $(".next").off("click");
}
if (openedNumber == 1) {
    $(".prev").css({opacity:'.5'});
    $(".prev").off("click");
}






}); //document ready closed

