import React from 'react';
import classNames from 'classnames';

const Header: React.FC = () => (
  <div className={classNames('messenger-preview-header-container')}>
    <section>
      <img alt="me" src={`${process.env.PUBLIC_URL}/avatars/000.jpeg`} />
      <h3>聊天室</h3>
      <button type="button">
        <img
          alt="setting"
          src={`${process.env.PUBLIC_URL}/icons/setting.png`}
        />
      </button>
      <button type="button">
        <img alt="video" src={`${process.env.PUBLIC_URL}/icons/video.png`} />
      </button>
      <button type="button">
        <img alt="write" src={`${process.env.PUBLIC_URL}/icons/write.png`} />
      </button>
    </section>
    <input />
  </div>
);

export default Header;
