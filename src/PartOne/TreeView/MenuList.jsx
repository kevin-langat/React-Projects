import React from 'react';
import MenuItem from './MenuItem';

function MenuList({ list = [], styles }) {
  return (
    <ul
      style={styles}
      className=' gap-2 flex flex-col list-decimal ml-5 *:odd:list-decimal'
    >
      {list && list.length
        ? list?.map((listItem) => <MenuItem listItem={listItem} />)
        : null}
    </ul>
  );
}

export default MenuList;
