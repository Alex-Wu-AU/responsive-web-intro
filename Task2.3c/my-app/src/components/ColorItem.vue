<template>
  <li :style="{ backgroundColor: color }">
    {{ color }}
  </li>
</template>

<script>
export default {
  props: {
    color: String,
  },
};
</script>

<style scoped>
/* Add scoped CSS styles here if needed */
</style>
