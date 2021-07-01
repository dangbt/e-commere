import React from 'react';
import { Button, ButtonSize } from '@moai/core';
import { HiOutlineChevronLeft } from 'react-icons/hi';
import { useRouter } from 'next/router';

interface Props {
  label?: string;
  size: ButtonSize;
  onClick?: () => void;
}

export default function BackBtn({ label, size, onClick }: Props): JSX.Element {
  const router = useRouter();

  const handleOnClick = onClick ? onClick : () => router.back();

  return (
    <div className="flex items-center space-x-2">
      <Button
        icon={HiOutlineChevronLeft}
        style={Button.styles.flat}
        size={size}
        iconLabel=""
        onClick={handleOnClick}></Button>
      <span>{label}</span>
    </div>
  );
}
