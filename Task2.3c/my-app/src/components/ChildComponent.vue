<template>
  <div>
    <!-- Display the received prop -->
    <p>Received from parent: {{ title }}</p>

    <!-- Emit a custom event when a button is clicked -->
    <button @click="emitEvent">Click me</button>

    <!-- Display content provided through a slot -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["title"],
  methods: {
    emitEvent() {
      // Emit a custom event with a message
      this.$emit("button-click", "Button clicked in child component!");
    },
  },
};
</script>
