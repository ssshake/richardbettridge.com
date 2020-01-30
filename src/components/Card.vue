<template>
  <div class="item">
    <div class="absolute-container">
        <div class="hover-container">
                <a :href="link.url" target="_blank" class="link">
                    <div class="description">{{link.description}}</div>
                    <!-- <font-awesome-icon icon="share-square" class="share-icon"></font-awesome-icon> -->
                </a>
        </div>
        <div class="title">
            <div v-if="link.audio" @click="loadAudio()" class="audio-button" title="Audio Commentary">
                <font-awesome-icon icon="volume-up" class="audio-icon"></font-awesome-icon>
            </div>
            <a :href="link.url" target="_blank" class="link">{{link.title}}</a>
        </div>
    </div>
      <div class="image">
        <img v-if="link.imgObj" v-lazy="link.imgObj">
        <vue-displacement-slideshow 
        v-else-if="link.slideshow"
        :images="link.slideshowImages"
        displacement="/static/displacement.png"
        :intensity.number="0.2"
        :speedIn.number="1.4"
        :speedOut.number="1.4"
        ease="Expo.easeInOut"
        ref="slideshow"></vue-displacement-slideshow>
        <img v-else :src="link.image" alt>
      </div>
  </div>
</template>
<script>
import VueDisplacementSlideshow from "vue-displacement-slideshow";
export default {
  name: "Card",
  components: {
    VueDisplacementSlideshow,
  },
  props: ["link"],
  methods: {
    loadAudio() {
      this.$emit("load-audio");
    }
  },
  mounted(){
      if (this.link.slideshow){
        setInterval(() => {
            this.$refs.slideshow.next();
        }, 6000);
      }
  }
};
</script>
<style lang="scss">
.audio-icon:hover {
  transition: color 0.25s ease-in-out;
  color: rgb(205, 157, 250);
}

.audio-icon {
  color: #09ff00;
  transition: color 0.25s ease-in-out;
}

.share-icon {
    font-size: 4rem;
    color: rgba(0, 0, 0, 0.466);
}

.item {
    position: relative;
//   background: #fff;
//   border: 3px solid white;
  margin: 16px;
//   padding: 5px;
//   transition: border 300ms ease;
//   width: 360px;
//   user-select: none;
}

.item:hover {
//   border: 3px solid rgb(130, 226, 106);
//   transition: all 300ms ease;
//   background: rgb(244, 255, 241);
}

.link {
  text-decoration: none;
}

.image > img {
  //   width: 350px;
  height: 300px;
  position: absolute;
}

.image {
  background: rgb(44, 44, 44);
//   background: white;
//   border: 2px solid #71bccc;
  width: 350px;
  height: 300px;
  // margin: 0 auto;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.description {
  color: #ebebeb;
  background: rgba(0, 0, 0, 0.774);
  padding: 10px;
//   max-width: 350px;
//   min-height: 60px;
  text-align: left;
  

  flex: 1;
//   height: 100%;

  
}

.absolute-container{
    position: absolute;
    z-index: 100;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.hover-container{
  flex: 1;
  opacity: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
//   background-color: blue;
  transition: opacity .1s ease-in;
}

.hover-container:hover{
    opacity: 1;
}

.title {
  font-weight: 500;
  z-index: 100;
  font-size: 1.1rem;
  font-weight: bold;
  background: rgba(0, 0, 0, 0.774);
//   box-shadow: 2px 2px 2px #ddd;
  color: rgb(207, 207, 207);
  padding: 10px;
    bottom: 0;
    left: 0;
    right: 0;
}

.title > a {
  color: inherit;
}

.title > a:hover {
  color: inherit;
  text-decoration: underline;
}
</style>