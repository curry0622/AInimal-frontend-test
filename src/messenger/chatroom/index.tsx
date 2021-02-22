import React from 'react';
import classNames from 'classnames';
import Header from './header';
import Content from './content';
import Footer from './footer';

const Chatroom: React.FC = () => (
  <div className={classNames('messenger-chatroom-container')}>
    <Header />
    <Content />
    <Footer />
  </div>
);

export default Chatroom;
