<script>
export default {
  name: 'ProjectCard',
  props: {project: Array}
}
</script>


<template>
  <section id="project-card">
    <div class="card my-3">
     <div class="card-header">
      <h2>{{ project.name }}</h2>
     </div>
     <div class="card-body">
      <p>{{ project.description }}</p>
     </div>
     <div class="card-footer">
      <div>{{ project.github_url }}</div>
      <div> Pubblicato il: <time>{{ project.created_at }}</time></div>
     </div>
    </div>
  </section>
</template>