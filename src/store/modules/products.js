import Vue from 'vue'
import * as types from '../mutation-types'
import * as apis from '../../api'

const state = {
  products: []
};

const mutations = {
  [types.GET_PRODUCTS] (state, { products }) {
    state.products = state.products.concat(products);
  }
};

const actions = {
  getProducts({commit}, params) {
    return apis.getProducts(params)
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
