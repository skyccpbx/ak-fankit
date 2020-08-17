<template>
  <section class="uk-container uk-container-xlarge container">
    <ul class="uk-child-width-1-2 uk-child-width-1-3@l uk-text-center game-pic" uk-grid>
      <li class="uk-transition-toggle" v-for="(item,index) in list" :key="index">
        <a class="uk-transition-scale-up uk-transition-opaque" href="#modal-center" uk-toggle>
          <img class="uk-hidden-touch" :data-src="require('../assets/00' + index + '.jpg')" uk-img />
          <img class="uk-hidden-notouch" :data-src="require('../assets/00' + index + '-m.jpg')" uk-img />
        </a>
      </li>
    </ul>
    <!-- modal-center -->
    <div id="modal-center" class="uk-flex-top uk-text-center" uk-modal>
      <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
        <a class="uk-modal-close-default">
          <img src="../assets/xx-btn.png" uk-img />
        </a>

        <div class="img-list">
          <ul class="uk-list uk-child-width-1-3 uk-child-width-1-4@l overflow-auto" uk-grid uk-overflow-auto>
            <li class="uk-animation-toggle" v-for="(item,index) in 16" :key="index">
              <a class="uk-animation-slide-bottom-small" :href="require('../assets/stickers/' + index + '.png')" target="_blank">
                <img :data-src="require('../assets/stickers/' + index + '.png')" uk-img />
              </a>
            </li>
          </ul>
        </div>
        <div class="down-btn">
          <a href="https://rescdn.imtxwy.com/ak/stickers/down/stickers01.zip">
            <img src="../assets/down-btn.png" uk-img />
          </a>
        </div>
      </div>
    </div>
    <!-- modal-center -->
  </section>
</template>


<script>
export default {
  name: 'Stickers',
  data() {
    return {
      list: 6,
      //Imgsrc: require("../ assets / 00" + index + ".jpg"),
    }
  },
  created() {
    // for (var i = 0; i <= this.list; i++) {
    //   this.Imgsrc = require("../assets/00" + i + ".jpg");
    //   console.log(this.Imgsrc);
    // }



  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  margin: 3% auto;
  min-height: 42.3vh;
}
.game-pic li a {
  text-decoration: none;
  display: inline-block;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.28);
}
.uk-grid > * {
  padding-left: 2.65%;
}
.uk-grid {
  margin-left: -2.65%;
}
.uk-modal-dialog {
  background: url(../assets/mod-bg.jpg) no-repeat 50% 0;
  background-size: cover;
  width: calc(80% - 0.01px) !important;
  max-width: 1160px !important;
  height: 100%;
  max-height: 760px;
}
[class*="uk-modal-close-"] {
  position: absolute;
  z-index: 1010;
  top: -4px;
  right: -4px;
  padding: 0;
  max-width: 10%;
}
.uk-modal-body {
  display: flow-root;
}
.down-btn {
  border-top: 0.15rem dashed #717374;
  margin: 0 -2.7%;
  padding: 3% 0 1% 0;
}
.down-btn a {
  display: inline-block;
  max-width: 26%;
}
.img-list {
  padding: 3%;
  padding-top: 1%;
  height: 76%;
}
.img-list a {
  text-decoration: none;
  display: inline-block;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.28);
  background: #fff;
}
.uk-list > :nth-child(n + 2) {
  margin-top: 2.65%;
}
.img-list li {
  margin-top: 2.65%;
}
.overflow-auto {
  max-height: 100% !important;
}
::-webkit-scrollbar {
  width: 0.25em;
  height: 0.25em;
}

::-webkit-scrollbar-track {
  border-radius: 0.25em;
  background-color: #666;
}

::-webkit-scrollbar-thumb {
  background-color: #03a9f4;
  border-radius: 0.25em;
}
@media (max-width: 1024px) {
  .container {
    margin: 6% auto;
    min-height: 50vh;
  }
  * + .uk-grid-margin,
  .uk-grid + .uk-grid,
  .uk-grid > .uk-grid-margin {
    margin-top: 3%;
  }
  .uk-grid > * {
    padding-left: 3%;
  }
  .uk-grid {
    margin-left: -3%;
  }
  .uk-modal-dialog {
    background: url(../assets/mod-bg.jpg) no-repeat 50% 0;
    background-size: cover;
    width: calc(100% - 0.01px) !important;
    max-width: 1160px !important;
    height: 100%;
    max-height: 460px;
  }
  .down-btn a {
    display: inline-block;
    max-width: 50%;
  }
  .uk-modal-body {
    padding: 8% 3% 5%;
  }
  .img-list {
    padding: 2%;
    padding-top: 3%;
    padding-bottom: 8%;
    height: 75%;
  }
  .uk-animation-slide-bottom-small {
    -webkit-animation-name: inherit;
    animation-name: inherit;
  }
}
</style>
