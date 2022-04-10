import React from 'react';

export const usePrice = price => {
  let priceStr = price.toFixed(2);
  priceStr = priceStr.toString();
  let priceFormated = '$' + priceStr.replace('.', ',');

  return [priceFormated];
};
