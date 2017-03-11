<template>
  <div id="list-item">
      <section class="col-md-7 text-left">
        <h4 v-text="product.offering.name"></h4>
        <p v-if="product.subscriptionStatus === 'ACTIVE'">Active</p>
        <p class="" v-else>Expired</p>
      </section>
      <section class="col-md-5 btn-container">
        <button class="cta">Download</button>
        <button class="cta">Manage</button>
      </section>
    </section>
  </div>
</template>

<script>
  export default {
    name: "ProductListItem",
      data () {
        return {
          
        }
      },
      props: ["product"]
  }
  
var isTrue = true;
</script>

<style scoped>
  #list-item {
    border-bottom: 1px solid lightgray;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 15px;
  }
  .btn-container {
    display: flex;
    justify-content: space-between;
  }
  h4 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .cta {
    width: calc(50% - 2px);
    font-weight: bold;
    color: white;
    background-color: #4178BE;
    border-color: #4178BE;
    border-style: none;
    padding: 10px;
  }
  .cta:not(:first-child) {
    background-color: white;
    color: #4178BE;
    border: 2px solid #4178BE;
  }
</style>
