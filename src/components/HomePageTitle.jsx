import React, { useRef, useEffect } from "react";
import { useLenis } from "lenis/react";
import gsap from "gsap";

const HomePageTitle = ({ onAnimationComplete }) => {
  const titleRef = useRef(null);

  useLenis(({ scroll }) => {
    const ligneChildren = titleRef.current.querySelectorAll(".ligne-child");
    ligneChildren.forEach((ligneChild) => {
      const { top, height } = ligneChild.getBoundingClientRect();
      const scrollPercentage = Math.max(
        0,
        Math.min(100, ((scroll - top + 75) / height) * 100)
      );
      gsap.to(ligneChild, {
        duration: 0.5,
        y: `${scrollPercentage}%`,
        ease: "power2.out",
      });
    });
  });

  useEffect(() => {
    const wordsAbove = titleRef.current.querySelectorAll(".word-above");

    wordsAbove.forEach((word, index) => {
      setTimeout(() => {
        word.style.opacity = 1;
        word.style.transform = "translateY(0)";
        if (index === wordsAbove.length - 1) {
          onAnimationComplete();
        }
      }, index * 300);
    });
  }, [onAnimationComplete]);

  return (
    <p
      ref={titleRef}
      className='homepage-title t-h1'
      translate='no'
      aria-label="Welcome to Rafie's portfolio"
      data-v-e747f53d=''
      data-v-50934b63=''
    >
      <span className='ligne' data-v-50934b63=''>
        <span
          className='ligne-child'
          data-v-50934b63=''
          style={{
            translate: "none",
            rotate: "none",
            scale: "none",
            transform: "translate(0px, 0%)",
          }}
        >
          <span className='word' data-v-50934b63='' style={{ opacity: "1" }}>
            <span
              className='word-above'
              data-v-50934b63=''
              style={{ opacity: 0, transform: "translateY(20px)" }}
            >
              Happy
            </span>
            <span className='word-under' data-v-50934b63=''>
              Happy
            </span>
          </span>
        </span>
      </span>
      <span className='ligne' data-v-50934b63=''>
        <span
          className='ligne-child'
          data-v-50934b63=''
          style={{
            translate: "none",
            rotate: "none",
            scale: "none",
            transform: "translate(0px, 0%)",
          }}
        >
          <span className='word' data-v-50934b63='' style={{ opacity: "1" }}>
            <span
              className='word-above'
              data-v-50934b63=''
              style={{ opacity: 0, transform: "translateY(20px)" }}
            >
              Birthday
            </span>
            <span className='word-under' data-v-50934b63=''>
              Birthday
            </span>
          </span>
        </span>
      </span>
      <span className='ligne' data-v-50934b63=''>
        <span
          className='ligne-child'
          data-v-50934b63=''
          style={{
            translate: "none",
            rotate: "none",
            scale: "none",
            transform: "translate(0px, 0%)",
          }}
        >
          <span className='word' data-v-50934b63='' style={{ opacity: "1" }}>
            <span
              className='word-above'
              data-v-50934b63=''
              style={{ opacity: 0, transform: "translateY(20px)" }}
            >
              Naura
            </span>
            <span className='word-under' data-v-50934b63=''>
              Naura
            </span>
          </span>{" "}
          <span className='word' data-v-50934b63='' style={{ opacity: "1" }}>
            <span
              className='word-above'
              data-v-50934b63=''
              style={{ opacity: 0, transform: "translateY(20px)" }}
            >
              Aulia
            </span>
            <span className='word-under' data-v-50934b63=''>
              Aulia
            </span>
          </span>
        </span>
      </span>
      <span className='ligne' data-v-50934b63=''>
        <span
          className='ligne-child'
          data-v-50934b63=''
          style={{
            translate: "none",
            rotate: "none",
            scale: "none",
            transform: "translate(0px, 0%)",
          }}
        >
          <span className='word' data-v-50934b63='' style={{ opacity: "1" }}>
            <span
              className='word-above'
              data-v-50934b63=''
              style={{ opacity: 0, transform: "translateY(20px)" }}
            >
              Eryazti! 💐
            </span>
            <span className='word-under' data-v-50934b63=''>
              Eryazti! 💐
            </span>
          </span>
        </span>
      </span>
    </p>
  );
};

export default HomePageTitle;
