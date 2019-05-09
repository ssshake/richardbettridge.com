<template>
  <div class="item">
    <div class="title">
      <div v-if="link.audio" @click="loadAudio()" class="audio-button" title="Audio Commentary">
        <font-awesome-icon icon="volume-up" class="audio-icon"></font-awesome-icon>
      </div>
      <a :href="link.url" target="_blank" class="link">{{link.title}}</a>
    </div>
    <div class="description">{{link.description}}</div>
    <a :href="link.url" target="_blank" class="link">
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
    </a>
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
.item {
  background: #fff;
  border: 3px solid white;
  margin: 20px;
  padding: 5px;
  transition: border 300ms ease;
  width: 360px;
  user-select: none;
}

.item:hover {
  border: 3px solid rgb(130, 226, 106);
  transition: all 300ms ease;
  background: rgb(244, 255, 241);
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
  border: 2px solid #71bccc;
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
  color: rgb(100, 100, 100);
  padding: 10px;
  max-width: 350px;
  min-height: 60px;
  text-align: left;
}

.title {
  font-weight: 500;
  font-size: 1.1rem;
  background: linear-gradient(363deg, #deecff, #d0f3f1) no-repeat;
  box-shadow: 2px 2px 2px #ddd;
  color: rgb(49, 50, 47);
  padding: 10px;
}

.title > a {
  color: inherit;
}

.title > a:hover {
  color: inherit;
  text-decoration: underline;
}
</style>