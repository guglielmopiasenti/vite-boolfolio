<script>
import ProjectCard from './ProjectCard.vue';
export default {
  name: 'ProjectList',
  components: { ProjectCard },
  props: { projects: Object }
}
</script>


<template>
  <section id="project-list">

    <div class="jumbotron p-5 mb-4 bg-light rounded-3">
      <div class="container py-5">
        <h1 class="fw-bold text-center">
          Hello, these are some of my projects
        </h1>
      </div>
    </div>
    <div v-if="projects.length">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
    <h3 v-else class="text-center"> There are no projects </h3>
  </section>
</template>

<style>
h1 {
  font-size: 60px;
  background: -webkit-linear-gradient(#eee, #327305);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

body {
  background-size: 100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%;
  background-position: 0px 0px, 0px 0px, 0px 0px, 0px 0px, 0px 0px, 0px 0px, 0px 0px, 0px 0px, 0px 0px, 0px 0px, 0px 0px;
  background-image:
    radial-gradient(18% 28% at 24% 50%, #006600FF 7%, #00330000 100%),
    radial-gradient(18% 28% at 18% 71%, #66660059 6%, #00330000 100%),
    radial-gradient(70% 53% at 36% 76%, #004400FF 0%, #00330000 100%),
    radial-gradient(42% 53% at 15% 94%, #33333377 7%, #00330000 100%),
    radial-gradient(42% 53% at 34% 72%, #34333377 7%, #00330000 100%),
    radial-gradient(18% 28% at 35% 87%, #33333377 7%, #00330000 100%),
    radial-gradient(31% 43% at 7% 98%, #33333324 24%, #00330000 100%),
    radial-gradient(41% 39% at 72% 23%, #7878089c 24%, #00330000 100%),
    radial-gradient(35% 56% at 91% 74%, #006600F5 9%, #00330000 100%),
    radial-gradient(74% 86% at 67% 38%, #004400F5 24%, #00330000 100%),
    linear-gradient(125deg, #003300FF 1%, #000000FF 100%);
}

.jumbotron {

}
</style>