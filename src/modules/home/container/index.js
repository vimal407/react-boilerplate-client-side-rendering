import React from 'react';
import {
  IoMdHome,
  IoMdCodeWorking,
  IoMdApps,
  IoIosBrush,
} from 'react-icons/io';

const index = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-ms-12">
              <h1 className="main-title">MargMaker Solutions</h1>
              <p>Hello User</p>
            </div>
          </div>
          <div className="row mb-15">
            <div className="col-md-12 d-flex">
              <div className="homeCard mr-15">
                <div>
                  <div className="text-center home-icn">
                    <IoMdHome className="text-20" />
                  </div>
                  <h2>About Us</h2>
                </div>
              </div>
              <div className="homeCard">
                <div>
                  <div className="text-center home-icn">
                    <IoMdCodeWorking className="text-20" />
                  </div>
                  <h2>Work Shocase</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 d-flex">
              <div className="homeCard mr-15">
                <div>
                  <div className="text-center home-icn">
                    <IoMdApps className="text-20" />
                  </div>
                  <h2>UI-Component</h2>
                </div>
              </div>
              <div className="homeCard">
                <div>
                  <div className="text-center home-icn">
                    <IoIosBrush className="text-20" />
                  </div>
                  <h2>UI Style Guide</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
