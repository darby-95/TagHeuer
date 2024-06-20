gsap.registerPlugin(Draggable,ScrollTrigger);

// 🌟 Watches - Slide
function Watches() {
  let list = document.querySelectorAll(".watchesBox ul li");
  console.log(list)
  let imgBoxs = document.querySelectorAll(".imgBox")
  let txtBoxs = document.querySelectorAll('.textBox')

  // 가로 스크롤
  let scrollTween = gsap.to(list, {
    xPercent: -100 * (list.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".watches",
      start: "center center",
      scrub: 1,
      end: "+=300%",
      pin: true
    }
  })

  imgBoxs.forEach(function (imgBox) {

    gsap.timeline({
        scrollTrigger: {
          trigger: imgBox,
          start: "center right",
          end: 'center center',
          containerAnimation: scrollTween,
          scrub: true,
        }
      })
      .to(imgBox, {
        'clip-path': 'inset(0%)',
        ease: "none",
        duration: 0.5
      }, 0)

    gsap.timeline({
        scrollTrigger: {
          trigger: imgBox,
          start: "center center",
          end: 'center left',
          containerAnimation: scrollTween,
          scrub: true,
        }
      })
      .to(imgBox, {
        'clip-path': 'inset(30%)',
        ease: "none",
        duration: 0.5
      }, 0)
  })

  txtBoxs.forEach(function (txtBox) {
    gsap.timeline({
        scrollTrigger: {
          trigger: txtBox,
          start: "center 70%",
          end: 'center 40%',
          containerAnimation: scrollTween,
          scrub: true,
        }
      })
      .to(txtBox, {
        opacity: 1,
        x: -100
      }, 0)

    gsap.timeline({
        scrollTrigger: {
          trigger: txtBox,
          start: "center 30%",
          end: 'center 20%',
          containerAnimation: scrollTween,
          scrub: true,
        }
      })
      .to(txtBox, {
        opacity: 0
      }, 0)
  })
}
Watches()
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 🌟 3D Carrera BG TEXT efccect
function tourbillonText() {
  const DICTIONARY = "0123456789qwertyuiopasdfghjklzxcvbnm".split('');
  const LETTER_TOTAL = 406;
  const CENTER_WORD = 'Tourbillon';
  const CW_START = LETTER_TOTAL / 2 - CENTER_WORD.length / 2;
  const CW_END = CW_START + CENTER_WORD.length;
  const ROW_LENGTH = 45;

  var getBoltStartingPositions = function () {
      var results = [];
      results.push(CW_START);
      results.push(CW_END + 1);
      for (var i = CW_START; i < CW_END + 1; i++) {
          var top = i - ROW_LENGTH;
          var bottom = i + ROW_LENGTH + 1;
          results.push(top, bottom);
      }
      return results;
  }

  const STARTING_POSITIONS = getBoltStartingPositions();

  var el = document.getElementById('hackerLightning');

  function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  var genRanChar = function () {
      var index = Math.floor(Math.random() * DICTIONARY.length);
      return DICTIONARY[index];
  }

  var genRanString = function (amt) {
      var string = ``;
      var wordIndex = 0;
      for (var i = 0; i < amt; i++) {
          if (i >= CW_START && i < CW_END) {
              string += `<span class="static">${CENTER_WORD[wordIndex]}</span>`;
              wordIndex++;
          } else {
              string += `<span>${genRanChar()}</span>`;
          }
      }
      return string;
  }

  function pickRandomProperty(obj) {
      var result;
      var count = 0;
      for (var prop in obj)
          if (Math.random() < 1 / ++count)
              result = prop;
      return result;
  }

  var Bolt = function () {
      this.position = STARTING_POSITIONS[getRandomIntInclusive(0, STARTING_POSITIONS.length)];
      this.lastDirection = '';
      this.moves = {
          left: -1,
          right: 1,
          up: -ROW_LENGTH,
          down: ROW_LENGTH
      }
      this.move = function () {
          var direction = pickRandomProperty(this.moves);
          while (direction === this.lastDirection) {
              direction = pickRandomProperty(this.moves);
          }
          this.lastDirection = direction;
          var move = this.moves[direction];
          var current = document.querySelector(`#hackerLightning span:nth-child(${this.position})`);
          var next = document.querySelector(`#hackerLightning span:nth-child(${this.position += move})`);
          if (next) {
              current.style.opacity = 1;
              current.style.color = '#363636';
              next.style.opacity = 1;
              next.style.color = '#fff';
          } else {
              current.style.opacity = 1;
              current.style.color = '#363636';
              return false;
          }
      }
      this.strike = function () {
          var self = this;
          var animate = setInterval(function () {
              var move = self.move();
              if (move === false) {
                  clearInterval(animate);
              }
          }, 16);
      }
  }

  el.innerHTML = genRanString(LETTER_TOTAL);

  var genBolts = function (amt) {
      var results = [];
      for (var i = 0; i < amt; i++) {
          results.push(new Bolt());
      }
      return results;
  }

  var animateBolts = function () {
      var bolts = genBolts(15);
      for (var i = 0; i < bolts.length; i++) {
          bolts[i].strike();
      }
  }

  animateBolts();
}
gsap.timeline({
  scrollTrigger: {
    trigger: "#tourbillon1",
    start: "top bottom",
    scrub: 1,
    toggleActions: "restart none reverse none",
    onEnter: tourbillonText
  }
})
// 🌟 tourbillon-detail 모든 영역 스크롤 트리거 함수
function menuColor() {
  const icons = document.querySelectorAll('.icon');
  icons.forEach((icon, idx) => {
      icon.style.color = "#000"
  })
}
function menuColor2() {
  const icons = document.querySelectorAll('.icon');
  icons.forEach((icon, idx) => {
      icon.style.color = "#FFF"
  })
}
gsap.timeline({
  scrollTrigger: {
      trigger: ".tourbillon-detail",
      start: "top top",
      end: "100%",
      scrub: 1,
      onEnter: menuColor,
      onLeave: menuColor2,
      onLeaveBack: menuColor2,
      //markers: true
  }
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 🌟 tourbillon-detail 1-4 영역별 스크롤 트리거
let bAfterStyle = document.createElement("style");

// 밑줄 긋기
function textUnderlinebefore() {
  bAfterStyle.innerHTML = `b::after {content: ""; width: 0%; height: 25px; position: absolute; top: 0; left:0; background-color: #F2EA79; transition:3s; opacity:50%; z-index:-1;}`;

  document.head.appendChild(bAfterStyle);
}
textUnderlinebefore()
// 밑줄 없애기
function textUnderlineafter() {
  bAfterStyle.innerHTML = bAfterStyle.innerHTML.replace("width: 0", " width: 100");
}

// 페이지 1
gsap.timeline({
      scrollTrigger: {
          trigger: ".tourbillon-detil-page1",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          onEnter: textUnderlineafter,
          onLeaveBack: textUnderlinebefore
      }
  })
  .to(".tourbillon-detil-page1 .tourbillon-info-ref", {
      yPercent: 150
  })
  .to(".tourbillon-detil-page1 .tourbillon-info-ref .ref, .tourbillon-info-ref .name, .tourbillon-info-ref .price", {
      autoAlpha: 1,
      y: 50,
      stagger: 1
  })
  .to(".tourbillon-detil-page1 .tourbillon-detail-info", {
      y: 200,
      xPercent: -330,
      opacity: 1
  })
// 페이지 2
gsap.timeline({
      scrollTrigger: {
          trigger: ".tourbillon-detil-page2",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          onEnter: textUnderlineafter,
          onLeaveBack: textUnderlinebefore
      }
  })
  .to(".tourbillon-detil-page2 .img-box", {
      xPercent: -50
  })
  .to(".tourbillon-detil-page2 .tourbillon-detail-info", {
      xPercent: -450,
      opacity: 1
  })
// 페이지 3
gsap.timeline({
      scrollTrigger: {
          trigger: ".tourbillon-detil-page3",
          start: "top 80%",
          end: "bottom bottom",
          scrub: 1,
      }
  })
  .to(".tourbillon-detil-page3 .desc-box1", {
      xPercent: 50,
      delay: 2
  })
  .to(".tourbillon-detil-page3 .desc-box2", {
      xPercent: 90,
      y: -200,
      scale: 1.4
  })
  .to(".canvas-cont", {
      opacity: 0
  })
// 페이지 4
gsap.timeline({
      scrollTrigger: {
          trigger: ".tourbillon-detil-page4",
          start: "top 70%",
          end: "center center",
          scrub: 1,
      }
  })
  .to(".tourbillon-detil-page4 .video-box", {
      yPercent: 50,
      xPercent: 50
  })
  .to(".tourbillon-detil-page4 .desc-box", {
      yPercent: 100,
      x: 230,
      width: `700px`
  })
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 🌟 tourbillon Detail - BTN

// toggle
function toggleBtnDesign(){
  const animationContainer = document.querySelector('.svg-animation');
  const replayButton = document.querySelector('.button');


  const data = { "v": "5.5.8", "fr": 60, "ip": 0, "op": 52, "w": 24, "h": 24, "nm": "Night Toggle", "ddd": 0, "assets": [], "layers": [{ "ddd": 0, "ind": 1, "ty": 4, "nm": "l6", "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0.667], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 11, "s": [100] }, { "t": 18, "s": [0] }] }, "r": { "a": 0, "k": 300 }, "p": { "a": 0, "k": [12, 12, 0] } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[0, -6.004], [0, -10.941]], "c": false } }, "nm": "Path 1", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [1, 1, 1, 1] }, "o": { "a": 0, "k": 100 }, "w": { "a": 0, "k": 2 }, "lc": 2, "lj": 1, "ml": 4, "bm": 0, "d": [{ "n": "d", "nm": "dash", "v": { "a": 0, "k": 10 } }, { "n": "g", "nm": "gap", "v": { "a": 0, "k": 10 } }, { "n": "o", "nm": "offset", "v": { "a": 1, "k": [{ "i": { "x": [0.431], "y": [1] }, "o": { "x": [0.45], "y": [0] }, "t": 0, "s": [0] }, { "t": 20, "s": [-5] }] } }], "nm": "Stroke 1", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0] }, "a": { "a": 0, "k": [0, 0] }, "s": { "a": 0, "k": [100, 100] }, "r": { "a": 0, "k": 0 }, "o": { "a": 0, "k": 100 }, "sk": { "a": 0, "k": 0 }, "sa": { "a": 0, "k": 0 }, "nm": "Transform" }], "nm": "Shape 1", "bm": 0, "hd": false }], "ip": 0, "op": 52, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 2, "ty": 4, "nm": "l5", "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0.667], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 11, "s": [100] }, { "t": 18, "s": [0] }] }, "r": { "a": 0, "k": 240 }, "p": { "a": 0, "k": [12, 12, 0] } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[0, -6.004], [0, -10.941]], "c": false } }, "nm": "Path 1", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [1, 1, 1, 1] }, "o": { "a": 0, "k": 100 }, "w": { "a": 0, "k": 2 }, "lc": 2, "lj": 1, "ml": 4, "bm": 0, "d": [{ "n": "d", "nm": "dash", "v": { "a": 0, "k": 10 } }, { "n": "g", "nm": "gap", "v": { "a": 0, "k": 10 } }, { "n": "o", "nm": "offset", "v": { "a": 1, "k": [{ "i": { "x": [0.431], "y": [1] }, "o": { "x": [0.45], "y": [0] }, "t": 0, "s": [0] }, { "t": 20, "s": [-5] }] } }], "nm": "Stroke 1", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0] }, "a": { "a": 0, "k": [0, 0] }, "s": { "a": 0, "k": [100, 100] }, "r": { "a": 0, "k": 0 }, "o": { "a": 0, "k": 100 }, "sk": { "a": 0, "k": 0 }, "sa": { "a": 0, "k": 0 }, "nm": "Transform" }], "nm": "Shape 1", "bm": 0, "hd": false }], "ip": 0, "op": 52, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 3, "ty": 4, "nm": "l4", "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0.667], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 11, "s": [100] }, { "t": 18, "s": [0] }] }, "r": { "a": 0, "k": 180 }, "p": { "a": 0, "k": [12, 12, 0] } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[0, -6.004], [0, -10.941]], "c": false } }, "nm": "Path 1", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [1, 1, 1, 1] }, "o": { "a": 0, "k": 100 }, "w": { "a": 0, "k": 2 }, "lc": 2, "lj": 1, "ml": 4, "bm": 0, "d": [{ "n": "d", "nm": "dash", "v": { "a": 0, "k": 10 } }, { "n": "g", "nm": "gap", "v": { "a": 0, "k": 10 } }, { "n": "o", "nm": "offset", "v": { "a": 1, "k": [{ "i": { "x": [0.431], "y": [1] }, "o": { "x": [0.45], "y": [0] }, "t": 0, "s": [0] }, { "t": 20, "s": [-5] }] } }], "nm": "Stroke 1", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0] }, "a": { "a": 0, "k": [0, 0] }, "s": { "a": 0, "k": [100, 100] }, "r": { "a": 0, "k": 0 }, "o": { "a": 0, "k": 100 }, "sk": { "a": 0, "k": 0 }, "sa": { "a": 0, "k": 0 }, "nm": "Transform" }], "nm": "Shape 1", "bm": 0, "hd": false }], "ip": 0, "op": 52, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 4, "ty": 4, "nm": "l3", "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0.667], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 11, "s": [100] }, { "t": 18, "s": [0] }] }, "r": { "a": 0, "k": 120 }, "p": { "a": 0, "k": [12, 12, 0] } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[0, -6.004], [0, -10.941]], "c": false } }, "nm": "Path 1", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [1, 1, 1, 1] }, "o": { "a": 0, "k": 100 }, "w": { "a": 0, "k": 2 }, "lc": 2, "lj": 1, "ml": 4, "bm": 0, "d": [{ "n": "d", "nm": "dash", "v": { "a": 0, "k": 10 } }, { "n": "g", "nm": "gap", "v": { "a": 0, "k": 10 } }, { "n": "o", "nm": "offset", "v": { "a": 1, "k": [{ "i": { "x": [0.431], "y": [1] }, "o": { "x": [0.45], "y": [0] }, "t": 0, "s": [0] }, { "t": 20, "s": [-5] }] } }], "nm": "Stroke 1", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0] }, "a": { "a": 0, "k": [0, 0] }, "s": { "a": 0, "k": [100, 100] }, "r": { "a": 0, "k": 0 }, "o": { "a": 0, "k": 100 }, "sk": { "a": 0, "k": 0 }, "sa": { "a": 0, "k": 0 }, "nm": "Transform" }], "nm": "Shape 1", "bm": 0, "hd": false }], "ip": 0, "op": 52, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 5, "ty": 4, "nm": "l2", "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0.667], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 11, "s": [100] }, { "t": 18, "s": [0] }] }, "r": { "a": 0, "k": 60 }, "p": { "a": 0, "k": [12, 12, 0] } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[0, -6.004], [0, -10.941]], "c": false } }, "nm": "Path 1", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [1, 1, 1, 1] }, "o": { "a": 0, "k": 100 }, "w": { "a": 0, "k": 2 }, "lc": 2, "lj": 1, "ml": 4, "bm": 0, "d": [{ "n": "d", "nm": "dash", "v": { "a": 0, "k": 10 } }, { "n": "g", "nm": "gap", "v": { "a": 0, "k": 10 } }, { "n": "o", "nm": "offset", "v": { "a": 1, "k": [{ "i": { "x": [0.431], "y": [1] }, "o": { "x": [0.45], "y": [0] }, "t": 0, "s": [0] }, { "t": 20, "s": [-5] }] } }], "nm": "Stroke 1", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0] }, "a": { "a": 0, "k": [0, 0] }, "s": { "a": 0, "k": [100, 100] }, "r": { "a": 0, "k": 0 }, "o": { "a": 0, "k": 100 }, "sk": { "a": 0, "k": 0 }, "sa": { "a": 0, "k": 0 }, "nm": "Transform" }], "nm": "Shape 1", "bm": 0, "hd": false }], "ip": 0, "op": 52, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 6, "ty": 4, "nm": "l1", "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0.667], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 11, "s": [100] }, { "t": 18, "s": [0] }] }, "p": { "a": 0, "k": [12, 12, 0] } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[0, -6.004], [0, -10.941]], "c": false } }, "nm": "Path 1", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [1, 1, 1, 1] }, "o": { "a": 0, "k": 100 }, "w": { "a": 0, "k": 2 }, "lc": 2, "lj": 1, "ml": 4, "bm": 0, "d": [{ "n": "d", "nm": "dash", "v": { "a": 0, "k": 10 } }, { "n": "g", "nm": "gap", "v": { "a": 0, "k": 10 } }, { "n": "o", "nm": "offset", "v": { "a": 1, "k": [{ "i": { "x": [0.431], "y": [1] }, "o": { "x": [0.45], "y": [0] }, "t": 0, "s": [0] }, { "t": 20, "s": [-5] }] } }], "nm": "Stroke 1", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0] }, "a": { "a": 0, "k": [0, 0] }, "s": { "a": 0, "k": [100, 100] }, "r": { "a": 0, "k": 0 }, "o": { "a": 0, "k": 100 }, "sk": { "a": 0, "k": 0 }, "sa": { "a": 0, "k": 0 }, "nm": "Transform" }], "nm": "Shape 1", "bm": 0, "hd": false }], "ip": 0, "op": 52, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 7, "ty": 4, "nm": "c", "sr": 1, "ks": { "p": { "a": 0, "k": [12, 12, 0] }, "a": { "a": 0, "k": [-1.237, -2.112, 0] } }, "ao": 0, "hasMask": true, "masksProperties": [{ "inv": false, "mode": "s", "pt": { "a": 1, "k": [{ "i": { "x": 0, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 25, "s": [{ "i": [[3.55, 0], [0, -3.55], [-3.55, 0], [0, 3.55]], "o": [[-3.55, 0], [0, 3.55], [3.55, 0], [0, -3.55]], "v": [[9.94, -19.487], [3.513, -13.06], [9.94, -6.633], [16.367, -13.06]], "c": true }] }, { "t": 52, "s": [{ "i": [[3.55, 0], [0, -3.55], [-3.55, 0], [0, 3.55]], "o": [[-3.55, 0], [0, 3.55], [3.55, 0], [0, -3.55]], "v": [[3.065, -12.362], [-3.362, -5.935], [3.065, 0.492], [9.492, -5.935]], "c": true }] }] }, "o": { "a": 0, "k": 100 }, "x": { "a": 0, "k": 0 }, "nm": "Mask 1" }], "shapes": [{ "ty": "gr", "it": [{ "d": 1, "ty": "el", "s": { "a": 1, "k": [{ "i": { "x": [0.667, 0.667], "y": [1, 1] }, "o": { "x": [0.396, 0.396], "y": [0, 0] }, "t": 16, "s": [6, 6] }, { "t": 41, "s": [16, 16] }] }, "p": { "a": 0, "k": [0, 0] }, "nm": "Ellipse Path 1", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [1, 1, 1, 1] }, "o": { "a": 0, "k": 100 }, "r": 1, "bm": 0, "nm": "Fill 1", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [-1.237, -2.112] }, "a": { "a": 0, "k": [0, 0] }, "s": { "a": 0, "k": [100, 100] }, "r": { "a": 0, "k": 0 }, "o": { "a": 0, "k": 100 }, "sk": { "a": 0, "k": 0 }, "sa": { "a": 0, "k": 0 }, "nm": "Transform" }], "nm": "Ellipse 1", "bm": 0, "hd": false }], "ip": 0, "op": 52, "st": 0, "bm": 0 }], "markers": [] };

  const animation = lottie.loadAnimation({
    container: animationContainer,
    renderer: 'svg',
    loop: false,
    autoplay: true,
    animationData: data });
  
  
  let direction = 1;
  
  replayButton.addEventListener('click', () => {
    direction = -direction;
    animation.setDirection(direction);
    animation.play();
  });
}
toggleBtnDesign()

function toggleBtnEffect(){
  let btnCon=document.querySelector('.toggle-container')
  let toggleButton = document.querySelector('.button')
  let page = document.querySelector('.tourbillon-detil-page5')
  let luminovaBg1 = document.querySelector('.luminova-bg1')
  let luminovaBg2 = document.querySelector('.luminova-bg2')
  let text=document.querySelector('.luminova-text')
  
  toggleButton.addEventListener("click", () => {
      toggleButton.classList.toggle('on');
  
      if (toggleButton.classList.contains('on')) {
          menuColor2()
          btnCon.style.backgroundColor="#00ff00"
          luminovaBg1.style.opacity = "0%"
          luminovaBg2.style.opacity = "100%"
          text.style.color="#00ff00"
          page.style.backgroundColor = "black"
          gsap.to(".canvas-cont",{opacity:1, yPercent:10})
      } else {
          menuColor()
          btnCon.style.backgroundColor="#8DB4D4"
          luminovaBg2.style.opacity = "0%"
          luminovaBg1.style.opacity = "100%"
          page.style.backgroundColor = "white"
          text.style.color="#000"
          gsap.to(".canvas-cont",{opacity:0, yPercent:-10})
      }
  });
}
toggleBtnEffect()

function toggleRemove(){
  let btnCon=document.querySelector('.toggle-container')
  toggleButton = document.querySelector('.button');
  page = document.querySelector('.tourbillon-detil-page5');
  luminovaBg1 = document.querySelector('.luminova-bg1');
  luminovaBg2 = document.querySelector('.luminova-bg2');
  text=document.querySelector('.luminova-text')
  
  menuColor()
  btnCon.style.backgroundColor="#8DB4D4"
  luminovaBg2.style.opacity = "0%"
  luminovaBg1.style.opacity = "100%"
  page.style.backgroundColor = "white"
  text.style.color="#000"
  gsap.to(".canvas-cont",{opacity:0, yPercent:-10})
}
gsap.timeline({
  scrollTrigger: {
    trigger: ".tourbillon-detil-page5",
    start: "top top",
    end:"bottom bottom",
    scrub: 1,
    onEnter:menuColor,
    onLeave:toggleRemove,
    onLeaveBack:toggleRemove
    }
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 🌟 maison - main
let main = document.querySelectorAll(".title-rotate")
main.forEach(function (main){
  gsap.to(main, {
    scrollTrigger: {
      trigger: main,
      start: "top top",
      end: "+=150%",
      scrub: 1,
    },
    y: 250,
    scale: 0.75,
    rotation: -15,
    ease: "power3.out"
  })
})


let conScales = document.querySelectorAll(".con-scale")
conScales.forEach(function (conScale) {
  gsap.fromTo(conScale, {
    y: 100,
    scale: 0.7,
    rotation: 15
  }, {
    scrollTrigger: {
      trigger: conScale,
      start: "top 80%",
      end: "top 20%",
      scrub: 2,
    },
    y: 0,
    scale: 1,
    duration: 1,
    rotation: 0,
    ease: "power3.out"
  })
})



// 🌟 maison - tech

function Tech(){

  const images = document.querySelectorAll(".item");
  const imageSize = images.length;
  const degree = 360 / imageSize;
  
  const cursor = document.querySelector('#custom-cursor')
  const main=document.querySelector('.main')
  
  const init=()=>{
      const timeline=gsap.timeline();
      images.forEach((image,index)=>{
          const sign=Math.floor((index/2)%2)?1:-1; 
                              // (0 / 2) % 2   ==>0
                              // (1 / 2) % 2   ==>0.5
                               // (2/ 2) % 2   ==>1
                               // (3/ 2) % 2   ==>1.5
          const value=Math.floor((index+4)/4)*4
                                //((0 + 4) / 4) * 4 ==>4
                                //((1 + 4) / 4) * 4 ==>5
                                //((2 + 4) / 4) * 4 ==>6
          const rotation=index> imageSize - 3? 0 : sign * value
  
          gsap.set(image,{
              rotation:rotation,
              scale:0.5
          })
          timeline.to(image,{autoAlpha:1},0)
          timeline.from(
              image,{
                  x:()=>(index%2? window.innerWidth + image.clientWidth * 4:-window.innerWidth - image.clientWidth * 4),
                  y:()=> window.innerHeight - image.clientHeight,
                  rotation:index%2? 200: -200,
                  scale:4,
                  duration:1,
                  opacity:1,
                  delay:0.15*(index/2),
                     // index 0 -->0
                     // index 1 -->1
                     // index 2 -->0
                     // index 3 -->1
              },0
          );
          let rotationAngle=index*degree;
          timeline.to(image,{
              scale:1,
              duration:0,
          },0.17*(imageSize/2 - 1) + 1)
  
          timeline.to(image,{
              transformOrigin:"center 200vh",
              rotation:index>imageSize/2 ? -degree*(imageSize - index):rotationAngle,
              duration:1,
              autoAlpha:1,
              ease:"power1.out",
          },0.15*(imageSize/2 - 1) + 1)
      })
  }
  
  Draggable.create(".items", {
      type: "rotation",
      onDragStart: function () {
          start = this.rotation;
        },
        onDragEnd: function () {
          const rotation = this.rotation;
          const offset = Math.abs(rotation - start);
          if (rotation > start) {
            if (rotation - start < degree / 2) {
              gsap.to(".items", {
                rotation: `-=${offset}`,
              });
            } else {
              gsap.to(".items", {
                rotation: `+=${2 * degree - offset}`,
              });
            }
          } else {
            if (Math.abs(rotation - start) < degree / 2) {
              gsap.to(".items", {
                rotation: `+=${offset}`,
              });
            } else {
              gsap.to(".items", {
                rotation: `-=${2 * degree - offset}`,
              });
            }
          }
        },
  
    });
    ScrollTrigger.create({
      trigger:".maison-tech",
      start:"top 30%",
      onEnter:()=>{
          init();
          cursorM();
          ScrollTrigger.getById("mainTrigger").kill();//scrollTrigger,제거
      },
      id:"mainTrigger",//scrollTrigger에 id부여
      once:true//한번만 실행되도록 설정
    })
}
Tech()

