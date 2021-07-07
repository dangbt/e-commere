import React from 'react';
import {
  HiOutlineHome,
  HiHome,
  HiOutlinePhone,
  HiPhone,
  HiOutlineViewList,
  HiViewList,
  HiOutlineLogin,
  HiOutlineHeart,
  HiHeart
} from 'react-icons/hi';

export const activeColor = 'rgb(59, 130, 246)'; // tw-blue-400

export interface ITEM_MENU {
  label: string;
  path: string;
  link: string;
  icon: (actived: boolean) => JSX.Element;
  onClick?: () => void;
}

export const MENU: ITEM_MENU[] = [
  {
    label: 'Home',
    path: '/home',
    link: '/home',
    icon: (actived) =>
      actived ? (
        <HiHome color={activeColor} size={24} />
      ) : (
        <HiOutlineHome size={24} />
      )
  },
  {
    label: 'Categories',
    path: 'categories',
    link: '/categories',
    icon: (actived) =>
      actived ? (
        <HiViewList color={activeColor} size={24} />
      ) : (
        <HiOutlineViewList size={24} />
      )
  },
  {
    label: 'About us',
    path: 'about-us',
    link: '/about-us',
    icon: (actived) =>
      actived ? (
        <HiHeart color={activeColor} size={24} />
      ) : (
        <HiOutlineHeart size={24} />
      )
  },
  {
    label: 'Contact',
    path: 'contact',
    link: '/contact',
    icon: (actived) =>
      actived ? (
        <HiPhone color={activeColor} size={24} />
      ) : (
        <HiOutlinePhone size={24} />
      )
  }
];

export const MENU_BOTTOM: ITEM_MENU[] = [
  {
    label: 'Sign in',
    path: '/sign-in',
    link: '#',
    icon: (actived) => (
      <HiOutlineLogin color={actived ? activeColor : ''} size={24} />
    )
  }
];
