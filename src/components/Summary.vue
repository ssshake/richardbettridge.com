<template>
  <div class="summary">
    <div class>
      <!-- <h3 class="summary-header">History</h3> -->
      <ul>
        <li>Deploy Date: 1983</li>
        <li v-for="experience in experiences" :key="experience.description">
            <a v-if="experience.link" target="_blank" :href="experience.link">
                <b>{{getYearsExperience(experience.yearStart, experience.yearEnd)}}</b>
                years {{experience.description}}
                <b>{{experience.where}}</b> 
                <font-awesome-icon icon="link" class="link-icon"></font-awesome-icon>
            </a>
            <div v-else>
                <b>{{getYearsExperience(experience.yearStart, experience.yearEnd)}}</b>
                years {{experience.description}}
                <b>{{experience.where}}</b> 
            </div>
        </li>

        <li>
            <a target="_blank" href="https://spaceappsksc.tumblr.com/post/90398406564/winners-of-2014-kennedy-space-center-space-apps">
                <b>2-time</b> prize winner of the
                <b>NASA</b> Space Apps Challenge 
                <font-awesome-icon icon="link" class="link-icon"></font-awesome-icon>
            </a>
        </li>
        <li>
            <a target="_blank" href="https://training.linuxfoundation.org/certification/linux-foundation-certified-engineer-lfce/?creative=407426262693&keyword=%2Blinux%20%2Bfoundation%20%2Bcertified%20%2Bengineer&matchtype=b&network=g&device=c&pi_ad_id=407426262693&gclid=EAIaIQobChMI-omZ-Jus5wIVysDACh3bBwodEAAYASAAEgJBcfD_BwE">
                Exam Developer for
                <b>The Linux Foundation</b> Systems Engineering Certification 
                <font-awesome-icon icon="link" class="link-icon"></font-awesome-icon>
            </a>
        </li>
        <li>
            <a target="_blank" href="https://archive.org/details/@theoldnet">
                Contributing
                <b>Internet Archive</b> member <font-awesome-icon icon="link" class="link-icon"></font-awesome-icon>
            </a>
        </li>
        <li>
          <b>Built</b> and <b>Supported</b> production services with over
          <b>100 million</b> users
        </li>        
        <li>
          <b>500,000+</b> Youtube Views
        </li>
        <li>
          <b>100,000+</b> downloads on Android and iOS
        </li>
      </ul>
    </div>
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
      padding-left: 0;
  }

  b {
      color: rgb(194, 58, 187);
  }

  a {
      color: #2c3e50;
      text-decoration: none;
  }

  a:hover{
      text-decoration: underline;
  }

}
</style>
