import * as React from 'react';
import { Link } from 'react-router-dom';

export function Header () {
  return (
    <div>
      <h1><Link to="/menu">Menu</Link></h1>
    </div>
  );
}
