<template>
  <div class="item">
    <div class="absolute-container">
      <div class="hover-container">
        <a :href="link.url" target="_blank" class="link">
          <div class="description">{{ link.description }}</div>
        </a>
      </div>
      <div class="title">
        <div
          v-if="link.audio"
          @click="loadAudio()"
          class="audio-button"
          title="Audio Commentary"
        >
          <font-awesome-icon
            icon="volume-up"
            class="audio-icon"
          ></font-awesome-icon>
        </div>
        <a :href="link.url" target="_blank" class="link">{{ link.title }}</a>
        <a :href="link.url" target="_blank" class="link">
          <font-awesome-icon class="link-icon" icon="link"></font-awesome-icon
        ></a>
      </div>
    </div>
    <div class="image">
      <img v-if="link.imgObj" v-lazy="link.imgObj" />
      <vue-displacement-slideshow
        v-else-if="link.slideshow"
        :images="link.slideshowImages"
        displacement="/static/displacement.png"
        :intensity.number="0.2"
        :speedIn.number="1.4"
        :speedOut.number="1.4"
        ease="Expo.easeInOut"
        ref="slideshow"
      ></vue-displacement-slideshow>
      <img v-else :src="link.image" alt />
    </div>
  </div>
</template>
<script>
import VueDisplacementSlideshow from "vue-displacement-slideshow";
export default {
  name: "Card",
  components: {
    VueDisplacementSlideshow
  },
  props: ["link"],
  methods: {
    loadAudio() {
      this.$emit("load-audio");
    }
  },
  mounted() {
    if (this.link.slideshow) {
      setInterval(() => {
        this.$refs.slideshow.next();
      }, 6000);
    }
  }
};
</script>
<style lang="scss">
.audio-button {
  //   float: left;
  //   margin-right: -20px;
  cursor: pointer;
}

.audio-icon:hover {
  transition: color 0.15s ease-in-out;
  color: rgb(229, 100, 255);   
}

.audio-icon {
  color: #09ff00;
  transition: color 0.15s ease-in-out;
}

.link-icon {
    color: rgb(158, 158, 158);
}

.link-icon:hover {
  transition: color 0.15s ease-in-out;
  color: rgb(229, 100, 255);   
}

.item {
  position: relative;
  margin: 20px;
}

.link {
  text-decoration: none;
}

.image > img {
  height: 300px;
  position: absolute;
}

.image {
  background: rgb(44, 44, 44);
  width: 350px;
  height: 300px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.description {
  color: #ebebeb;
  background: rgba(0, 0, 0, 0.849);
  padding: 10px;
  font-weight: bold;
  padding: 16px;
  text-align: left;

  flex: 1;
}

.absolute-container {
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

.hover-container {
  flex: 1;
  opacity: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  transition: opacity 0.1s ease-in;
}

.hover-container:hover {
  opacity: 1;
}

.title {
  font-weight: 500;
  z-index: 100;
  font-size: 1.1rem;
  font-weight: bold;
  background: rgba(0, 0, 0, 0.774);
  color: rgb(207, 207, 207);
  padding: 16px;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
}

.title > a {
  color: inherit;
}

.title > a:hover {
  color: inherit;
  text-decoration: underline;
}
</style>
