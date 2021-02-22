import React from 'react';
import classNames from 'classnames';
import Header from './header';
import Content from './content';

interface IUserData {
  id: number;
  nickname: string;
  last_message: string;
  last_message_timestamp: string;
}

interface IProps {
  userDataArr: IUserData[];
}

const Preview: React.FC<IProps> = ({ userDataArr }) => (
  <div className={classNames('messenger-preview-container')}>
    <Header />
    <Content userDataArr={userDataArr} />
  </div>
);

export default Preview;
