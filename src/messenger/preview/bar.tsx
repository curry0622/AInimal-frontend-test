import React from 'react';
import classNames from 'classnames';

const Bar: React.FC = () => (
  <div className={classNames('messenger-preview-content-bar-container')}>
    <img alt="avatar" src={`${process.env.PUBLIC_URL}/avatars/000.jpg`} />
    <section>
      <h4>蔡哲平</h4>
      <div>
        <span>最後訊息 </span>
        <span> 1小時</span>
      </div>
    </section>
  </div>
);

export default Bar;
