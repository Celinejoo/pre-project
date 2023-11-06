$(function(){
    $('.hambuger').on('click',function(){
        $('nav').addClass('on');
    });

    $('.menu.close').on('click',function(){
        $('nav').removeClass('on');
    });

   
    $('.slideArea').slick({
        infinite:true,
        slideToShow:1,
        slideToScroll:1,
        arrow:true,

        
    });

    $('.popupSlide').slick({
        infinite:true,
        slideToShow:1,
        slideToScroll:1,
        arrow:true, // 화살표 유무 
        draggable:false, // 드래그 여부
        autoplay: true, // 자동으로 넘어가게 하는옵션 
        autoplaySpeed: 2000, // 시간초
    });

    // $('.photo').on('click',function(){
    //     $('.popupWrap').addClass('active');
    
    // });


    //  .length : .length는 선택한 요소의 개수를 반환하는 속성입니다
    // html 내에 있는 popupWrap 갯수만큼 반복문을 실행해야함 에서
    // popupWrap 갯수가 조건문이 되어야 하기 때문에 popupWrap 갯수를 알 수 있는 속성이 필요합니다.
    
    //*** for문**** 
    // - let i = 0 : 초기값 
    // - i<3 : 조건문
    // -i++ : 반복문이 돌 때  마다 i 값 추가
    
    for(let i = 0; i<$('.popupWrap').length; i++){
        $('.photo').eq(i).on('click',function(){
            $('.popupWrap').eq(i).addClass('active');
        })
    }

    $('.close').on('click',function(){
        $('.popupWrap').removeClass('active');
    });

    $('.popupWrap').on('click', function(e){

        if(e.target == e.currentTarget){
            $('.popupWrap').removeClass('active');
           
        }
        //e.target : 사용자가 실제로 클릭한 요소
        // e.currentTarget =$(this) : 이벤트 리스너가 달린 곳

    });


    //https://swiperjs.com/get-started
    //swiper참고해서 마크업 그대로 하시고, 스크립트 적용해주면 됩니다.
    var contentsSwiper = new Swiper(".swiperContent", {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        pagination : { // 페이징 설정
            el : '.swiper-pagination',
            clickable : true,
            type: "progressbar", // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
        },           
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        
        autoplay :{  // 자동 슬라이드 설정 , 비 활성화 시 false
            
          delay : 3000,
          disableOnInteraction: false,
          
        }
        
      });
      
    
    //다섯번째 팝업창 나오는 것과 비슷합니다.
    //tab메뉴의 갯수가 늘어나도 스크립트를 고칠 필요가 없다는 장점이 있어서 for문을 사용합니다.
    for (let i=0; i<$('.tabMenu').length; i++){
        $('.tabMenu').eq(i).on("click",function(){
        $('.tabMenu').removeClass('active');
        $('.tabContent').removeClass('active');
        $('.tabMenu').eq(i).addClass('active');
        $('.tabContent').eq(i).addClass('active');
    });
   }


    //각각의 탭메뉴에 class를 지정해서 이벤트를 줘도 상관이 없습니다.
    //$('.tabMenu1').on('click',function(){
        //$('.tabMenu').removeClass('active');
        //$('.tabMenu1').addClass('active');
        //$('.content_01').addClass('active');
        //$('.content_02, .content_03').removeClass('active');
    // });

    //$('.tabMenu2').on('click',function(){
        //$('.tabMenu').removeClass('active');
        //$('.tabMenu2').addClass('active');
        //$('.content_02').addClass('active');
        //$('.content_01, .content_03').removeClass('active');
    // });

       //$('.tabMenu3').on('click',function(){
        //$('.tabMenu').removeClass('active');
        //$('.tabMenu3').addClass('active');
        //$('.content_03').addClass('active');
        //$('.content_01, .content_02').removeClass('active');
    // });


})

