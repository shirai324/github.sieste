$(function(){

  // async処理
  var sample = new Promise(function(resolve) { 
      resolve('true!');
  });

  //ハンバーガーメニューからページ内へ遷移部分
  // グローバルメニューのスムーススクロール
  // スムーススクロール
  $(function () {
    //*ページ内リンクの指定
    $('a[href^="/#"]').click(function () {
      $('#drawer-check')[0].checked = false;

      var href = $(this).attr("href").replace("/", "");
      console.log(href);
      var target = $(href == "#" || href == "" ? 'body' : href);
      var position = target.offset().top;
      $("html, body").animate({ scrollTop: position }, 550, "swing");
      return false;
    });
    var url = $(location).attr('href');
    if (url.indexOf("#") == -1) {
      // ほかの処理
    } else {
      var url_sp = url.split("#");
      var hash = '#' + url_sp[url_sp.length - 1];
      var target2 = $(hash);
      var position2 = target2.offset().top;
      $("html, body").animate({
        scrollTop: position2
      }, 550, "swing");
    }
  });


  // トップスワイパー部分
  var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    speed: 3000,
    autoplay:{
      delay: 2000,
      stopOnLastSlide: false,
      disableOnInteraction: false,
      reverseDirection: false
    },
    effect: 'fade',
  });

  // スクロールフェードイン部分（見出し）
  $(window).scroll(function (){
    $('.heading-txtbox').each(function(){
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 100){
        $(this).addClass('scrollin');
      }
    });
  });

  // スクロールフェードイン部分（コンタクトgメール、電話番号部分）
  $(window).scroll(function (){
    $('.contact-txt1').each(function(){
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 100){
        $(this).addClass('scrollin');
      }
    });
  });

  // スクロールフェードイン部分（コンタクト部分）
  $(window).scroll(function (){
    $('.sns-box').each(function(){
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight){
        $(this).addClass('scrollin');
      }
    });
  });


  // スクロールフェードイン部分（メニュータイトル自動部分）
  window.onload = function() {
    scroll_effect();
  
    $(window).scroll(function(){
      scroll_effect();
    });
  
    function scroll_effect(){
      $('.heading-txtbox2').each(function(){
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight){
          $(this).addClass('scrollin');
        }
      });
    }
  };

  // スクロールフェードイン部分（ニュース概要部分）
  $(window).scroll(function (){
    $('.news-txtbox').each(function(){
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 150){
          $(this).addClass('scrollin');
      }
    });
  });
    

  // アコーディオンメニュー
  // アコーディオンボタンのクリックイベント発火時にコンテントの開閉を制御する
  $(".accordion_btn").click(function(){
    toggleContent(this);
  });

  // アコーディオンの開閉の制御
  function toggleContent(el) {
    const target = $(el).next();
    if( target.hasClass("show")){
      target.removeClass("show");
      target.animate({
        "height": "0",
      },
      500);
    } else {
      target.addClass("show");
      console.log(target.children());
      target.animate({
        "height": ((target.children().length * 530) + 80) + "px",
      },
      500);
    }
}

});
