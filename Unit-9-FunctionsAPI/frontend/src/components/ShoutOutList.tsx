import './ShoutOutList.css';
import ShoutOut from '../models/ShoutOut';
import UserLink from './UserLink';
import React from 'react';

interface Props {
  shoutOuts: ShoutOut[]
}

function ShoutOutList({shoutOuts}: Props) {
  return (
    <div className="ShoutOutList">
      <ul>
        {shoutOuts.map(shout => <li key={shout._id}>
          <h3>Shout out to <UserLink user={shout.to} /></h3>
          <p className="ShoutOutList__from">- from <UserLink user={shout.from} /></p>
          <p className="ShoutOutList__text">{shout.text}</p>
        </li>)}
      </ul>
    </div>
  );
}

export default ShoutOutList;