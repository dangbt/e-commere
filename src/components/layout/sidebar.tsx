import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MENU, ITEM_MENU, MENU_BOTTOM } from 'constants/menu';
import { useMemo } from 'react';

const renderMenuItem = (item: ITEM_MENU, index: number) => {
  const router = useRouter();

  const actived = useMemo(() => {
    if (router.pathname.includes(item.path)) {
      return true;
    }
    return false;
  }, [router]);
  return (
    <Link href={item.link} key={index}>
      <li
        className={`flex items-center px-4 py-2 space-x-4 rounded-md cursor-pointer 
      ${actived ? 'bg-white shadow' : 'hover:bg-gray-100'}`}>
        {item.icon(actived)}
        <span className={` ${actived ? ' font-semibold text-blue-500' : ''}`}>
          {item.label}
        </span>
      </li>
    </Link>
  );
};

const Sidebar = (): JSX.Element => {
  return (
    <div className="flex flex-col h-full px-6 py-6">
      <div className="mb-6">
        <img
          className="hidden w-full h-auto mb-4 rounded-hafl md:block"
          src="https://picsum.photos/200"
          alt="avatart"
        />
        <img
          style={{ maxWidth: 200 }}
          className="w-full h-auto mx-auto mb-4 rounded-hafl md:hidden"
          src="https://picsum.photos/200"
          alt="avatart"
        />
        <p className="text-center">
          {'<'}Company name{'>'}
        </p>
      </div>
      <div className="flex flex-col justify-between h-full">
        <ul className="space-y-1">{MENU.map(renderMenuItem)}</ul>
        <ul className="space-y-1">{MENU_BOTTOM.map(renderMenuItem)}</ul>
      </div>
    </div>
  );
};

export default Sidebar;
