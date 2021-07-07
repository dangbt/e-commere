import React from 'react';
import { Button } from '@moai/core';

export default function InfoSection(): JSX.Element {
  return (
    <>
      <div className="flex">
        <div className="flex flex-col justify-center w-1/2">
          <h1 className="mb-4 text-3xl italic font-bold">
            Chất lượng tạo nên thương hiệu
          </h1>
          <p className="mb-4">
            &ldquo;50 năm 1 hành trình, mang đến cho khách hàng trải nghiệm mua
            sắp tuyệt vời&rdquo;
          </p>
          <Button highlight>Trải nghiệm ngay</Button>
        </div>
        <div className="flex justify-center w-1/2">
          <div className="inline-block rounded-md shadow-md ">
            <img
              className="rounded-md"
              src="https://picsum.photos/400/600"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
