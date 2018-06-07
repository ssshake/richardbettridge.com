<template>
  <div id="app">
    <h1>Richard Bettridge</h1>
    <div class="summary">
      <div class="">
        <h3 class="summary-header">History</h3>
        <ul>
          <li>Born 1983</li>
          <li>Living in Waterloo, Ontario, Canada</li>
          <li><b>10</b> years working in distributed systems at BlackBerry</li>
          <li><b>4</b> Years Experience as an applications developer at Vehikl</li>
          <li><b>5</b> Years experience working in Unity and Virtual Reality</li>
          <li><b>1</b> Year experience working as senior developer at CTRL V Virtual Reality Arcade</li>
        </ul>
      </div>
      <div class="">
        <h3 class="summary-header">Interests</h3>
        <ul>
          <li>Game and VR Dev!</li>
          <li>Web application development</li>
          <li>Home automation</li>
          <li>3D printing / fabricating</li>
          <li>Video games and game collecting</li>
          <li>Linux!</li>
        </ul>
      </div>
      <div class="">
        <h3 class="summary-header">I'm good at...</h3>
        <ul>
          <li>Adapting, picking up new skills</li>
          <li>Obsessing within reason</li>
          <li>Building game/app interactions</li>
          <li>Systems integration</li>
          <li>Researching things deep</li>
          <li>Running projects / working with clients</li>
        </ul>
      </div>
    </div>
    <h2>Me, Online</h2>
    <div class="container">
      <div class="item" v-for="link in links">
        <a :href="link.url" target="_blank" class="link">
          <div class="title">
            {{link.title}}
          </div>
          <div class="description">
            {{link.description}}
          </div>
          <div class="image">
            <img :src="link.image" alt="">
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      links: [
        {
          title: 'My Game Developer Blog',
          description: 'If you want to get a good idea of the type of work I do please head over to my blog',
          url: 'http://daggasoft.wordpress.com',
          image: '/static/daggasoft-wordpress.png',
        },
        {
          title: 'Twitter Media - Richard Bettridge',
          description: 'Looking at my twitter media posts gives a good idea about my hobbies',
          url: 'https://twitter.com/RichBettridge/media',
          image: '/static/richbettridge-twitter.png',
        },
        {
          title: 'Twitter Media - DaGGaSoft',
          description: 'Looking at my game developer twitter posts gives a good idea about my work',
          url: 'https://twitter.com/DaGGaSoft/media',
          image: '/static/daggasoft-twitter.png',
        },
        {
          title: 'Game Website',
          description: 'You can see all of my games here from game jams / hackathons, experiments, retail releases and contract work',
          url: 'http://daggasoft.com',
          image: '/static/daggasoft.png',
        },
        {
          title: 'Home Awesomation',
          description: 'If you want to see my electronic and software projects about home automation check out my projects here',
          url: 'http://homeawesomation.com',
          image: '/static/homeawesomation.png',
        },
        {
          title: 'Github Projects',
          description: 'You can get an idea of my interests from my github page but the majority of my work is in private repositories.',
          url: 'https://github.com/ssshake?tab=repositories',
          image: '/static/github.png',
        },
        {
          title: 'Manastorm VR',
          description: 'My first successful retail release of a VR game',
          url: 'http://manastormgame.com',
          image: '/static/manastorm.png',
        },
      ]
    }
  }
}
</script>

<style lang="scss">

body {
  background: linear-gradient(#9198e5, #e66465) no-repeat;
  margin: 0;
  padding: 0;
  min-height: 100vh;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.item {
    background: #fff;
    border: 3px solid white;
    margin: 20px;
    padding: 5px;
    transition: border 300ms ease;
}

.item:hover{
  border: 3px solid rgb(130, 226, 106);
  transition: all 300ms ease;
  background: rgb(244, 255, 241);
}

.link {
  text-decoration: none;
}

.image > img {
  border: 2px solid rgb(170, 113, 204);
  width: 350px;
  height: 300px;
}

.description {
  color: rgb(64, 64, 64);
  padding: 10px;
  max-width: 350px;
}

.title {
  font-weight: 500;
  font-size: 1rem;
  color: rgb(49, 50, 47);
  padding: 10px;
}

h1, h2 {
  font-weight: normal;
}

.summary {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 20px;

  &-header {
    // text-align: left;
  }
}

ul {
  // max-width: 400px;
  text-align: left;
}
// ul {
//   list-style-type: none;
//   padding: 0;
// }
//
// li {
//   display: inline-block;
//   margin: 0 10px;
// }

a {
  color: #42b983;
}
</style>
