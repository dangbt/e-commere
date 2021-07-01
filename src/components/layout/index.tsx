import React, { ReactChild, useState } from 'react';
import Sidebar from './sidebar';
import BackBtn from 'components/back-btn';
import { Button } from '@moai/core';
import { HiMenu, HiOutlineX } from 'react-icons/hi';

interface Props {
  children: ReactChild;
  backBtn: boolean;
  backBtnLabel: string;
  onBack?: () => void;
}

const Layout = ({
  children,
  backBtn,
  backBtnLabel,
  onBack
}: Props): JSX.Element => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  return (
    <div className="w-screen h-screen bg-gray-200">
      <div className="flex w-full h-screen mx-auto overflow-hidden">
        <div className="hidden w-1/5 md:block">
          <Sidebar />
        </div>
        <main
          className={`relative w-full bg-white shadow md:rounded-l-3xl rounded-none md:w-4/5`}>
          <div
            className={`flex relative p-2 md:p-6 ${
              backBtn ? 'justify-between' : 'justify-end'
            }`}>
            {backBtn && (
              <div>
                <div className="md:hidden">
                  <BackBtn
                    onClick={onBack}
                    size={Button.sizes.largeIcon}
                    label={backBtnLabel}
                  />
                </div>
                <div className="hidden md:block">
                  <BackBtn size={Button.sizes.large} />
                </div>
              </div>
            )}
            <div className="md:hidden">
              <div className="relative z-20">
                <Button
                  onClick={() => setOpenSidebar(!openSidebar)}
                  style={Button.styles.flat}
                  size={Button.sizes.largeIcon}
                  icon={openSidebar ? HiOutlineX : HiMenu}
                  iconLabel=""
                />
              </div>
            </div>
          </div>
          {children}
          {openSidebar && (
            <div className="absolute top-0 bottom-0 left-0 right-0 z-10 bg-white">
              <Sidebar />
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Layout;
