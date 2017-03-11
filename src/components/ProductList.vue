<template>
  <div class="products">
      <section class="col-md-6" v-for="product in sortedAndFilteredProducts(sortOrder, filterText)">
        <ProductListItem :product="product"></ProductListItem>
      </section>
  </div>
</template>

<script>
import { mapActions } from "vuex"
import ProductListItem from "./ProductListItem.vue"
export default {
  name: "products",
  props: ["products", "sortOrder", "filterText"],
  components: {
    "ProductListItem": ProductListItem
  },
  methods: {
    sortedAndFilteredProducts: function (order, filter) {
      var products = this.products;
      if (this.filterText) {
        var products = products.filter(product => {
            return product.offering.name.toLowerCase().indexOf(filter.toLowerCase()) > -1;
        });
      }
      if (order === "Sort by title") {
        return products.slice().sort((a, b) => {
            if (a.offering.name < b.offering.name) return -1;
            if (a.offering.name > b.offering.name) return 1;
            return 0;
        });
      } else if (order === "Sort by date added") {
        return products.slice().sort((a, b) => {
            if (a.creationDate > b.creationDate) return 1;
            if (a.creationDate < b.creationDate) return -1;
            return 0;
        });
      } else if (order === "Sort by expiration date") {
        return products.slice().sort((a, b) => {
            if (a.expirationDate > b.expirationDate) return 1;
            if (a.expirationDate < b.expirationDate) return -1;
            return 0;
        });
      }
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
