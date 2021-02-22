import React, { useEffect } from 'react';
import Preview from './preview';
import Chatroom from './chatroom';
import Info from './info';

const Messenger: React.FC = () => {
  const fetchData = async () => {
    const response = await fetch(
      'https://cors-anywhere.herokuapp.com/https://recruit.ainimal.io/friend_list',
      {
        method: 'GET',
        mode: 'cors',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
      },
    );
    const tmp = await response.json();
    // eslint-disable-next-line no-console
    console.log(tmp);
  };

  useEffect(() => {
    (async () => {
      await fetchData();
    })();
  }, []);

  return (
    <main>
      <Preview />
      <Chatroom />
      <Info />
    </main>
  );
};

export default Messenger;
