/* eslint-disable @typescript-eslint/naming-convention */
import React, { useEffect, useState } from 'react';
import Preview from './preview';
import Chatroom from './chatroom';
import Info from './info';

interface IData {
  animal: number;
  comtags: string | null;
  friended_at: string;
  gender: string;
  gmail: string;
  id: number;
  last_message: string;
  last_message_timestamp: string;
  nickname: string;
  sign: string;
  type: number;
}

const Messenger: React.FC = () => {
  // api data
  const [apiData, setApiData] = useState<IData[]>([]);

  const fetchData = async () => {
    const response = await fetch(
      'https://secret-ocean-49799.herokuapp.com/https://recruit.ainimal.io/friend_list',
      {
        method: 'GET',
        mode: 'cors',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
      },
    );
    if (response.status === 200) {
      const tmp = await response.json();
      setApiData([...tmp]);
    } else {
      // eslint-disable-next-line no-alert
      alert('fetch api failed');
    }
  };

  useEffect(() => {
    (async () => {
      await fetchData();
    })();
  }, []);

  return (
    <main>
      <Preview
        userDataArr={apiData.map((d) => ({
          id: d.id,
          nickname: d.nickname,
          last_message: d.last_message,
          last_message_timestamp: d.last_message_timestamp,
        }))}
      />
      <Chatroom />
      <Info />
    </main>
  );
};

export default Messenger;
