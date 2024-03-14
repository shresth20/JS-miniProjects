let rect = document.querySelector("#box");
rect.addEventListener("mousemove", (event) => {
  let boxloc = rect.getBoundingClientRect();
  let inside = event.clientX - rect.getBoundingClientRect().left;

  if (inside < boxloc.width / 2) {
    let red = gsap.utils.mapRange(0, boxloc.width / 2, 255, 0, inside);
    gsap.to(rect, {
      backgroundColor: `rgb(${red}, 0, 0)`,
      ease: Power4,
    });
  } else if (inside > boxloc.width / 2) {
    let blue = gsap.utils.mapRange(0, boxloc.width, 0, 255, inside);
    gsap.to(rect, {
      backgroundColor: `rgb(0, 0, ${blue})`,
      ease: Power4,
    });
  }
});

let rect2 = document.querySelector("#box");
rect.addEventListener("mousemove", (event) => {
  let boxloc = rect2.getBoundingClientRect();
  let inside = event.clientX - rect2.getBoundingClientRect().height;

  //   if (inside < boxloc.width / 2) {
  //     let red = gsap.utils.mapRange(0, boxloc.width / 2, 255, 0, inside);
  //     gsap.to(rect, {
  //       backgroundColor: `rgb(${red}, 0, 0)`,
  //       ease: Power4,
  //     });
  //   } else if (inside > boxloc.width / 2) {
  //     let blue = gsap.utils.mapRange(0, boxloc.width, 0, 255, inside);
  //     gsap.to(rect, {
  //       backgroundColor: `rgb(0, 0, ${blue})`,
  //       ease: Power4,
  //     });
  //   } else
  if (inside < boxloc.height / 2) {
    let green = gsap.utils.mapRange(0, boxloc.height / 2, 255, 0, inside);
    gsap.to(rect, {
      backgroundColor: `rgb(0, ${green}, 0)`,
      ease: Power4,
    });
  } else if (inside > boxloc.height / 2) {
    let yellow = gsap.utils.mapRange(0, boxloc.height, 0, 255, inside);
    gsap.to(rect, {
      backgroundColor: `rgb(255, ${yellow}, ${green})`,
      ease: Power4,
    });
  }
});
