<template>
  <div>
    <p>{{ greetingMessage }}</p>
  </div>
</template>

<script>
export default {
  props: {
    userData: Object,
  },

  computed: {
    greetingMessage() {
      if (this.userData) {
        return `Welcome, ${this.userData.name}! Thank you for registering on our shopping`;
      }
      return "";
    },
  },
};
</script>
