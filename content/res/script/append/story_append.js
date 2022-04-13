$("body").prepend(`
<div class="top">
<div class="poster-bg">
    <img src="poster.jpg" class="poster-img">
</div>
<h1></h1>
</div>

<div class="mid">
<div class="button like"><img src="../../../res/icons/not_like.png" alt="like" class="mid-img like-img"><span id="like-txt">10.3K</span></div>
<div class="button complete"><img src="../../../res/icons/not_complete.png" alt="Complete" class="mid-img complete-img"></div>
<div class="button mode"><img src="../../../res/icons/night.png" alt="Night Mode" class="mid-img"></div>
<div class="button lang"><img src="../../../res/icons/lang.png" alt="Language" class="mid-img"></div>
<div class="button text_size"><img src="../../../res/icons/size.png" alt="Text Size" class="mid-img"></div>
<div class="button wishlist"><img src="../../../res/icons/not_wishlist.png" alt="Wishlist" class="mid-img wishlist-img"></div>
</div>
`);

$("body").append(`
<div class="navigate">
<div class="navigate-btn prev">Previous</div>
<div class="navigate-btn next">Next</div>
</div>
`);