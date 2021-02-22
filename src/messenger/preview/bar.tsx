import React from 'react';
import classNames from 'classnames';
import dayjs from 'dayjs';

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
}) => {
  const calTimeDiff = () => {
    if (dayjs().diff(last_message_timestamp, 'second') < 60) {
      return ` · ${dayjs().diff(last_message_timestamp, 'second')}秒`;
    }
    if (dayjs().diff(last_message_timestamp, 'minute') < 60) {
      return ` · ${dayjs().diff(last_message_timestamp, 'minute')}分鐘`;
    }
    if (dayjs().diff(last_message_timestamp, 'hour') < 24) {
      return ` · ${dayjs().diff(last_message_timestamp, 'hour')}小時`;
    }
    if (dayjs().diff(last_message_timestamp, 'day') < 7) {
      return ` · ${dayjs().diff(last_message_timestamp, 'day')}天`;
    }
    if (dayjs().diff(last_message_timestamp, 'week') < 5) {
      return ` · ${dayjs().diff(last_message_timestamp, 'week')}星期`;
    }
    if (dayjs().diff(last_message_timestamp, 'month') < 12) {
      return ` · ${dayjs().diff(last_message_timestamp, 'month')}個月`;
    }
    if (dayjs().diff(last_message_timestamp, 'year') < 12) {
      return ` · ${dayjs().diff(last_message_timestamp, 'year')}年前`;
    }
    return '';
  };

  return (
    <div className={classNames('messenger-preview-content-bar-container')}>
      <img alt="avatar" src={`${process.env.PUBLIC_URL}/avatars/${id}.jpg`} />
      <section>
        <h4>{nickname}</h4>
        <div>
          <span>{last_message} </span>
          <span> {calTimeDiff()}</span>
        </div>
      </section>
    </div>
  );
};

export default Bar;
