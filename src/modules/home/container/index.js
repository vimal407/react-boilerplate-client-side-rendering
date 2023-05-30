import React, { useRef } from 'react';
import {
  IoMdHome,
  IoMdCodeWorking,
  IoMdApps,
  IoIosBrush,
} from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Languages } from 'services/languages';
import { changeLanguage } from 'modules/login/slice/loginSlice';
import { Popover } from 'ui-controls';
import { languages } from 'services/constants';

const Home = () => {
  const { language } = useSelector(({ login }) => login);
  const ref = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onNavigate = (path) => {
    navigate(path);
  };

  const selectLanguage = (language) => {
    dispatch(changeLanguage(language));
    ref.current.click();
  };

  const currentLanguage = Languages[language];

  return (
    <>
      <section>
        <div className="container">
          <div className="row" style={{ alignItems: 'center' }}>
            <div className="col-md-10">
              <h1 className="main-title">
                {currentLanguage.margmakerSolutions}
              </h1>
              <p>{currentLanguage.helloUser}</p>
            </div>

            <div className="col-md-2">
              <Popover
                buttonRef={ref}
                button={<div className="profileView">language</div>}
              >
                <div onClick={() => selectLanguage(languages.english)}>
                  English
                </div>
                <div
                  className="aboutBlock"
                  onClick={() => selectLanguage(languages.hindi)}
                >
                  Hindi
                </div>
              </Popover>
            </div>
          </div>
          <div className="row mb-15">
            <div className="col-md-12 d-flex">
              <div
                className="homeCard mr-15"
                onClick={() => onNavigate('/about')}
              >
                <div>
                  <div className="text-center home-icn">
                    <IoMdHome className="text-20" />
                  </div>
                  <h2>{currentLanguage.aboutUs}</h2>
                </div>
              </div>
              <div
                className="homeCard"
                onClick={() => onNavigate('/work-shocase')}
              >
                <div>
                  <div className="text-center home-icn">
                    <IoMdCodeWorking className="text-20" />
                  </div>
                  <h2>{currentLanguage.workShocase}</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 d-flex">
              <div
                className="homeCard mr-15"
                onClick={() => onNavigate('/ui-controls')}
              >
                <div>
                  <div className="text-center home-icn">
                    <IoMdApps className="text-20" />
                  </div>
                  <h2>{currentLanguage.uiComponents}</h2>
                </div>
              </div>
              <div
                className="homeCard"
                onClick={() => onNavigate('/style-guide')}
              >
                <div>
                  <div className="text-center home-icn">
                    <IoIosBrush className="text-20" />
                  </div>
                  <h2>{currentLanguage.uiStyle}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
