<template>
  <div>
    <RegistrationForm @user-registered="onUserRegistered" />
    <GreetingMessage :userData="registeredUser" />
  </div>
</template>

<script>
import RegistrationForm from "./components/RegistrationForm.vue";
import GreetingMessage from "./components/GreetingMessage.vue";

export default {
  components: {
    RegistrationForm,
    GreetingMessage,
  },
  data() {
    return {
      registeredUser: null,
    };
  },
  methods: {
    onUserRegistered(userData) {
      this.registeredUser = userData;
    },
  },
};
</script>
