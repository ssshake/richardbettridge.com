<template>
  <div class="summary">
    <div class>
      <!-- <h3 class="summary-header">History</h3> -->
      <ul>
        <li>Born 1983</li>
        <li>Living in Waterloo, Ontario, Canada</li>
        <li v-for="experience in experiences" :key="experience.description">
          <b>{{getYearsExperience(experience.yearStart, experience.yearEnd)}}</b>
          years {{experience.description}}
          <a v-if="experience.link" target="_blank" :href="experience.link"><b>{{experience.where}}</b> <font-awesome-icon icon="link" class="link-icon"></font-awesome-icon></a>
          <b v-else>{{experience.where}}</b>
        </li>

        <li>
          <b>2-time</b> prize winner of the
          <b>NASA</b> <a target="_blank" href="https://spaceappsksc.tumblr.com/post/90398406564/winners-of-2014-kennedy-space-center-space-apps">Space Apps Challenge <font-awesome-icon icon="link" class="link-icon"></font-awesome-icon></a>
        </li>
        <li>
          Exam Developer for
          <b>The Linux Foundation</b> <a target="_blank" href="https://training.linuxfoundation.org/certification/linux-foundation-certified-engineer-lfce/?creative=407426262693&keyword=%2Blinux%20%2Bfoundation%20%2Bcertified%20%2Bengineer&matchtype=b&network=g&device=c&pi_ad_id=407426262693&gclid=EAIaIQobChMI-omZ-Jus5wIVysDACh3bBwodEAAYASAAEgJBcfD_BwE">Systems Engineering Certification <font-awesome-icon icon="link" class="link-icon"></font-awesome-icon></a>
        </li>
        <li>
          Contributing
          <b>Internet Archive</b> <a target="_blank" href="https://archive.org/details/@theoldnet">member <font-awesome-icon icon="link" class="link-icon"></font-awesome-icon></a>
        </li>
        <li>
          <b>500,000+</b> Youtube Views
        </li>
        <li>
          Maintained productions services with over
          <b>100 million</b> users
        </li>
        <li>
          <b>100,000+</b> downloads on Android and iOS
        </li>
      </ul>
    </div>
    <!-- <div class>
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
    </div> -->
    <!-- <div class>
      <h3 class="summary-header">I'm good at...</h3>
      <ul>
        <li>Adapting, picking up new skills</li>
        <li>Obsessing within reason</li>
        <li>Building game/app interactions</li>
        <li>Systems integration</li>
        <li>Researching things deep</li>
        <li>Running projects / working with clients</li>
      </ul>
    </div> -->
  </div>
</template>
<script>
import moment from "moment";
export default {
  name: "Summary",
  props: ["experiences"],
  methods: {
    getYearsExperience(startYear, endYear = moment()) {
      const years = moment(endYear, "YYYY")
        .diff(moment(startYear, "YYYY"), "years", true)
        .toFixed(0);

      if (years.split(".")[1] == 0) {
        return years.split(".")[0];
      } else {
        return years;
      }
    }
  }
};
</script>
<style lang="scss" scoped>

.link-icon {
    font-size: .75rem;
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

  li {
      padding: 10px;
  }

  ul {
      list-style-type:none;
      font-size: 1.25rem;
  }

  b {
      color: rgb(194, 58, 187);
  }

  a {
      color: rgb(87, 86, 86);
      text-decoration: none;
  }

  a:hover{
      text-decoration: underline;
  }

}
</style>
