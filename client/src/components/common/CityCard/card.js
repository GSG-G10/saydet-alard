/* eslint-disable */
import { Card as CardComp } from 'antd';

import React from 'react';

function Card({ title, children }) {
  return (
      <div className="site-card-border-less-wrapper">
        <CardComp title={title} bordered={false} headStyle={{textAlign: 'center', fontSize: '70px', borderWidth: 0}} style={{display: 'flex', flexDirection: 'column',  alignItems: 'center', width: 'auto', height: '100%'}} bodyStyle={{margin: 'auto'}} >
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div dir="rtl" style={{height: '100%'}}>
                    {children}
                </div>
          </div>
        </CardComp>
      </div>
  );
}

export default Card;
