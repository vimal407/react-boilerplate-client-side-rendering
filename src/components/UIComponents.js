import React from 'react';
import { useState } from 'react';

const UIComponents = () => {
  const [activeTab] = useState('HOME');
  return (
    <div style={{ backgroundColor: 'white' }}>
      <div className="container" style={{ paddingBottom: '15px' }}>
        <h1>UI Components</h1>

        <div></div>
        <div style={{ margin: '20px 0' }}>
          <h2 style={{ marginTop: '20px' }}>Tabs</h2>
          <div className="">
            <div className="tabs-wrap">
              <div className="tab-content">
                {activeTab === 'HOME' ? (
                  <div className="tab-content-pnl">
                    <h5>Home</h5>
                  </div>
                ) : activeTab === 'ABOUT' ? (
                  <div className="tab-content-pnl">
                    <h5>About</h5>
                  </div>
                ) : activeTab === 'PRO' ? (
                  <div className="tab-content-pnl">
                    <h5>Profile</h5>
                  </div>
                ) : activeTab === 'ADDRESS' ? (
                  <div className="tab-content-pnl">
                    <h5>Address</h5>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UIComponents;
