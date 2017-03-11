import Vue from 'vue'

export const getProducts = () => {
  return Vue.http.get('/')
}
