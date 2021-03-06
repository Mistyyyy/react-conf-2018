import React from 'react';
import { Link } from '@reach/router';
import { Spinner } from './Spinner';

function ListItem({ item, to, onClick, currentId }) {
  return (
    <Link
      to={to}
      className="name"
      onClick={() => {
        if (onClick) {
          onClick(item.id);
        }
      }}
    >
      <div className="item" key={item.id}>
        <img
          className="artwork"
          src={`/img/${item.id}/avatar-hd.jpeg`}
          alt={item.name}
        />
        <div className="col flex-1">
          <div className="name">{item.name}</div>
        </div>
        <div>{currentId === item.id ? <Spinner /> : null}</div>
      </div>
    </Link>
  );
}

export default ListItem;
