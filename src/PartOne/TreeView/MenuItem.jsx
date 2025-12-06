import { useState } from 'react';
import MenuList from './MenuList';
import { ChevronDown, ChevronUp } from 'lucide-react';

function MenuItem({ listItem }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState(false);

  function handleToggleChildren() {
    setDisplayCurrentChildren(!displayCurrentChildren);
  }
  return (
    <li>
      <div className=' flex gap-5 flex-row'>
        <h2 className='list-none'>{listItem.label}</h2>
        {listItem && listItem.children && listItem.children.length ? (
          <span onClick={handleToggleChildren}>
            {displayCurrentChildren ? <ChevronUp /> : <ChevronDown />}
          </span>
        ) : null}{' '}
      </div>
      {listItem &&
      listItem.children &&
      listItem.children.length &&
      displayCurrentChildren > 0 ? (
        <MenuList
          styles={{
            backgroundColor: 'green',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            borderRadius: '10px',
            padding: '5px',
          }}
          list={listItem.children}
        />
      ) : null}
    </li>
  );
}

export default MenuItem;
