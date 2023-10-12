$(document).ready(function(){
    imageswap(".m_shoes_area ul li img");
    imageswap(".listArea > div ul li figure img");
    imageswap(".lvrSustainableArea .susCarousel li figure img");
    panelControl("header > div input[value='fnbOpen']");
    panelControl("header > div div ul li input[value='SEARCH']");
    panelControl(".listArea > div > input[type='button']");
    tabMenu(".detailArea aside .tabMenu li");
    countSet(".shoppingBag_Area > div:nth-of-type(1) ol li > div > input[type='button']");
    bxSlider();
    popupControl(".account_Area #acc_Member div input[value='click here']");
    popupControl(".account_Area #acc_Member > input");
    popupControl(".account_Area #acc_Address fieldset > div input");
    popupControl(".checkout_payment_Area > form > div input[value='Pay now']");
    togglePassword();
    accControl(".footer_FAQ_Area ol li h3");
});

function imageswap(target){
    var imgPath = "images/";
    var currentImg = null;
    var currentNumb = '';

    $(target).hover(function(){
        currentNumb = $(this).attr("data-imgnumb"); 
        currentImg = imgPath + currentNumb + "HOVER.jpg";
        $(this).attr('src',currentImg);
    });
    $(target).mouseleave(function(){ 
        currentImg = imgPath + currentNumb + ".jpg";
        $(this).attr('src',currentImg);
    });

}
function tabMenu(){
    $(".tabMenu li").click(function(){
        var panelName = $(this).attr("data-tabPage");
        $(".tabMenu li").removeClass("activated");
        $(this).addClass("activated");
        $(".tabPage").removeClass("activated");
        $("#" + panelName).addClass("activated");
    });
}
function panelControl(openBtn){
    var panelName = '';
    $(openBtn).click(function(){
        panelName = "#"+ $(this).attr("data-Panel");
        $(panelName).addClass("active");
    });
    $(".btn_close").click(function(){
        $(panelName).removeClass("active");
    });
}
function countSet(){
    $("#product-quantity input[value='minusBtn']").click(function(){ 
        this.parentNode.querySelector('input[type=number]').stepDown();
    });
    $("#product-quantity input[value='plusBtn']").click(function(){
        this.parentNode.querySelector('input[type=number]').stepUp();
    });
}
function bxSlider(){
    $(".susCarousel").bxSlider({
        maxSlides: 6.5,
        minSlides: 1,
        slideWidth: 260,
        slideMargin: 50
    });
    $(".mainCarousel").bxSlider({
        maxSlides: 4,
        minSlides: 1,
        slideWidth: 423,
        slideMargin: 40
    });
}
function popupControl(openBtn){
    var popupName = null;
    $(openBtn).click(function(){ 
        popupName = "#" + $(this).attr('data-popup'); 
        $(popupName).addClass("active"); 
    });
    $(".btn_close").click(function(){
        $(popupName).removeClass("active"); 
    });
}
function togglePassword(){
    var $toggleTarget = $(".material-icons.toggleVisible");
    var toggleStatus = false;

    $toggleTarget.click(function(){
        toggleStatus = !toggleStatus;
        if(toggleStatus == true){
            $(this).text('visibility');
            $(this).siblings().attr('type','text');
        }else{
            $(this).text('visibility_off');
            $(this).siblings().attr('type','password');
        }
    }); 
}
function accControl(accBtn){
    $(accBtn).click(function(){
        $(this).toggleClass("active");
    });
}