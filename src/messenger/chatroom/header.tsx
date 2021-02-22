import React from 'react';
import classNames from 'classnames';

const Header: React.FC = () => (
  <div className={classNames('messenger-chatroom-header-container')}>
    <img alt="avatar" src={`${process.env.PUBLIC_URL}/avatars/506.jpg`} />
    <section className={classNames('messenger-chatroom-header-text')}>
      <h4>統神</h4>
      <div>5分鐘前上線</div>
    </section>
    <section className={classNames('messenger-chatroom-header-images')}>
      <img alt="call" src={`${process.env.PUBLIC_URL}/icons/phone-blue.png`} />
      <img
        alt="video-call"
        src={`${process.env.PUBLIC_URL}/icons/video-call-blue.png`}
      />
      <img alt="info" src={`${process.env.PUBLIC_URL}/icons/info-blue.png`} />
    </section>
  </div>
);

export default Header;
