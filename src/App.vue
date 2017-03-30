<template>
  <div id="app">
    <section id="top" class="container">
        <h1>Products and Services</h1>
        <section id="filterAndSort">
          <section class="col-sm-6">
            <input class="form-control" v-model="filterText" id="filter" type="text" placeholder="Filter by title" />
          </section>
          <section class="col-sm-3">
            <select v-model="sortOrder" class="form-control" id="sort">
              <option v-for="option in sortOptions">{{option}}</option>
            </select>
          </section>
          <section class="col-sm-3 views">
            <a href="/#/tiles"><span class="glyphicon glyphicon-th"></span></a>
            <a href="/#/list"><span class="glyphicon glyphicon-th-list"></span></a>
          </section>
        </section>
    </section>
    <section class="container">
      <div v-if="loadingProducts" class="loader"></div>
      <router-view :sortOrder="sortOrder" :products="products" :filterText="filterText"></router-view>
    </section>
  </div>
</template>

<script>
import { mapActions } from "vuex"
export default {
  name: 'app',
  data: function () {
    return {
      filterText: "",
      sortOrder: "Sort by title",
      sortOptions: ["Sort by title", "Sort by date added", "Sort by expiration date"],
      loadingProducts: true
    };
  },
  mounted:function(){
        this.getProducts()
          .then(() => {
            this.loadingProducts = false;
          });
  },
  methods: {
     ...mapActions([
      "getProducts"
    ])
  },
  computed: {
    products() {
      return this.$store.getters.products
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#top {
  margin-bottom: 50px;
}

.views {
  text-align: left;
}

.glyphicon {
  font-size: 2em;
  margin: 0 10px;
}

/* Adapted from https://github.com/lukehaas/css-loaders*/
.loader,
.loader:after {
  border-radius: 50%;
  width: 10em;
  height: 10em;
}
.loader {
  margin: 20px auto;
  font-size: 8px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(50, 50, 50, 0.2);
  border-right: 1.1em solid rgba(50, 50, 50, 0.2);
  border-bottom: 1.1em solid rgba(50, 50, 50, 0.2);
  border-left: 1.1em solid #ffffff;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 .8s infinite linear;
  animation: load8 .8s infinite linear;
}
@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
