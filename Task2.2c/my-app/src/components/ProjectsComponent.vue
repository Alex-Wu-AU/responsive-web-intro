<template>
  <div>
    This is from projects component!

    <br />
    Title: {{ title }}
    <br />
    Id: {{ id }}
    <br />
    Description:
    <p>{{ body }}</p>
    <!-- 1st STEP: Use $emit -->
    <!-- $emit is used to interact with parent component -->
    <button @click="$emit('increase-size')">Increase Font</button>

    <!-- Slot Section to inject value from parent -->
    <button class="fancy-btn">
      <slot name="button">button</slot>
    </button>

    <!-- SLOTs STEP 1: Create a new button -->

    <!-- Named SLOT example -->
    <div class="container">
      <header>
        <slot name="header"> </slot>
      </header>
      <main>
        <slot> </slot>
      </main>
    </div>
    <footer>
      <slot name="footer"> </slot>
    </footer>
  </div>
</template>

<script setup>
// creating props
const props = defineProps({
  title: String,
  id: Number,
  body: String,
});
</script>

<style scoped>
.fancy-btn {
  color: #fff;
  /* background-color: linear-gradient(315deg, #42d392 25%, #647eff); */
  background: linear-gradient(
    90deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(253, 187, 45, 1) 100%
  );
  border: none;
  padding: 5px 10px;
  border-radius: 8px;
  cursor: pointer;
}
div {
  width: 100%;
  height: 400px;
  border-style: solid;
  padding: 10px;
}
</style>
