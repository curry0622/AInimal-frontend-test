import React from 'react';
import classNames from 'classnames';

interface IProps {
  id: number;
  nickname: string;
  last_message: string;
  last_message_timestamp: string;
}

const Bar: React.FC<IProps> = ({
  id,
  nickname,
  last_message,
  last_message_timestamp,
}) => (
  <div className={classNames('messenger-preview-content-bar-container')}>
    <img alt="avatar" src={`${process.env.PUBLIC_URL}/avatars/${id}.jpg`} />
    <section>
      <h4>{nickname}</h4>
      <div>
        <span>{last_message} </span>
        <span> {last_message_timestamp}</span>
      </div>
    </section>
  </div>
);

export default Bar;
