import Vue from 'vue'
import types from '../mutation-types'
import apis from '../../api'

const state = {
  products: []
};

const mutations = {
  [types.GET_PRODUCTS] (state, { products }) {
    state.products = state.products.concat(products);
  }
};

const actions = {
  getProducts({commit}) {
    return apis.getProducts()
      .then(res => {
      	commit(types.GET_PRODUCTS, res);
    })
  }
};

const getters = {
  products: state => state.products,
};

export default {
  state,
  getters,
  mutations,
  actions
}
