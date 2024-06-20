//  🌟 3D spline carrera Tourbillon
import {
  Application
} from 'https://unpkg.com/@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/uuiJgt64FQkF6i4b/scene.splinecode')
  .then(() => {

    let luminova = app.findObjectByName('watch-luminova');
    let basic = app.findObjectByName('watch-basic');
    let Light = app.findObjectByName('Point Light');
    
    let objects = [luminova,basic,Light]

    objects.forEach((object) => {
      gsap.set(object.position, {
        x: 1500,
        y: 0,
        z: 0
      })
      gsap.set(object.scale, {
        x: 1,
        y: 1,
        z: 1
      })
    })

    gsap.timeline({
        scrollTrigger: {
          trigger: ".tourbillon-detil-page1",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        }
      })
      .to(basic.position, 10, {
        x: -300,
        y: 0,
        z: 0,
        duration: 2,
        ease: "power4.out"
      })
      .to(basic.rotation, 10, {
        y: Math.PI * 2,
        ease: "none"
      })

    gsap.timeline({
        scrollTrigger: {
          trigger: ".tourbillon-detil-page2",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        }
      })
      .to(basic.scale, {
        x: 2,
        y: 2,
        z: 2
      }, 0)
      .to(basic.position, {
        x: 430,
        y: -200,
        z: 0
      }, 0)
      .to(basic.rotation, {
        x: -(Math.PI * 0.5) / 2,
        y: Math.PI * 2
      }, 0)

    gsap.timeline({
        scrollTrigger: {
          trigger: ".tourbillon-detil-page3",
          start: "top 80%",
          end: "bottom bottom",
          scrub: 1,
        }
      })
      .to(basic.scale, {
        x: 1,
        y: 1,
        z: 1
      }, 0)
      .to(basic.position, {
        x: -400,
        y: 0,
        z: 0
      }, 0)
      .to(basic.rotation, {
        x: 0,
        y: Math.PI * 2,
        z: 0
      }, 0)

    gsap.timeline({
      scrollTrigger: {
        trigger: ".tourbillon-detil-page4",
        start: "center center",
        end: "bottom bottom",
        scrub: 1,
      }
    })
    .to(basic.position, {
      x: 2000,
      y: 0,
      z: 0
    }, 0)
    .to(luminova.position, {
      x: 0,
      y: 0,
      z: 0
    }, 0)
    .to(Light.scale, {
      x: 0,
      y: 0,
      z: 0
    }, 0)
    
  })