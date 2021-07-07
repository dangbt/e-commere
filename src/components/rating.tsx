import React from 'react';
import { HiStar, HiOutlineStar } from 'react-icons/hi';

interface Props {
  rateNumber: number;
}
const activeColor = 'rgb(251, 191, 36)'; // tw-yellow-400

export default function Rating({ rateNumber }: Props): JSX.Element {
  return (
    <div className="flex text-ye">
      {[1, 2, 3, 4, 5].map((index) =>
        index <= rateNumber ? (
          <HiStar key={index} color={activeColor} size={16} />
        ) : (
          <HiOutlineStar key={index} size={16} />
        )
      )}
    </div>
  );
}
