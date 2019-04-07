<template>
  <div id="app">

<!-- 
6 years working in VR
6 years working in Unity.
6 years working as distributed systems engineer on a 100,000,000 user catalog of services.
4 years working in performance testing and QA for a fortune 500 company. 
3 years working as a senior software developer shipping dozens of high quality products. 
Shipped PC games on Steam
Shipped mobile games on Android and iOS with over 100,000 downloads.
Pending shipping of a game on Xbox
Over a half million youtube views of my personal projects. 
On the Systems Engineering Certification board for Linux
Back to Back 1st prize winner for NASA Space Apps, globally.
1st place winner for an international VR competition
Senior developer at a Virtual Reality Arcade with over a dozen locations across north america
Lead Unity developer on 3 independant simulator projects.
-->
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
	  <li>Vintage Computers</li>
	  <li>2 Door Cars</li>
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
		title: 'The Old Net',
		description: 'For the 30th anniversary of the Web, I created an application that lets you browse the old internet on modern and vintage computers.',
		url: 'http://theoldnet.com/browser',
		image: '/static/gif/theoldnet.gif',
	},
        {
          title: 'Game of Life',
          description: 'Cellular Automata with some pretty visuals',
          url: 'http://daggasoft.com/game-of-life',
          image: '/static/gif/cellular2.gif',
        },
        {
          title: 'I Love Car Technology',
          description: 'An incomplete set of videos for the vast amount of car tech projects I\'ve done',
          url: 'https://www.youtube.com/watch?v=7EtFuVoZgu4&list=PL3fIIFgD61Tm67tLSPC4t_ghn8S8YvB7y',
          image: '/static/cars.jpg',
        },
        {
          title: 'Commodore 64 Binary Screensaver',
          description: 'A screensaver for the c64 which reads the actual bytes in memory and prints them out on screen in a visually appealing way',
          url: 'https://www.youtube.com/watch?v=CRAjp1MIxXw&feature=youtu.be',
          image: '/static/gif/binary.gif',
        },
        {
          title: 'My Game Developer Blog',
          description: 'If you want to get a good idea of the type of work I do please head over to my blog',
          url: 'http://daggasoft.wordpress.com',
          image: '/static/daggasoft-wordpress.png',
        },
        {
          title: '@RichBettridge',
          description: 'Looking at my twitter media posts gives a good idea about my hobbies',
          url: 'https://twitter.com/RichBettridge/media',
          image: '/static/richbettridge-twitter.png',
        },
        {
          title: '@DaGGaSoft',
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
          url: 'https://github.com/ssshake',
          image: '/static/github.png',
        },
        {
          title: 'Manastorm VR',
          description: 'A Virtual Reality card game where you throw the cards to summon creatures.',
          url: 'http://manastormgame.com',
          image: '/static/gif/manastorm.gif',
        },
        {
          title: 'Peripheral',
          description: 'A soon to be released, first person, physics puzzle game. I\'m really proud of this game and am excited to release it.',
          url: 'http://peripheralgame.com/',
          image: '/static/gif/peripheral.gif',
        },
        {
          title: 'Super Markup World',
          description: 'An award winning game, teaching javascript and css using native HTML',
          url: 'http://supermarkupworld.com',
          image: '/static/supermarkupworld.png',
        },
        {
          title: 'Computer Heritage Group',
          description: 'I am a co-founder of the Computer Heritage Group',
          url: 'http://computerheritagegroup.org',
          image: '/static/heritage.png',
        },
        {
          title: 'Vintage Computer Collection',
          description: 'I love collecting and playing with vintage computers, game consoles and other old technology',
          url: 'https://www.youtube.com/watch?v=VZ-MXqM5mYc&list=PL3fIIFgD61TlTzlaXIpAqfFBuz_-TFE8E',
          image: '/static/vintage2.png',
        },
      ]
    }
  }
}
</script>

<style lang="scss">

body {
  //background: linear-gradient(#9198e5, #e66465) no-repeat;
  //background: linear-gradient(130deg,#ffffff,#6480e6) no-repeat;
  //background: linear-gradient(159deg,#ffffff,#6480e6,#b8ffc0) no-repeat;
  background: linear-gradient(188deg,#ffffff,#6480e6,#b8ffc0) no-repeat;
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
    width: 360px;
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
  min-height: 60px;
  text-align:left;
}

.title {
  font-weight: 500;
  font-size: 1.1rem;
  background: linear-gradient(363deg,#deecff,#d0f3f1) no-repeat;
  box-shadow: 2px 2px 2px #ddd;
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
