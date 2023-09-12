<script>
import axios from 'axios';
import ProjectList from '../projects/ProjectList.vue';
const endpoint = 'http://127.0.0.1:8000/api/projects/';
export default {
  name: 'HomePage',
  components: { ProjectList},
  data: () => ({ projects: [] }),
  methods: {
    fetchProjects() {
      axios.get(endpoint).then(res => {
        this.projects = res.data
      })

    }
  },
  created() {
    this.fetchProjects();
  }
}
</script>

<template>
   <ProjectList :projects="projects"/>
</template>