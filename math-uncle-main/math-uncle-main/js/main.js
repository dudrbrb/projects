window.onload = function(){
  // 화면 로드되면 첫번째 슬라이드 모션 실행시키기
  titleMotion()
  SwiperMotion1(TLMAX.Motion1).play(0, false);
}

var TLMAX = {
  Motion1: new TimelineMax(),
  Motion2: new TimelineMax(),
  Motion3: new TimelineMax(),
  Motion4: new TimelineMax(),
};
  
  var swiper = new Swiper('.swiper-container', {
    height: '1000',
    // loop:true,
    direction : 'vertical',
    hashNavigation: {
      replaceState: true,
      watchState: true
    },
    on: {
      slideChangeTransitionStart: slideStartEvent,
      slideChangeTransitionEnd: slideEndEvent
    }
  });

  function slideStartEvent() {
    // 슬라이드 이동이 시작될 때 실행하는 함수
    swipeIndex(this);
  }
  
  function slideEndEvent() {
    // 슬라이드 이동이 끝난 후 실행하는 함수
    motionReset();

    //모션 실행
    var idx = this.realIndex;
    titleMotion(idx);
    switch (idx) {
      case 0:
        SwiperMotion1(TLMAX.Motion1).play(0, false);
        break;
      case 1:
        SwiperMotion2(TLMAX.Motion2).play(0, false);
        break;
      case 2:
        SwiperMotion3(TLMAX.Motion3).play(0, false);
        break;
      case 3:
        SwiperMotion4(TLMAX.Motion4).play(0, false);
        break;
    }
  }

  //스와이프 모션 초기화 이벤트
  function motionReset() {
    TLMAX.Motion1.pause(0, false);
    TLMAX.Motion2.pause(0, false);
    TLMAX.Motion3.pause(0, false);
    TLMAX.Motion4.pause(0, false);
  
  }
  
  function SwiperMotion1(tl) {
    tl.clear()
      .staggerTo('.main-link li img', 0.4, {opacity: 1}, 0.2)
    return tl;
  }
  
  function SwiperMotion2(tl) {
    tl.clear()
      .staggerTo('.target-wrapper > div', 0.4, {opacity: 1, x: 0, y: 0}, 0.2)
    
      return tl;
  }
  
  function SwiperMotion3(tl) {
    tl.clear()
    .staggerTo('.curriculum li > *', 0.4, {opacity: 1, x: 0},0.2) 
  
    return tl;
  }
  function SwiperMotion4(tl) {
    tl.clear()
    .staggerTo('.international-curriculum li', 0.4, {opacity: 1}, 0.2) 
  
    return tl;
  }
  
  function swipeIndex(e) {
    var idx = e.realIndex;
    navColorChange(idx);
  }
  
  function titleMotion(idx) {
    if(idx == undefined) idx = 0;
    // 타이틀 모션 리셋
    TweenMax.set('.swiper-slide .title-wrapper > *', {opacity: 0, y: 40})
    TweenMax.set('.swiper-slide .title-wrapper span', {className:"-=show"})
    
    // 현재 슬라이드 타이틀만 나타나는 모션
    console.log(idx)
    TweenMax.staggerTo('.swiper-slide[data-hash="slide'+ (idx + 1) +'"] .title-wrapper > *', 0.4, {opacity: 1, y: 0}, 0.3)
    TweenMax.set('.swiper-slide[data-hash="slide'+ (idx + 1) +'"] .title-wrapper span', {className:"+=show", delay: 0.4})
  }
  
  function navColorChange(idx){
    // 네비게이션 색 바꾸는 함수
    var cssText = (idx == 0 || idx == 4
      ? ['none', '#fefefe', 'logo_w'] 
      :['#fefefe', '#333', 'logo']
      )
    TweenMax.to('.nav-wrapper', 0.4, {background: cssText[0]})
    TweenMax.to('.nav-bar', 0.4, {background: cssText[1]})
    document.querySelector('.logo img').setAttribute('src', 'images/'+cssText[2]+'.png')

  }