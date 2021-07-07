import React from 'react';

export default function Name(): JSX.Element {
  return (
    <>
      <div className="flex">
        <div className="w-1/2 p-4 text-left">
          <h1 className="mb-4 text-3xl italic font-bold">
            Chất lượng tạo nên thương hiệu
          </h1>
          <p className="mb-4">
            &ldquo;50 năm 1 hành trình, mang đến cho khách hàng trải nghiệm mua
            sắp tuyệt vời&rdquo;
          </p>
          <p className="mb-4">
            &ldquo;50 năm 1 hành trình, mang đến cho khách hàng trải nghiệm mua
            sắp tuyệt vời&rdquo;
          </p>
          <p className="mb-4">
            &ldquo;50 năm 1 hành trình, mang đến cho khách hàng trải nghiệm mua
            sắp tuyệt vời&rdquo;
          </p>
        </div>
        <div className="w-1/2">
          <img
            className="rounded-lg"
            src="https://picsum.photos/400/400"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
