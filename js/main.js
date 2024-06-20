function lenis() {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
    })

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)
}
lenis()

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Mouse Cursor
function cursor(){

gsap.set(".ball", {
    xPercent: -50,
    yPercent: -50
})
let ball = document.querySelector(".ball")
let pos = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
}
let mouse = {
    x: pos.x,
    y: pos.y
}
let speed = 0.08
let xSet = gsap.quickSetter(ball, "x", "px") // : ball의 x px 값을 빠르게 세팅한다.
let ySet = gsap.quickSetter(ball, "y", "px") // : ball의 y px 값을 빠르게 세팅한다.
window.addEventListener("mousemove", function (e) {
    mouse.x = e.x
    mouse.y = e.y
})

gsap.ticker.add(function () {
    let dt = 1.0 - Math.pow((1.0 - speed), gsap.ticker.deltaRatio())

    pos.x += (mouse.x - pos.x) * dt
    pos.y += (mouse.y - pos.y) * dt
    xSet(pos.x)
    ySet(pos.y)
})
}
cursor()

// Down Ani
gsap.to(".down", {
    yPercent: 50,
    repeat: -1,
    yoyo: true
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ✨ Menu
function Menu() {
    let Menu = document.querySelector(".menu-box")
    let OpenMenu = document.querySelector(".open-menu-box")
    let Close = document.querySelector(".close")
    let tl = gsap.timeline()

    Menu.addEventListener("click", () => {
        tl.to(Menu, {
            yPercent: -100,
            duration: 0.6,
            ease: "expo.in",
        })
        tl.to(OpenMenu, {
            yPercent: 100,
            duration: 0.6,
            delay: 0.6,
            ease: "expo.out",
        })
    })
    Close.addEventListener("click", () => {
        tl.to(OpenMenu, {
            yPercent: -100,
            duration: 0.6,
            ease: "expo.in",
        })
        tl.to(Menu, {
            yPercent: 0,
            delay: 0.3,
            duration: 0.6,
            delay: 0.6,
            ease: "expo.out",
        })
    })
}
Menu()

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ✨ library - main (clock)
setInterval(() => {
    let today = new Date();
    let dayList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let hh = addZero(today.getHours())
    let mm = addZero(today.getMinutes())
    let ss = addZero(today.getSeconds())
    let MM = today.getMonth() + 1;
    let DD = today.getDate();
    let YY = today.getFullYear();
    let dd = dayList[today.getDay()].toUpperCase();

    document.querySelector('#hours').innerHTML = hh;
    document.querySelector('#min').innerHTML = mm;
    document.querySelector('#sec').innerHTML = ss;
    document.querySelector('#month').innerHTML = MM;
    document.querySelector('#date').innerHTML = DD;
    document.querySelector('#year').innerHTML = YY;
    document.querySelector('#day').innerHTML = dd;

    function addZero(num) {
        return (num < 10 ? "0" + num : num)
    }
}, 1000)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 🌟 Main Typing Text
function MainTypingText() {

    function decodeText() {
        var text = document.getElementsByClassName('decode-text')[0];

        var state = [];
        for (var i = 0, j = text.children.length; i < j; i++) {
            text.children[i].classList.remove('state-1', 'state-2', 'state-3');
            state[i] = i;
        }

        var shuffled = shuffle(state);

        for (var i = 0, j = shuffled.length; i < j; i++) {
            var child = text.children[shuffled[i]];
            classes = child.classList;

            var state1Time = Math.round(Math.random() * (2000 - 300)) + 50;
            if (classes.contains('text-animation')) {
                setTimeout(firstStages.bind(null, child), state1Time);
            }
        }
    }

    function firstStages(child) {
        if (child.classList.contains('state-2')) {
            child.classList.add('state-3');
        } else if (child.classList.contains('state-1')) {
            child.classList.add('state-2')
        } else if (!child.classList.contains('state-1')) {
            child.classList.add('state-1');
            setTimeout(secondStages.bind(null, child), 100);
        }
    }

    function secondStages(child) {
        if (child.classList.contains('state-1')) {
            child.classList.add('state-2')
            setTimeout(thirdStages.bind(null, child), 100);
        } else if (!child.classList.contains('state-1')) {
            child.classList.add('state-1')
        }
    }

    function thirdStages(child) {
        if (child.classList.contains('state-2')) {
            child.classList.add('state-3')
        }
    }

    function shuffle(array) {
        var currentIndex = array.length,
            temporaryValue, randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }


    decodeText();

    setInterval(function () {
        decodeText();
    }, 10000);

}
MainTypingText()
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 🌟 text Carousel
function textCarousel() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".part-1",
            start: "top 90%",
            end: "180% 90%",
            scrub: true
        }
    });

    tl.to(".strip-l", {
        marginLeft: "0%"
    }, 'name')
    tl.to(".strip-r", {
        marginLeft: "-50%"
    }, 'name')
}
textCarousel()
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ✨ Watch List Hover Effect
function WatchList() {
    document.addEventListener("DOMContentLoaded", (event) => {
        gsap.registerPlugin(ScrollTrigger)


        let items = document.querySelectorAll(".watch-list li")
        items.forEach(function (el) {
            gsap.set(".hover-img", {
                xPercent: -50,
                yPercent: -50
            })
            let image = el.querySelector(".hover-img")
            let innerImage = el.querySelector(".hover-img img")
            let pos = {
                x: window.innerWidth / 2,
                y: window.innerHeight / 2
            }
            let mouse = {
                x: pos.x
            }
            let speed = 0.1
            let xSet = gsap.quickSetter(image, "x", "px")
            window.addEventListener("mousemove", function (e) {
                mouse.x = e.x
            })

            gsap.ticker.add(function () {
                let dt = 1.0 - Math.pow((1.0 - speed), gsap.ticker.deltaRatio())
                pos.x += (mouse.x - pos.x) * dt
                xSet(pos.x)
            })
            let direction = "",
                oldx = 0,
                lastCursorX = null,
                cursorThreshold = 150;
            let mousemovemethod = function (e) {
                if (e.pageX < oldx && e.clientX <= lastCursorX - cursorThreshold) {
                    direction = "left"
                    lastCursorX = e.clientX
                    innerImage.style.transform = "rotate(-15deg)"
                } else if (e.pageX > oldx && e.clientX >= lastCursorX + cursorThreshold) {
                    direction = "right"
                    lastCursorX = e.clientX
                    innerImage.style.transform = "rotate(15deg)"
                }
                oldx = e.pageX
            }

            let mouseMoveTimer;

            document.addEventListener("mousemove", function () {

                clearTimeout(mouseMoveTimer)
                mouseMoveTimer = setTimeout(function () {
                    innerImage.style.transform = "translateX(0%) rotate(0deg)"
                }, 100)

            })
            document.addEventListener("mousemove", mousemovemethod)

        })

        function ani() {
            requestAnimationFrame(ani)
        }
        ani()

        // 🌟 Font Animation
        let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" // 26
        let interval = null;
        let list = document.querySelectorAll(".watch-list li")
        list.forEach(function (el) {
            el.addEventListener("mouseenter", function (event) {
                let target_element = event.target.querySelector('h2')
                let iteration = 0;
                let interval = setInterval(function () {
                    target_element.innerText = target_element.innerText
                        .split("")
                        .map(function (letter, index) {
                            if (index < iteration) {
                                return target_element.dataset.value[index]
                            }
                            return letters[Math.floor(Math.random() * 26)]
                        })
                        .join("");

                    if (iteration >= target_element.dataset.value.length) {
                        clearInterval(interval)
                    }
                    iteration += 1 / 3
                }, 20)
            })
        })
    });
}
WatchList()
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 🌟 Watches - slider
function Watches() {
    const swiper = new Swiper(".swiper", {
        direction: "horizontal",
        loop: false,
        speed: 1500,
        slidesPerView: 3,
        spaceBetween: 100,
        mousewheel: true,
        parallax: true,
        centeredSlides: true,
        effect: "coverflow",
        coverflowEffect: {
            rotate: 40,
            slideShadows: true
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 60
            },
            600: {
                slidesPerView: 2,
                spaceBetween: 60
            },
            1000: {
                slidesPerView: 3,
                spaceBetween: 60
            },
            1400: {
                slidesPerView: 4,
                spaceBetween: 60
            },
            2300: {
                slidesPerView: 5,
                spaceBetween: 60
            },
            2900: {
                slidesPerView: 6,
                spaceBetween: 60
            }
        }
    });

}
Watches()
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 🌟 tourbillon - rotate
gsap.fromTo(".circle", {
    rotate: 0,
    repeat: -1,
    duration: 2,
    ease: "none",
    opacity: 0,
}, {
    rotate: 360,
    repeat: -1,
    duration: 2,
    ease: "none",
    opacity: 1,
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 🌟 vanta 배경 함수

function vanta() {
    VANTA.FOG({
        el: ".tourbillon-detil-page5 .luminova-bg1",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: 0xffffff,
        midtoneColor: 0x6ea5d2,
        baseColor: 0x6EA5D2,
        lowlightColor: 0x547EA0,
        blurFactor: 0.45,
        speed: 3,
        zoom: 2
    })

    VANTA.FOG({
        el: ".tourbillon-detil-page5 .luminova-bg2",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: 0xffc300,
        midtoneColor: 0xff1f00,
        baseColor: 0x2d00ff,
        lowlightColor: 0xffebeb,
        blurFactor: 0.45,
        speed: 3,
        zoom: 2
    })
}
vanta()

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 🌟 maison Hover Change

function maisonHover(){
    let Technology=document.querySelector(".Technology"),
        History=document.querySelector(".History"),
        Ambassadors=document.querySelector(".Ambassadors"),
        Collaborations=document.querySelector(".Collaborations"),
        maisonBG=document.querySelector(".maison-main-bg")

        function addMouseoverEffect(element, bgImageUrl) {
            element.addEventListener("mouseover", () => {
              element.style.fontWeight = "bold";
              maisonBG.style.backgroundImage = `url('${bgImageUrl}')`;
            });
      
            element.addEventListener("mouseout", () => {
              element.style.fontWeight = "lighter";
              maisonBG.style.backgroundImage = "./img/tech-movement.jpg";
            });
        }
      
        addMouseoverEffect(Technology, './img/tech-movement.jpg');
        addMouseoverEffect(History, './img/history.jpg');
        addMouseoverEffect(Ambassadors, './img/amber.jpg');
        addMouseoverEffect(Collaborations, './img/collabo.jpg');

}
maisonHover()
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

// 💛 preload

function preload(){
    let container=document.querySelector('#progress')
    let progressBar=document.querySelector('.progress-bar')
    let progressText=document.querySelector('.progress-text')
    let imgLoaded=0;
    let imgTotal = 1000; // 로드시간이 너무 길 경우 숫자 줄이기
    let current = 0;
    let progressTimer;
    let topValue;

    progressTimer=setInterval(updateProgress,1000/60)
    function updateProgress(){
        imgLoaded++;
        // console.log(imgLoaded) : 1000이 넘어도 무한 반복 한다.
        let target=(imgLoaded/imgTotal)*100;
        // %로 바꾸는 과정, imgLoaded(1씩 증가) / imgTotal(1000) *100(%)
        // console.log(target)
        current+= (target - current)*0.01
        // current = current + (target - current)*0.01
        // 로딩이 길어서 조절하기 위함
        progressBar.style.width=current + "%"
        progressText.innerHTML=Math.ceil(current)  + "%" // Math.ceil() : 소수점은 생략한다 
        // %에 비례하여 실행
    
        if(current>99.9){
            clearInterval(progressTimer)
            container.classList.add('progress-complete') // : class 를 불러오는것이기 때문에 (.)❌
            progressBar.style.width="100%";
            gsap.to(container,{
                duration:0.3,
                yPercent : -100,
                // 99.99%가 되면 y축으로 -100만큼 올라간다.
                ease:"none",
            })
        }
    }

}
preload()