<template>
  <div id="app">
    <h1>Richard Bettridge</h1>
    <h2>Systems, Applications, Games, Electronics...</h2>
    <div class="container">
      <Card 
        v-for="(link) in filteredLinks" 
        :link="link" 
        :key="link.url" 
        v-on:load-audio="loadAudio(link)"
      >
      </Card>
    </div>
    <Summary :experiences="yearExperience"/>
    <footer>See this Project on <a href="https://github.com/ssshake/about-me" target="_blank">Github</a></footer>
  </div>
</template>

<script>
import Card from "./components/Card";
import Summary from "./components/Summary";

import experience from "./json/experience";
import projects from "./json/projects";

export default {
  name: "app",
  components: {
    Card,
    Summary
  },
  methods: {
    loadAudio(link) {
      const newSrc = link.audio;

      if (this.currentAudio.src == newSrc && !this.currentAudio.ended) {
        return;
      }

      this.currentAudio.src = newSrc;
      this.currentAudio.volume = 1;
      this.currentAudio.oncanplaythrough = () => {
        const playPromise = this.currentAudio.play();
        if (playPromise !== null) {
          playPromise.catch(() => {
            this.currentAudio.play();
          });
        }
      };
    },
    stopAudio() {
      this.currentAudio.pause();
    },
    ready() {
      this.currentAudio = new Audio();
    }
  },
  computed:{
      filteredLinks(){
          return this.links.filter((link) => {
              return !link.disabled;
          })
      }
  },
  mounted() {
    this.ready();
  },
  data() {
    return {
      waitAudio: true,
      currentAudio: undefined,
      yearExperience: experience,
      links: projects
    };
  }
};
</script>

<style lang="scss">
#circle {
  width: 100px;
  height: 100px;
  background: #00cf8a;
  position: absolute;
  border-radius: 50%;
}

body {
  background: linear-gradient(188deg, #a8fffd, #6480e6, #b8ffc0) no-repeat;
  margin: 0;
  padding: 0;
  min-height: 100vh;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  user-select: none;
}

b {
  color: rgb(87, 86, 86);
}

.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  text-align: left;
  line-height: 1.3;
}

a {
  color: #42b983;
}

.disabled {
  color: rgb(250, 24, 24);
}

.advert {
  background: #40404099;
  color: white;
  padding: 10px;
  border-radius: 0px;
  margin: 10px;
  display: inline-block;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .advert {
    display: none;
  }
}
</style>
