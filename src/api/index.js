import _products from './products.json';

export const allProducts = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(_products), Math.random() * 1000);
  });
};
