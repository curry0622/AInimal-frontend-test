import React from 'react';
import classNames from 'classnames';

const Header: React.FC = () => (
  <div className={classNames('messenger-preview-header-container')}>
    <section>
      <img alt="me" src={`${process.env.PUBLIC_URL}/avatars/000.jpg`} />
      <h3>聊天室</h3>
      <button type="button">
        <img alt="setting" src={`${process.env.PUBLIC_URL}/icons/3dots.png`} />
      </button>
      <button type="button">
        <img
          alt="video call"
          src={`${process.env.PUBLIC_URL}/icons/video-call.png`}
        />
      </button>
      <button type="button">
        <img
          alt="new message"
          src={`${process.env.PUBLIC_URL}/icons/new-message.png`}
        />
      </button>
    </section>
    <input placeholder="   &#128269;  搜尋 messenger" />
  </div>
);

export default Header;
