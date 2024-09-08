import React from "react";
import { Link } from "react-router-dom";
import KineticOne from "../KineticOne";
import Media from "../Media";
import KineticThree from "../KineticThree";

const Projects = ({
  tabIndex,
  handleError,
  projectsVisible,
  setProjectsVisible,
}) => {
  return (
    <div className='grid-spe' data-v-28f4920b=''>
      <div className='ligne ligne1' data-v-28f4920b=''>
        {projectsVisible && (
          <div className='cell'>
            <div className='homepage-kinetic homepage-kinetic-1 kinetic'>
              <img
                className='shape cimeng'
                src='/images/cimeng.jpeg'
                alt=''
                width='100%'
              />
            </div>
          </div>
        )}

        <div className='cell' data-v-28f4920b=''>
          <h2 data-v-28f4920b=''>Our Gallery</h2>
        </div>
      </div>
      <div className='ligne ligne2' data-v-28f4920b=''>
        <div className='cell' data-v-28f4920b=''>
          <Link
            to='/naura'
            className='innerMedia'
            data-v-28f4920b=''
            tabIndex={tabIndex ? "0" : "-1"}
            style={{ pointerEvents: "initial" }}
          >
            {projectsVisible && (
              <>
                <span className='index' data-v-28f4920b=''>
                  01
                </span>
                <h3 className='t-h3' data-v-28f4920b=''>
                  Naura
                </h3>
                <Media handleError={handleError} image='/images/naura/4.jpg' />
              </>
            )}
          </Link>
        </div>
        {projectsVisible && <KineticThree tabIndex={tabIndex ? "0" : "-1"} />}
      </div>
      <div className='ligne ligne3' data-v-28f4920b=''>
        <div className='cell' data-v-28f4920b=''>
          <Link
            to='/duo-alay'
            className='innerMedia'
            data-v-28f4920b=''
            tabIndex={tabIndex ? "0" : "-1"}
            style={{ pointerEvents: "initial" }}
          >
            {projectsVisible && (
              <>
                <span className='index' data-v-28f4920b=''>
                  02
                </span>
                <h3 className='t-h3' data-v-28f4920b=''>
                  Duo Alay 😎👆
                </h3>
                <Media
                  handleError={handleError}
                  image='/images/duo alay/1.jpg'
                />
              </>
            )}
          </Link>
        </div>
      </div>
      <div className='ligne ligne4' data-v-28f4920b=''>
        <div className='cell' data-v-28f4920b=''>
          <Link
            to='/until-then'
            className='innerMedia'
            data-v-28f4920b=''
            tabIndex={tabIndex ? "0" : "-1"}
            style={{ pointerEvents: "initial" }}
          >
            {projectsVisible && (
              <>
                <span className='index' data-v-28f4920b=''>
                  03
                </span>
                <h3 className='t-h3' data-v-28f4920b=''>
                  Until Then (?)
                </h3>
                <Media
                  handleError={handleError}
                  image='/images/until then/1.jpg'
                />
              </>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
