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
setTimeout(() => {$(".recent-box").css({opacity:'1', transform:'scale(1)'});}, 200);
setTimeout(() => {$(".bottom-ct").css({opacity:'1', transform:'scale(1)'});}, 300);
}
intro();

function outro() {
setTimeout(() => {$(".top").css({opacity:'0', transform:'scale(1.2)'});}, 300);
setTimeout(() => {$(".recent-box").css({opacity:'0', transform:'scale(1.2)'});}, 200);
setTimeout(() => {$(".bottom-ct").css({opacity:'0', transform:'scale(1.2)'});}, 100);
}

opened = localStorage.getItem("opened");
function clickFunc(openedNumber) {
outro();
localStorage.setItem("openedNumber", openedNumber);
setTimeout(() => {
    parent.location=""+openedNumber+"/index.html";
}, 600);
}

if (localStorage.getItem(opened+"_recent") != null) {
    recent = JSON.parse(localStorage.getItem(opened+"_recent"));
    $(".recent-ti").html(recent[0]);
    $(".recent-box").click(function() { 
        outro();
        setTimeout(() => {
        parent.location=recent[2]+"/index.html"; 
        }, 600);
    });
    $(".recent-img").attr("src", recent[2]+"/poster.jpg");
} else {$(".recent-box").fadeOut(0);}

for (let i = 1; i <= window[opened+"_total"]; i++) {
$(".content").append(`
<div class="box box${i}" onclick="clickFunc(${i})">
    <div class="box-img-bg"><img src="${i}/poster.jpg" class="box-img"></div>
    <div class="box-sub">
        <div class="ct-title">${i}. ${window[opened+"_ti"+i]}</div>
        <div class="rating-bg">
            <div class="rating"> <img src="../../res/icons/not_like.png" alt="like" class="like-img"><span>${window[opened+"_li"+i]}k</span></div>
            <img src="../../res/icons/love.png" class="wishlist wishlist-img wishlist${i}">
            <img src="../../res/icons/complete.png" class="wishlist complete-img complete${i}">
        </div>
    </div>
</div>
`);
if (localStorage.getItem("w_"+opened+i) != null) {
    $(".wishlist"+i).css({visibility:'visible'});
}
if (localStorage.getItem("c_"+opened+i) != null) {
    $(".complete"+i).css({visibility:'visible'});
}
}