$(function(){

    // async処理
    var sample = new Promise(function(resolve) { 
        resolve('true!');
    });

    // ページトップへ戻るボタン部分
  var pagetop1 = $('#page_top');   
    pagetop1.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {  //100pxスクロールしたら表示
            pagetop1.fadeIn();
        } else {
            pagetop1.fadeOut();
        }
    });
    pagetop1.click(function () {
      $('body,html').animate({
          scrollTop: 0
        }, 800); //0.8秒かけてトップへ移動
        return false;
    });

 $('#page_top').hover(function() {
      $(this).fadeTo("4000",0.3); 
    },function(){
      $(this).fadeTo("4000",0.6); 
    });
 });

    // ヘッダーロゴ部分
    var pagetop2 = $('header img');   
    pagetop2.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800); //0.8秒かけてトップへ移動
        return false;
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
    
    // スクロールフェードイン部分（コンセプト）
    $(window).scroll(function (){
        $('.concept-about').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 100){
                $(this).addClass('scrollin');
            }
        });
    });

    // スクロールフェードイン部分（こだわりテキスト部分）
    $(window).scroll(function (){
        $('.pick p').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 150){
                $(this).addClass('scrollin');
            }
        });
    });

    // スクロールフェードイン部分（店舗情報部分）
    $(window).scroll(function (){
        $('.info').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 150){
                $(this).addClass('scrollin');
            }
        });
    });

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

    // スクロールフェードイン部分（メニュー画像部分）
    $(window).scroll(function (){
        $('#loopslider').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight){
                $(this).addClass('scrollin');
            }
        });
    });

    // メニュースライドショー部分
    $('#loopslider').each(function(){
        var loopsliderWidth = $(this).width();
        var loopsliderHeight = $(this).height();
        $(this).children('ul').wrapAll('<div id="loopslider_wrap"></div>');
 
        var listWidth = $('#loopslider_wrap').children('ul').children('li').width();
        var listCount = $('#loopslider_wrap').children('ul').children('li').length;
 
        var loopWidth = (listWidth)*(listCount);
 
        $('#loopslider_wrap').css({
            top: '0',
            left: '0',
            width: ((loopWidth) * 2),
            height: (loopsliderHeight),
            overflow: 'hidden',
            position: 'absolute'
        });
 
        $('#loopslider_wrap ul').css({
            width: (loopWidth)
        });
        loopsliderPosition();
 
        function loopsliderPosition(){
            $('#loopslider_wrap').css({left:'0'});
            $('#loopslider_wrap').stop().animate({left:'-' + (loopWidth) + 'px'},30000,'linear');
            setTimeout(function(){
                loopsliderPosition();
            },30000);
        };
 
        $('#loopslider_wrap ul').clone().appendTo('#loopslider_wrap');

});

