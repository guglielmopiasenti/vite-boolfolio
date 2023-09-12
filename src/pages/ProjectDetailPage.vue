<script>
import ProjectCard from '../components/projects/ProjectCard.vue';
const apiBaseUri = 'http://127.0.0.1:8000/api/projects/';
import axios from 'axios';
export default {
  name: 'ProjectDetailPage',
  components: { ProjectCard },
  data: () => ({
    project: null,
  }),
  methods: {
    getProject() {
      const endpoint = `${apiBaseUri}${this.$route.params.id}`;
      axios.get(endpoint)
        .then(res => { this.project = res.data; })
        .catch(err => { console.error(err) });
    }
  },
  created() {
    this.getProject();
  }
}
</script>

<template>
  <h2>Project Details</h2>
  <ProjectCard v-if="project" :project="project" />
</template>
