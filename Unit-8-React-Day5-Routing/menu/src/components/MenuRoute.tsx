import * as React from 'react';
import { useState } from 'react';
import { Item } from '../models/item';
import menu from '../data/menu';
import { BasicItem } from './BasicItem';

export function MenuRoute () {
    const [items] = useState<Item[]>(menu);
  return (
    <div>
      { items.map((item) => <BasicItem item={item} />) }
    </div>
  );
}
