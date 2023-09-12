<script>
export default {
  name: 'NotFoundPage'
}
</script>

<template>
  <div class="not-found-container">
    <div class="not-found-content d-flex flex-column">
      <h1>404</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <button class="btn btn-secondary btn-sm my-3" @click="$router.back()">Go back</button>
      <router-link to="/">Go Home</router-link>
    </div>
  </div>
</template>

<style scoped>
.not-found-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.not-found-content {
  text-align: center;
  border-radius: 5px;
  padding: 30px;
  background-color: #1f1f1f;
}
h1 {
  font-size: 6em;
  margin-bottom: 20px;
}

p {
  font-size: 1.2em;
  margin-bottom: 20px;
}

router-link {
  padding: 10px 20px;
  border: 1px solid #ffffff;
  border-radius: 3px;
  text-decoration: none;
  color: #ffffff;
  transition: background-color 0.2s ease;
}

router-link:hover {
  background-color: #ffffff;
  color: #121212;
}
</style>