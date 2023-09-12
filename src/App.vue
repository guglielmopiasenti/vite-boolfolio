<script>
import AppHeader from './components/AppHeader.vue';
import HomePage from './components/pages/HomePage.vue';
export default {
  components: { AppHeader, HomePage },
};
</script>

<template>
  <AppHeader />
  <main class="container my-5">
    <HomePage />
  </main>
</template>