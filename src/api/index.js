import Vue from 'vue'

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(require('../mocks/products.json'));
    }, 1000);
  });
};
