import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

export default function DocSidebarItemLink({item, ...props}) {
  return (
    <li
      className="menu__list-item"
      data-icon={item.customProps?.icon || ''}
    >
      <Link
        className={clsx('menu__link')}
        to={item.href}
        {...props}
      >
        {item.label}
      </Link>
    </li>
  );
}
