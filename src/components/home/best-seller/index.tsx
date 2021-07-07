import React from 'react';
import { formatCurrency } from 'utils/format';
import Image from 'next/image';

const Item = () => {
  return (
    <div className="flex-shrink-0 w-1/4 px-2">
      <div className="overflow-hidden transition duration-75 transform bg-white border rounded-lg cursor-pointer">
        <Image
          src="https://picsum.photos/200"
          alt="product"
          placeholder="empty"
          width="400"
          height="300"
          priority
        />
        <div className="p-3">
          <p className="mb-2 font-semibold">This is product name</p>
          <p className="">{formatCurrency(100000)}</p>
        </div>
      </div>
    </div>
  );
};

export default function BestSellSection(): JSX.Element {
  return (
    <>
      <h1 className="mb-4 text-3xl font-bold text-center">Best seller</h1>
      <div className="flex w-full -mx-2 overflow-x-auto">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </>
  );
}
