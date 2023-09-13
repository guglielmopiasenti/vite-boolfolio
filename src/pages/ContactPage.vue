<template>
  <div>
    <h2 class="my-5">Contact Us</h2>
    <!-- Contact form -->
    <form class="mb-5">
      <!-- Email -->
      <div class="mb-3">
        <label for="email" class="form-label">Email Address <sup class="text-danger">*</sup> </label>
        <input type="email" class="form-control" id="email" placeholder="youremail@example.com"  required>
        <small>Insert your email, we'll get in contact with you there</small>
      </div>

      <!-- Subject -->
      <div class="mb-3">
        <label for="subject" class="form-label">Subject <sup class="text-danger">*</sup></label>
        <input type="text" class="form-control" id="subject" required>
      </div>

      <!-- Message -->
      <div class="mb-3">
        <label for="message" class="form-label">Message <sup class="text-danger">*</sup></label>
        <textarea class="form-control" id="message" rows="5"  required></textarea>
      </div>

      <!-- Submit button -->
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>