import React, { useEffect } from "react";
import gsap from "gsap";

const KineticTwo = ({ tabIndex }) => {
  useEffect(() => {
    const shapeUpTimeline = gsap.timeline({ repeat: -1 });
    const shapeDownTimeline = gsap.timeline({ repeat: -1 });

    shapeUpTimeline.to(".shapeup .shape", {
      y: "-=4200%",
      duration: 5,
      ease: "linear",
      onUpdate: function () {
        const translateY = gsap.getProperty(this.targets()[0], "y");
        if (translateY <= -4200) {
          gsap.set(this.targets()[0], { y: 0 });
        }
      },
    });

    shapeDownTimeline.to(".shapedown .shape", {
      y: "+=4200%",
      duration: 5,
      ease: "linear",
      onUpdate: function () {
        const translateY = gsap.getProperty(this.targets()[0], "y");
        if (translateY >= 4200) {
          gsap.set(this.targets()[0], { y: 0 });
        }
      },
    });

    return () => {
      shapeUpTimeline.kill();
      shapeDownTimeline.kill();
    };
  }, []);

  return (
    <div className='cell' data-v-28f4920b=''>
      <button
        aria-label='Open kinetic layout'
        className='homepage-kinetic kinetic'
        data-v-28f4920b=''
        data-v-c72531ab=''
        tabIndex={tabIndex}
        style={{
          zIndex: "1",
          translate: "none",
          rotate: "none",
          scale: "none",
          transform: "translate(0px, 0px)",
        }}
      >
        <div
          className='group'
          data-v-c72531ab=''
          style={{
            translate: "none",
            rotate: "none",
            scale: "none",
            transform: "translate(0px, 0px)",
          }}
        >
          <div className='shapeparent shapeup' data-v-c72531ab=''>
            <div
              className='shape'
              data-v-c72531ab=''
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                transform:
                  "translate(0%, -295.146%) translate3d(0px, 0px, 0px)",
              }}
            ></div>
            <div
              className='shape'
              data-v-c72531ab=''
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0%, -39.504%) translate3d(0px, 0px, 0px)",
              }}
            ></div>
            <div
              className='shape'
              data-v-c72531ab=''
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0%, -0.0036%) translate3d(0px, 0px, 0px)",
              }}
            ></div>
            <div
              className='shape'
              data-v-c72531ab=''
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                transform:
                  "translate(0%, -2280.45%) translate3d(0px, 0px, 0px)",
              }}
            ></div>
            <div
              className='shape'
              data-v-c72531ab=''
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                transform:
                  "translate(0%, -973.328%) translate3d(0px, 0px, 0px)",
              }}
            ></div>
          </div>
          <div className='shapeparent shapedown' data-v-c72531ab=''>
            <div
              className='shape'
              data-v-c72531ab=''
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0%, 295.146%) translate3d(0px, 0px, 0px)",
              }}
            ></div>
            <div
              className='shape'
              data-v-c72531ab=''
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0%, 39.504%) translate3d(0px, 0px, 0px)",
              }}
            ></div>
            <div
              className='shape'
              data-v-c72531ab=''
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0%, 0.0036%) translate3d(0px, 0px, 0px)",
              }}
            ></div>
            <div
              className='shape'
              data-v-c72531ab=''
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0%, 2280.45%) translate3d(0px, 0px, 0px)",
              }}
            ></div>
            <div
              className='shape'
              data-v-c72531ab=''
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0%, 973.328%) translate3d(0px, 0px, 0px)",
              }}
            ></div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default KineticTwo;
