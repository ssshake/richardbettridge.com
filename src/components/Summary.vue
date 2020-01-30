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
          <b>{{experience.where}}</b>
        </li>

        <li>
          <b>2-time</b> prize winner of the
          <b>NASA</b> Space Apps Challenge
        </li>
        <li>
          Exam Developer for
          <b>The Linux Foundation</b> Systems Engineering Certification
        </li>
        <li>
          Contributing
          <b>Internet Archive</b> member
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
        .toFixed(1);

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
}
</style>
