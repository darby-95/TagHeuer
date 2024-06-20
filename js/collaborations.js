function canvas() {
    let canvas = document.querySelector("#collaborationsCanvas")
    let context = canvas.getContext("2d")
  
    canvas.width = window.innerWidth; // 화면의 넓이
    canvas.height = window.innerHeight; // 화면의 높이
  
    window.addEventListener("resize", function () {
      canvas.width = window.innerWidth; // 화면의 넓이
      canvas.height = window.innerHeight; // 화면의 높이
    })
  
    function files(index) {
        var data=`./img/porshe/u1.jpg
        ./img/porshe/u2.jpg
        ./img/porshe/u3.jpg
        ./img/porshe/u4.jpg
        ./img/porshe/u5.jpg
        ./img/porshe/u6.jpg
        ./img/porshe/u7.jpg
        ./img/porshe/u8.jpg
        ./img/porshe/u9.jpg
        ./img/porshe/u10.jpg
        ./img/porshe/u11.jpg
        ./img/porshe/u12.jpg
        ./img/porshe/u13.jpg
        ./img/porshe/u14.jpg
        ./img/porshe/u15.jpg
        ./img/porshe/u16.jpg
        ./img/porshe/u17.jpg
        ./img/porshe/u18.jpg
        ./img/porshe/u19.jpg
        ./img/porshe/u20.jpg
        ./img/porshe/u21.jpg
        ./img/porshe/u22.jpg
        ./img/porshe/u23.jpg
        ./img/porshe/u24.jpg
        ./img/porshe/u25.jpg
        ./img/porshe/u26.jpg
        ./img/porshe/u27.jpg
        ./img/porshe/u28.jpg
        ./img/porshe/u29.jpg
        ./img/porshe/u30.jpg
        ./img/porshe/u31.jpg
        ./img/porshe/u32.jpg
        ./img/porshe/u33.jpg
        ./img/porshe/u34.jpg
        ./img/porshe/u35.jpg
        ./img/porshe/u36.jpg
        ./img/porshe/u37.jpg
        ./img/porshe/u38.jpg
        ./img/porshe/u39.jpg
        ./img/porshe/u40.jpg
        ./img/porshe/u41.jpg
        ./img/porshe/u42.jpg
        ./img/porshe/u43.jpg
        ./img/porshe/u44.jpg
        ./img/porshe/u45.jpg
        ./img/porshe/u46.jpg
        ./img/porshe/u47.jpg
        ./img/porshe/u48.jpg
        ./img/porshe/u49.jpg
        ./img/porshe/u50.jpg
        ./img/porshe/u51.jpg
        ./img/porshe/u52.jpg
        ./img/porshe/u53.jpg
        ./img/porshe/u54.jpg
        ./img/porshe/u55.jpg
        ./img/porshe/u56.jpg
        ./img/porshe/u57.jpg
        ./img/porshe/u58.jpg
        ./img/porshe/u59.jpg
        ./img/porshe/u60.jpg
        ./img/porshe/u61.jpg
        ./img/porshe/u62.jpg
        ./img/porshe/u63.jpg
        ./img/porshe/u64.jpg
        ./img/porshe/u65.jpg
        ./img/porshe/u66.jpg
        ./img/porshe/u67.jpg
        ./img/porshe/u68.jpg
        ./img/porshe/u69.jpg
        ./img/porshe/u70.jpg
        ./img/porshe/u71.jpg
        ./img/porshe/u72.jpg
        ./img/porshe/u73.jpg
        ./img/porshe/u74.jpg
        ./img/porshe/u75.jpg
        ./img/porshe/u76.jpg
        ./img/porshe/u77.jpg
        ./img/porshe/u78.jpg
        ./img/porshe/u79.jpg
        ./img/porshe/u80.jpg
        ./img/porshe/u81.jpg
        ./img/porshe/u82.jpg
        ./img/porshe/u83.jpg
        ./img/porshe/u84.jpg
        ./img/porshe/u85.jpg
        ./img/porshe/u86.jpg
        ./img/porshe/u87.jpg
        ./img/porshe/u88.jpg
        ./img/porshe/u89.jpg
        ./img/porshe/u90.jpg
        ./img/porshe/u91.jpg
        ./img/porshe/u92.jpg
        ./img/porshe/u93.jpg
        ./img/porshe/u94.jpg
        ./img/porshe/u95.jpg
        ./img/porshe/u96.jpg
        ./img/porshe/u97.jpg
        ./img/porshe/u98.jpg
        ./img/porshe/u99.jpg
        ./img/porshe/u100.jpg
        ./img/porshe/u101.jpg
        ./img/porshe/u102.jpg
        ./img/porshe/u103.jpg
        ./img/porshe/u104.jpg
        ./img/porshe/u105.jpg
        ./img/porshe/u106.jpg
        ./img/porshe/u107.jpg
        ./img/porshe/u108.jpg
        ./img/porshe/u109.jpg
        ./img/porshe/u110.jpg
        ./img/porshe/u111.jpg
        ./img/porshe/u112.jpg
        ./img/porshe/u113.jpg
        ./img/porshe/u114.jpg
        ./img/porshe/u115.jpg
        ./img/porshe/u116.jpg
        ./img/porshe/u117.jpg
        ./img/porshe/u118.jpg
        ./img/porshe/u119.jpg
        ./img/porshe/u120.jpg
        ./img/porshe/u121.jpg
        ./img/porshe/u122.jpg
        ./img/porshe/u123.jpg
        ./img/porshe/u124.jpg
        ./img/porshe/u125.jpg
        ./img/porshe/u126.jpg
        ./img/porshe/u127.jpg
        ./img/porshe/u128.jpg
        ./img/porshe/u129.jpg
        ./img/porshe/u130.jpg
        ./img/porshe/u131.jpg
        ./img/porshe/u132.jpg
        ./img/porshe/u133.jpg
        ./img/porshe/u134.jpg
        ./img/porshe/u135.jpg
        ./img/porshe/u136.jpg
        ./img/porshe/u137.jpg
        ./img/porshe/u138.jpg
        ./img/porshe/u139.jpg
        ./img/porshe/u140.jpg
        ./img/porshe/u141.jpg
        ./img/porshe/u142.jpg
        ./img/porshe/u143.jpg
        ./img/porshe/u144.jpg
        ./img/porshe/u145.jpg
        ./img/porshe/u146.jpg
        ./img/porshe/u147.jpg
        ./img/porshe/u148.jpg
        ./img/porshe/u149.jpg
        ./img/porshe/u150.jpg
        ./img/porshe/u151.jpg
        ./img/porshe/u152.jpg
        ./img/porshe/u153.jpg
        ./img/porshe/u154.jpg
        ./img/porshe/u155.jpg
        ./img/porshe/u156.jpg
        ./img/porshe/u157.jpg
        ./img/porshe/u158.jpg
        ./img/porshe/u159.jpg
        ./img/porshe/u160.jpg
        ./img/porshe/u161.jpg
        ./img/porshe/u162.jpg
        ./img/porshe/u163.jpg
        ./img/porshe/u164.jpg
        ./img/porshe/u165.jpg
        ./img/porshe/u166.jpg
        ./img/porshe/u167.jpg
        ./img/porshe/u168.jpg
        ./img/porshe/u169.jpg
        ./img/porshe/u170.jpg
        ./img/porshe/u171.jpg
        ./img/porshe/u172.jpg
        ./img/porshe/u173.jpg
        ./img/porshe/u174.jpg
        ./img/porshe/u175.jpg
        ./img/porshe/u176.jpg
        ./img/porshe/u177.jpg
        ./img/porshe/u178.jpg
        ./img/porshe/u179.jpg`;
      return data.split("\n")[index] // 인덱스 번호에 해당되는 것들을 하나씩 뽑아온다.
    }
    let frameCount = 179;
    let images = [];
    let imageSeq = {
      frame: 0
    }
  
    for (let i = 0; i < frameCount; i++) {
      let img = new Image(); // 이미지 태그 만들기
      img.src = files(i)
      images.push(img)
    }

    gsap.to(imageSeq, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        scrub: 0.5,
        trigger: ".maison-collaborations",
        start: "300% top",
        end: "+=700% top",
      },
      onUpdate: render // : render가 아닌 scaleImage 를 적어도 된다.
    })
    images[0].onload = render;
  
    function render() {
      scaleImage(images[imageSeq.frame], context)
    }
  
    function scaleImage(img, ctx) {
      console.log(ctx)
      let canvas = ctx.canvas;
      let hRatio = canvas.width / img.width;
      let vRatio = canvas.height / img.height;
      let ratio = Math.max(hRatio, vRatio)
      let centershift_x = (canvas.width - img.width * ratio) / 2
      let centershift_y = (canvas.height - img.height * ratio) / 2
  
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centershift_x,
        centershift_y,
        img.width * ratio,
        img.height * ratio,
      )
    } // scaleImage
    ScrollTrigger.create({
      trigger: ".maison-collaborations",
      pin: true,
      start: "300% top",
      end: "+=700% top",
    })
  
}
canvas()