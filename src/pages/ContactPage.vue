<script>
import axios from 'axios';
const endpoint = 'http://localhost:8000/api/contact-message';
const emptyForm = {email: '', subject: '', content: '',}
export default {
  name: 'ContactPage',
  data: () => ({ form: { emptyForm}}),
  methods: {
    sendForm() {
      axios.post(endpoint, this.form)
      .then( () => { this.form = emptyForm})
      .catch(err => {console.error(err)})
      .then(() => {})
    }
  }
}

</script>

<template>
  <div>
    <h2 class="my-5">Contact Us</h2>
    <!-- Contact form -->
    <form @submit.prevent="sendForm" class="mb-5">
      <!-- Email -->
      <div class="mb-3">
        <label for="email" class="form-label">Email Address <sup class="text-danger">*</sup> </label>
        <input type="email" class="form-control" id="email" placeholder="youremail@example.com" v-model.trim="form.email"
          required>
        <small>Insert your email, we'll get in contact with you there</small>
      </div>

      <!-- Subject -->
      <div class="mb-3">
        <label for="subject" class="form-label">Subject <sup class="text-danger">*</sup></label>
        <input type="text" class="form-control" id="subject" v-model.trim="form.subject" required>
      </div>

      <!-- Message -->
      <div class="mb-3">
        <label for="message" class="form-label">Message <sup class="text-danger">*</sup></label>
        <textarea class="form-control" id="message" rows="5" v-model.trim="form.content" required></textarea>
      </div>

      <!-- Submit button -->
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>