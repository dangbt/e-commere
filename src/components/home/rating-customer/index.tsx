import React from 'react';
import Rating from 'components/rating';
import Image from 'next/image';

const Item = (): JSX.Element => {
  return (
    <div className="w-1/4 overflow-hidden bg-white border rounded-lg">
      <div>
        <Image
          className="w-full h-auto"
          src="https://picsum.photos/200"
          alt="product"
          placeholder="empty"
          width="400"
          height="300"
          priority
        />
      </div>
      <div className="p-4">
        <p className="mb-2 italic">
          &quot;this is a comment of a customer, that tell about a good
          product&quot;
        </p>
        <div className="flex justify-end">
          <Rating rateNumber={5} />
        </div>
      </div>
    </div>
  );
};

export default function RatingCustomer(): JSX.Element {
  return (
    <>
      <div>
        <h1 className="mb-4 text-3xl font-bold text-center">
          Customers say about US
        </h1>
        <div className="flex space-x-4">
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </>
  );
}
