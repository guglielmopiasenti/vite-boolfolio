<script>
import axios from 'axios';
const endpoint = 'http://localhost:8889/api/projects/';
import AppHeader from './components/AppHeader.vue';
export default {
  components: {AppHeader},
  data: () => ({projects: []}),
  methods:{
    fetchProjects(){
      axios.get(endpoint).then(res => {console.log(res.data)})
    }
  },
  created(){
    this.fetchProjects();
  }
};
</script>

<template>
  <AppHeader />
  <main class="container my-5">
    <ul>
      <li v-for="project in projects" :key="project.id">{{ project.name }}</li>
    </ul>
  </main>
</template>