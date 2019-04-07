<template>
  <div id="app" @focus="ready()"  @click="ready()">
    <h1>Richard Bettridge</h1>
    <div class="summary">
      <div class="">
        <h3 class="summary-header">History</h3>
        <ul>
          <li>Born 1983</li>
          <li>Living in Waterloo, Ontario, Canada</li>
          <li v-for="experience in yearExperience" :key="experience.description">
            <b>{{getYearsExperience(experience.yearStart, experience.yearEnd)}}</b>
            years {{experience.description}} <b>{{experience.where}}</b>
          </li>

          <li><b>2-time</b> prize winner of the <b>NASA</b> Space Apps</li>
          <li>Former <b>Linux Foundation</b> Systems Engineering Certification committee member</li>
          <li>Contributing <b>Internet Archive</b> member</li>
          <li><b>500,000+</b> Youtube Views</li>
          <li>Maintained productions services with over <b>100 million</b> users</li>
          <li><b>100,000+</b> downloads on Android and iOS</li>
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
      <div 
        class="item" 
        v-for="(link, index) in links" 
        :key="link.url" 
        @mouseenter.self="loadAudio(index)" 
        @mouseleave.self="stopAudio()"
      >
        <a :href="link.url" target="_blank" class="link">
          <div class="title">
            {{link.title}}
            <!-- <button @click="loadAudio(index)">Play</button> -->
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
import moment from 'moment';

export default {
  name: 'app',
  methods: {
    getYearsExperience(startYear, endYear = moment()){
      const years = moment(endYear, 'YYYY').diff(moment(startYear, 'YYYY'), 'years', true).toFixed(1);

      if (years.split('.')[1] == 0){
        return years.split('.')[0]
      } else {
        return years
      }
    },
    loadAudio(index){
      
      const newSrc = this.links[index].audio;

      if (this.waitAudio){
        return;
      }
      if (this.currentAudio.src == newSrc && !this.currentAudio.ended ){
        return
      }

      this.currentAudio.src = newSrc
      this.currentAudio.volume = 0.7;
      
      this.currentAudio.oncanplaythrough = () => {
        console.log(this.currentAudio.src)
        
        const playPromise = this.currentAudio.play();
        if (playPromise !== null){
            playPromise.catch(() => { this.currentAudio.play(); })
        }
      }
      
    },
    stopAudio(){
      if (this.waitAudio){
        return;
      }
      this.currentAudio.pause();
    },
    ready(){
      console.log('ready')
      this.currentAudio = new Audio();
      this.waitAudio = false;
    }
  },
  mounted(){
    
    setTimeout(() => {

    },1000)
  },
  data () {
    return {
      waitAudio: true,
      currentAudio: undefined,
      yearExperience:[
        {
          yearStart: 2005,
          yearEnd: 2015,
          description: 'experience working in distributed systems at',
          where: 'BlackBerry'
        },
        {
          yearStart: 2015,
          yearEnd: undefined,
          description: 'experience as an applications developer at',
          where: 'Vehikl'
        },
        {
          yearStart: 2013,
          yearEnd: undefined,
          description: 'experience working in',
          where: 'Unity and Virtual Reality'
        },
        {
          yearStart: 2017,
          yearEnd: 2019,
          description: 'experience working as senior developer at',
          where: 'CTRL V Virtual Reality Arcade'
        },              
      ],
      links: [
        {
          title: 'The Old Net',
          description: 'For the 30th anniversary of the Web, I created an application that lets you browse the old internet on modern and vintage computers.',
          url: 'http://theoldnet.com/browser',
          image: '/static/gif/theoldnet.gif',
          audio: '/static/audio/theoldnet.ogg',
        },
        {
          title: 'Game of Life',
          description: 'I made this to learn Cellular Automata. Made in HTML5 canvas and uses HSL color values to show cell age.',
          url: 'http://daggasoft.com/game-of-life',
          image: '/static/gif/cellular2.gif',
          audio: '/static/audio/cellular.ogg',
        },
        {
          title: 'I Love Automotive Tech',
          description: 'An incomplete set of videos for the vast amount of car tech projects I\'ve done',
          url: 'https://www.youtube.com/watch?v=7EtFuVoZgu4&list=PL3fIIFgD61Tm67tLSPC4t_ghn8S8YvB7y',
          image: '/static/cars.jpg',
          audio: '/static/audio/car.ogg',
        },
        {
          title: 'Commodore 64 Binary Screensaver',
          description: 'A screensaver for the c64 which reads the actual bytes in memory and prints them out on screen in a visually appealing way',
          url: 'https://www.youtube.com/watch?v=CRAjp1MIxXw&feature=youtu.be',
          image: '/static/gif/binary.gif',
          audio: '/static/audio/c64.ogg',
        },
        {
          title: 'Github Projects',
          description: 'You can get an idea of my interests from my github page but the majority of my work is in private repositories.',
          url: 'https://github.com/ssshake',
          image: '/static/github.png',
          audio: '/static/audio/github.ogg',
        },        
        {
          title: 'Manastorm VR',
          description: 'A Virtual Reality card game where you throw the cards to summon creatures into battle.',
          url: 'http://manastormgame.com',
          image: '/static/gif/manastorm.gif',
          audio: '/static/audio/manastorm.ogg',
        },
        {
          title: '@RichBettridge',
          description: 'Looking at my twitter media posts gives a good idea about my hobbies',
          url: 'https://twitter.com/RichBettridge/media',
          image: '/static/richbettridge-twitter.png',
          audio: '/static/audio/richbettridge.ogg',
        },
        {
          title: 'Peripheral',
          description: 'A soon to be released, first person, physics puzzle game. I\'m really proud of this game and am excited to release it.',
          url: 'http://peripheralgame.com/',
          image: '/static/gif/peripheral-s.gif',
          audio: '/static/audio/peripheral.ogg',
        },        
        {
          title: '@DaGGaSoft',
          description: 'Looking at my game developer twitter posts gives a good idea about my work',
          url: 'https://twitter.com/DaGGaSoft/media',
          image: '/static/daggasoft-twitter.png',
          audio: '/static/audio/daggasoft.ogg',
        },
        {
          title: 'Super Markup World',
          description: 'An award winning game, teaching javascript and css using native HTML',
          url: 'http://supermarkupworld.com',
          image: '/static/supermarkupworld.png',
          audio: '/static/audio/supermarkupworld.ogg',
        },
        {
          title: 'My Game Developer Blog',
          description: 'If you want to get a good idea of the type of work I do please head over to my blog',
          url: 'http://daggasoft.wordpress.com',
          image: '/static/daggasoft-wordpress.png',
          audio: '/static/audio/daggasoftblog.ogg',
        },
        {
          title: 'Vintage Computer Collection',
          description: 'I love collecting and playing with vintage computers, game consoles and other old technology',
          url: 'https://www.youtube.com/watch?v=VZ-MXqM5mYc&list=PL3fIIFgD61TlTzlaXIpAqfFBuz_-TFE8E',
          image: '/static/vintage2.png',
          audio: '/static/audio/vintage.ogg',
        },          
        {
          title: 'Game Website',
          description: 'You can see all of my games here from game jams / hackathons, experiments, retail releases and contract work',
          url: 'http://daggasoft.com',
          image: '/static/daggasoft.png',
          audio: '/static/audio/daggasoftcom.ogg',
        },
        {
          title: 'Computer Heritage Group',
          description: 'I am a co-founder of the Computer Heritage Group',
          url: 'http://computerheritagegroup.org',
          image: '/static/heritage.png',
          audio: '/static/audio/heritage.ogg',
        },        
        {
          title: 'Home Awesomation',
          description: 'If you want to see my electronic and software projects about home automation check out my projects here',
          url: 'http://homeawesomation.com',
          image: '/static/homeawesomation.png',
          audio: '/static/audio/homeawesomation.ogg',
        },
      ]
    }
  }
}
</script>

<style lang="scss">
#circle{
  width:100px;
  height:100px;
  background:#00cf8a;
  position:absolute;
  border-radius:50%;
}

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

b{
  color: rgb(87, 86, 86);
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
  border: 2px solid #71bccc;
  width: 350px;
  height: 300px;
}

.description {
  color: rgb(100, 100, 100);
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
    text-align: left;
    margin-left: 20px;
  }
}

ul {
  // max-width: 400px;
  text-align: left;
  line-height: 1.3;
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
