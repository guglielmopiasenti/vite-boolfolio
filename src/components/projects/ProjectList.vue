<script>
import ProjectCard from './ProjectCard.vue';
export default {
  name: 'ProjectList',
  components: { ProjectCard},
  props: {projects: Object}
}
</script>


<template>
  <section id="project-list">
    <h2>These are some of my projects</h2>
    <div v-if="projects.length">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project"/>
    </div>
    <h3 v-else class="text-center"> There are no projects </h3>
  </section>
</template>