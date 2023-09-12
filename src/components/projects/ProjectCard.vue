<script>
export default {
  name: 'ProjectCard',
  props: { project: Array },
  computed: {
    projectDate() {
      const date = new Date(this.project.created_at);
      let day = date.getDate();
      let month = date.getMonth() + 1;
      const year = date.getFullYear();
      const hours = date.getHours();
      const minute = date.getMinutes();
      const seconds = date.getSeconds();

      day = day < 10 ? '0' + day : day;
      month = month < 10 ? '0' + month : month;


      const projectDate = `${day}/${month}/${year} ${hours}:${minute}:${seconds}`;

      return projectDate;
    },
    
  }
}
</script>


<template>
  <section id="project-card">
    <div class="card text-white bg-dark my-5">
      <div class="card-header">
        <h2 class="card-title">{{ project.name }}</h2>
      </div>
      <div class="card-body">
        <h5 class="card-subtitle mb-2">Project Description</h5>
        <p class="card-text">{{ project.description }}</p>
      </div>
      <div class="card-footer">
        <div class="row">
          <div class="col-md-8">
            <div class="project-info">
              <div><a :href="project.github_url" target="_blank" class="text-info">GitHub Repository</a></div>
              <div class="text-muted"> Published at: <time>{{ projectDate }}</time></div>
            </div>
          </div>
          <div class="col-md-4 d-flex justify-content-end align-items-center">
            <RouterLink class="btn btn-info" :to="{name: 'project', params: {id: project.id}}">See Details</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
#project-card .card {
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card-title {
  font-size: 1.5rem !important;
}

.card-subtitle {
  font-size: 1.2rem;
}

.project-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>