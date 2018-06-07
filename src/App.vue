<template>
  <div id="app">
    <h1>Richard Bettridge</h1>
    <div class="contact-info">
      <div><a href="http://richard.bettridge.ca" target="_blank">Richard.Bettridge.ca</a></div>
      <div><a href="mailto:richard@bettridge.ca">Richard@Bettridge.ca</a></div>
      <div><a href="https://twitter.com/richbettridge?lang=en" target="_blank">@RichBettridge</a></div>
    </div>
    <div class="summary">
      <div class="">
        <h2 class="summary-header">History</h2>
        <ul>
          <li>Born 1983</li>
          <li>Living in Waterloo, Ontario, Canada</li>
          <li><b>10</b> years working in distributed systems at BlackBerry</li>
          <li><b>3</b> Years Experience as an applications developer at Vehikl</li>
          <li><b>5</b> Years experience working in Unity and Virtual Reality</li>
          <li><b>1</b> Year  as senior developer at CTRL V Virtual Reality Arcade</li>
        </ul>
      </div>
      <div class="">
        <h2 class="summary-header">Interests</h2>
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
        <h2 class="summary-header">I'm good at...</h2>
        <ul>
          <li>Adapting, picking up new skills</li>
          <li>Obsessing within reason</li>
          <li>Building game/app interactions</li>
          <li>Systems integration</li>
          <li>Researching things</li>
          <li>Running projects / working with clients</li>
          <li>Magic Eye Puzzles</li>
        </ul>
      </div>
    </div>
    <h2 class="me-online">Me, Online</h2>
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
    <div class="footer">This portfolio website was not made from a template</div>
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
          title: 'Game Dev Youtube Channel',
          description: 'You can read about or play my games in the other links here, but why not check out the videos?',
          url: 'https://www.youtube.com/channel/UCCcWmseNVMK0maZE11z_gfw/videos',
          image: '/static/daggasoft-youtube.png',
        },
        {
          title: 'Peripheral Game',
          description: 'A soon to be release, first person, physics puzzle game. I\'m really proud of this game and am excited to release it.',
          url: 'https://peripheralgame.com',
          image: '/static/peripheral.png',
        },
        {
          title: 'Manastorm VR Game',
          description: 'My first successful retail release of a VR game. A unique VR take on magic/hearth stone. Unfinished due to no budget.',
          url: 'http://manastormgame.com',
          image: '/static/manastorm.png',
        },
        {
          title: 'Game Website',
          description: 'You can see all of my games here from game jams / hackathons, experiments, retail releases and contract work.',
          url: 'http://daggasoft.com',
          image: '/static/daggasoft.png',
        },
        {
          title: 'Home Automation Youtube Channel',
          description: 'On my home automation channel I do everything from showing custom hardware projects to product reviews.',
          url: 'https://www.youtube.com/user/TekNSchtuff/videos',
          image: '/static/homeawesomation-youtube.png',
        },
        {
          title: 'A good example of me',
          description: 'This video is just a good example of how I think about and do things. I break down my 3D printed VR mount.',
          url: 'https://www.youtube.com/watch?v=Z4592DF0pSc',
          image: '/static/vryt.png',
        },
        {
          title: 'Home Automation Blog',
          description: 'If you want to see my home automation and other projects in action check out my posts and media here.',
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
          title: '90\'s Styled Links Site',
          description: 'This is my just for fun, mess around site. I wanted an eye sore 90\'s era website to call my own. Many easter eggs.',
          url: 'http://demlinks.com',
          image: '/static/demlinks.png',
        },
        {
          title: 'Star Trek VR Game',
          description: 'I\'m a Star Trek nerd and I made what I think is a pretty impressive VR shuttle craft demo. Lots of good things to see.',
          url: 'https://daggasoft.com/#/games/vrtrek',
          image: '/static/startrek.png',
        },
        {
          title: 'My Gists',
          description: 'Some useful gists that come in handy on occasion. Some are copied and some are original.',
          url: 'https://gist.github.com/ssshake',
          image: '/static/gist.png',
        },
        {
          title: 'Linked In',
          description: 'You\'ve made it this far, when not check out my linked in profile? It has like, career history and stuff.',
          url: 'https://www.linkedin.com/in/rbettridge/',
          image: '/static/linkedin.png',
        },
      ]
    }
  }
}
</script>

<style lang="scss">

@media print {
  .item{
    display: block !important;
    page-break-before: always !important; 
    page-break-inside: avoid;
    }
    .container {
      display: block !important;
    }
    .image {
      width: 100% !important;
    }
    .me-online{
      display: none;
    }
    .footer {
      display: none;
    }
    .contact-info {
      display: block !important;
    }

}

body {
  background: linear-gradient(160deg, #9198e5, #64e684) no-repeat;
  // background: linear-gradient(#9198e5, #72e664) no-repeat;
  // background: linear-gradient(#9198e5, #e66465) no-repeat;
  margin: 0;
  padding: 0;
  // min-height: 100vh;
}


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.contact-info {
  display: none;
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
    box-shadow: 2px 2px 2px rgb(126, 126, 126);
    border-radius: 2px;

}


.item:hover{
  border: 3px solid rgb(130, 226, 106);
  transition: all 300ms ease;
  background: rgb(244, 255, 241);
}

.link {
  text-decoration: none;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.image {

  width: 750px;
  height: 575px;
  @media only screen and (max-width: 1635px) {
    width: 350px;
    height: 275px;
  }

  overflow-y: hidden;
  margin-bottom: 10px;
  // border: 2px solid rgb(204, 162, 113);
  // border: 2px solid rgb(170, 113, 204);
}
.image > img {
  width: 100%;
  height: auto;
}

.description {
  color: rgb(64, 64, 64);
  padding: 10px;
  max-width: 350px;
  padding: 20px 0;
  // margin: 20px 0;
  // border-top: 1px solid rgb(203, 203, 203);
  // border-bottom: 1px solid rgb(203, 203, 203);
}

.title {
  font-weight: 500;
  font-size: 1rem;
  color: rgb(49, 50, 47);
  padding: 10px;

  background: rgb(184, 216, 255);
  width: 100%;
  box-shadow: 2px 2px 2px rgb(152, 152, 152);
  border-radius: 2px;
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

.footer {
  margin-top: 15px;
  margin-bottom: 30px;
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
  color: black;
}
</style>
