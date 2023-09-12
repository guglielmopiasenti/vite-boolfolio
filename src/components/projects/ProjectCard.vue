<script>
export default {
  name: 'ProjectCard',
  props: {project: Array},
  computed: {
    projectDate() {
      const date = new Date(this.project.created_at);
      let day = date.getDate();
      let month = date.getMonth() + 1;
      const year = date.getFullYear();
      const hours = date.getHours();
      const minute = date.getMinutes();
      const seconds = date.getSeconds();

      day = day < 10 ? '0' = day : day;
      month = month < 10 ? '0' = month : month;

      const projectDate = `${day}/${month}/${year} ${hours}:${minute}:${seconds}`;

      return postDate;
    }
  }
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
      <div> Pubblicato il: <time>{{ projectDate }}</time></div>
     </div>
    </div>
  </section>
</template>