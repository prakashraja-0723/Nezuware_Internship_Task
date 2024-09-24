import React from 'react';

const EmptyList = ({ asset, description, title="" }) => {
  return (
    <div className={`h-[75%] md:h-[80%] lg:h-5/6 mx-auto flex items-center justify-center flex-col`}>
      <div className={`w-60 aspect-square`}>
        <img
          src={asset}
          alt={title === '' ? description : title}
          className={`w-full h-full object-cover`}
        />
      </div>
      <h3 className={`text-lg font-semibold`}>{title}</h3>
      <p className={`text-base text-center w-60`}>{description}</p>
    </div>
  );
};
export default EmptyList;
