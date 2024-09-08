import React, { useState } from "react";
import HomePageTitle from "./HomePageTitle";

const Hero = ({
  isTitleAnimationComplete,
  handleTitleAnimationComplete,
  tabIndex,
}) => {
  const [isScrollButtonHovered, setIsScrollButtonHovered] = useState(false);

  const handleScrollButtonHover = () => {
    setIsScrollButtonHovered(true);
    setTimeout(() => {
      setIsScrollButtonHovered(false);
    }, 200);
  };
  return (
    <div className='homepage-hero grid-padding' data-v-e747f53d=''>
      <div data-v-e747f53d=''>
        <HomePageTitle onAnimationComplete={handleTitleAnimationComplete} />
        <section
          className='homepage-kinetic laststag'
          data-v-e747f53d=''
          data-v-571c3632=''
          style={{
            opacity: 1,
            visibility: isTitleAnimationComplete ? "visible" : "hidden",
          }}
        >
          <img className='shape' src='/images/cimeng.jpeg' alt='' width="100%" />
        </section>
        <div
          className='grid laststag'
          data-v-e747f53d=''
          style={{
            opacity: 1,
            visibility: isTitleAnimationComplete ? "visible" : "hidden",
          }}
        >
          <p className='col col1' data-v-e747f53d=''>
            I made this website as a gift for us to reminisce our special
            moments (banyak yang alay tapi lucu di sini, maaf ya kalau alay)
          </p>
          <button
            aria-label='Scroll'
            className={`scroll t-big-text ${isScrollButtonHovered ? "on" : ""}`}
            data-v-e747f53d=''
            data-v-39d6bdbe=''
            tabIndex={tabIndex}
            onMouseEnter={handleScrollButtonHover}
          >
          </button>
          <div className='col2' data-v-e747f53d=''>
            <ul className='col col2bis' data-v-e747f53d=''>
              <li data-v-e747f53d=''>
                Idk how you've been doing lately, but i really hope that you
                have a wonderful and happy days
              </li>
            </ul>
            <ul className='col col3' data-v-e747f53d=''>
              <li data-v-e747f53d=''>
                Di bawah ini ada cerita tentang kita. <br /> Mungkin udah ga
                penting menurut kamu, <br /> jadi terserah kamu mau lanjut baca
                atau nggak
              </li>
            </ul>
          </div>
          <ul className='col col4' data-v-e747f53d=''>
            <li data-v-e747f53d=''></li>
            <li data-v-e747f53d=''></li>
            <li data-v-e747f53d=''></li>
            <li data-v-e747f53d=''></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
