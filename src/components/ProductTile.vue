<template>
  <div id="tile">


    <div class="flipper">
      <div class="front">
        <h4 v-text="product.offering.name"></h4>
        <p v-if="product.subscriptionStatus === 'ACTIVE'">Active<span class="more-info" v-on:click="flipCard">More info</span></p>
        <p v-else>Expired<span class="more-info" v-on:click="flipCard">More info</span></p>
        <button>Download</button>
        <button>Manage</button>
      </div>
      <div class="back">
        <p><span v-on:click="flipCard" class="glyphicon glyphicon-chevron-left backBtn"></span><p>
        <p class="back-info" v-if="product.offering.description" v-text="product.offering.description"></p>
        <p class="back-info" v-else v-text="product.offering.name"></p>
      </div>
    </div>
  </div>
</template>

<script>


  export default {
    name: "ProductTile",
      data () {
        return {
          
        }
      },
      props: ["product"],
      methods: {
        flipCard: function(e) {
          var flipper = e.target.parentNode.parentNode.parentNode;

          if (e.target.classList.contains("more-info")) {
              flipper.classList.add("flip");
          } else {
              flipper.classList.remove("flip");
          }
        }
      },
      computed: {
        
      }
  }
  
var isTrue = true;
</script>

<style scoped>
#tile {
  height: 200px;
  margin-bottom: 30px;
  border: 1px solid lightgray;
  border-top: 5px solid #4178be;
}

.green {
  color: green;
}

.red {
  color: red;
}

#tile h4 {
  height: 50%;
  padding: 15px;
  text-align: left;
}

p {
  text-align: left;
  padding: 0 15px;
}

span {
  float: right;
  color: #4178BE;
  font-weight: bold;
}

button {
  width: calc(50% - 15px);
  font-weight: bold;
  color: white;
  background-color: #4178BE;
  border-color: #4178BE;
  border-style: none;
  padding: 10px 20px 12px;
}

.more-info, .backBtn {
  cursor: pointer;
}

.backBtn {
  float: left;
  margin: 10px;
}

.flipper {
  -moz-backface-visibility: hidden;
  -webkit-transition: 0.6s;
  -webkit-transform-style: preserve-3d;
  -moz-transition: 0.6s;
  -moz-transform-style: preserve-3d;
  -o-transition: 0.6s;
  -o-transform-style: preserve-3d;
  transition: 0.6s;
  transform-style: preserve-3d;
  position: relative;
  height: 100%;
}
.front, .back {
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.front {
  z-index: 2;
}

.back {
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  transform: rotateY(180deg);
}

.back .back-info {
  color: black;
  position: absolute;
  top: 50%;
  width: 100%;
  font-size: 13px;
  transform: translateY(-40%);
  text-align: center;
  padding: 0 20px;
  font-family: arial;
  line-height: 1.35em;
}
.flip {
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  transform: rotateY(180deg);
}
</style>
