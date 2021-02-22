import React from 'react';
import classNames from 'classnames';
import Bar from './bar';

interface IUserData {
  id: number;
  nickname: string;
  last_message: string;
  last_message_timestamp: string;
}

interface IProps {
  userDataArr: IUserData[];
}

const Content: React.FC<IProps> = ({ userDataArr }) => {
  const createBars = userDataArr.map((d) => (
    <Bar
      id={d.id}
      nickname={d.nickname}
      last_message={d.last_message}
      last_message_timestamp={d.last_message_timestamp}
    />
  ));
  return (
    <div className={classNames('messenger-preview-content-container')}>
      {createBars}
    </div>
  );
};

export default Content;
