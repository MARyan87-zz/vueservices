import Vue from 'vue'

export default {
  getProducts () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(require('../mocks/products.json'));
      }, 1000);
    });
  },
  getUsers (subId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let users = require('../mocks/user-map.json')[subId];
        if (users) {
          resolve(users);
        } else {
          reject("NO_USERS");
        }
      }, 1000);
    });
  }
}
