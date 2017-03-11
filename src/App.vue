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
            <a href="/"><span class="glyphicon glyphicon-th"></span></a>
            <a href="/#/list"><span class="glyphicon glyphicon-th-list"></span></a>
          </section>
        </section>
    </section>
    <section class="container">
      <router-view :sortOrder="sortOrder" :products="products" :filterText="filterText"></router-view>
    </section>
  </div>
</template>

<script>
import { mapActions } from "vuex"
export default {
  name: 'app',
  data () {
    return {
      filterText: "",
      sortOrder: "Sort by title",
      sortOptions: ["Sort by title", "Sort by date added", "Sort by expiration date"]
    }
  },
  mounted:function(){
        this.getProducts();
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

</style>
