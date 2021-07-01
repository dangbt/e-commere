import React from 'react';
import {
  HiOutlineHome,
  HiOutlinePhone,
  HiOutlineViewList
} from 'react-icons/hi';

export const activeColor = 'rgb(59, 130, 246)';

export interface ITEM_MENU {
  label: string;
  path: string;
  link: string;
  icon: (actived: boolean) => JSX.Element;
}

export const MENU: ITEM_MENU[] = [
  {
    label: 'Home',
    path: '/home',
    link: '/home',
    icon: (actived) => (
      <HiOutlineHome color={actived ? activeColor : ''} size={24} />
    )
  },
  {
    label: 'Categories',
    path: 'categories',
    link: '/categories',
    icon: (actived) => (
      <HiOutlineViewList color={actived ? activeColor : ''} size={24} />
    )
  },
  {
    label: 'About us',
    path: 'about-us',
    link: '/about-us',
    icon: (actived) => (
      <HiOutlineHome color={actived ? activeColor : ''} size={24} />
    )
  },
  {
    label: 'Contact',
    path: 'contact',
    link: '/contact',
    icon: (actived) => (
      <HiOutlinePhone color={actived ? activeColor : ''} size={24} />
    )
  }
];
