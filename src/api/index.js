import _products from './products.json';
import _promotions from './promotions.json';
import _users from './users.json';

const upto = (factor) => Math.random() * factor;

export const allProducts = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(_products), upto(1000));
  });
};

export const allPromotions = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(_promotions), upto(1000));
  });
};

export const login = (username, password) => {
  const user = _users.find((user) => user.id === username);

  return new Promise((resolve, reject) => {
    setTimeout(() => user !== undefined ? resolve(user) : reject(), upto(1000));
  });
};
