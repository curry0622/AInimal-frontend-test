import React from 'react';
import classNames from 'classnames';
import Header from './header';
import Content from './content';

const Preview: React.FC = () => (
  <div className={classNames('messenger-preview-container')}>
    <Header />
    <Content />
  </div>
);

export default Preview;
