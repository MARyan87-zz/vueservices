import Vue from 'vue'
import VueRouter from 'vue-router'
import Products from './components/Products'
import ProductList from './components/ProductList'

Vue.use(VueRouter)

const routes = [
{
    path: '/',
    component: Products
},
{
	path: '/list',
	component: ProductList
}]

export default new VueRouter({
  routes
})
