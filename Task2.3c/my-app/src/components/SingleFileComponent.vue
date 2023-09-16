<template>
  <div>
    <!-- 1. Template Syntax -->
    <h1>1. Template Syntax</h1>
    <!-- a. Text Interpolation -->
    <h2>a. Text Interpolation</h2>
    <div>{{ message }}</div>
    <!-- b. Raw HTML [v-html] -->
    <h2>b. Raw HTML</h2>
    <div v-html="rawHTML"></div>
    <!-- c. Attribute Bindings Example using v-bind -->
    <h2>c. Attribute Bindings</h2>
    <input v-bind:id="inputId" v-bind:placeholder="inputPlaceholder" />
    <!-- d. JavaScript expressions inside syntax i.e.{{ }} -->
    <h2>d. JavaScript expressions</h2>
    <p>Sum of 3 and 4 is {{ 3 + 4 }}</p>

    <!-- 2. Methods -->
    <h1>2. Methods</h1>
    <p>{{ message2 }}</p>
    <button @click="changeMessage">Change Message</button>

    <!-- 3. Reactivity Fundamentals [ref(), <script setup>] -->
    <h1>3. Reactivity Fundamentals</h1>
    <!-- Displaying count -->
    <p>Count: {{ count }}</p>
    <!-- Increment button -->
    <button @click="incrementCount">Increment</button>

    <!-- 4. Computed Properties -->
    <h1>4. Computed Properties</h1>
    <p>Double the Count: {{ doubleCount }}</p>

    <!-- 5. Class and Style Bindings -->
    <h1>5. Class and Style Bindings</h1>
    <!-- a. Binding HTML class [v-bind:class] -->
    <h2>a. Binding HTML class</h2>
    <p :class="{ active: isActive }">This text is styled when active.</p>
    <button @click="toggleActive">Toggle Active</button>
    <!-- b. Binding Inline Styles [v-bind:style] -->
    <h2>b. Binding Inline Styles</h2>
    <p :style="paragraphStyles">Example of inline v-bind</p>

    <!-- 6. List Rendering -->
    <!-- a. v-for with an Object -->
    <h1>6. List Rendering</h1>
    <h2>a. v-for with an Object</h2>
    <ul>
      <li v-for="(value, key) in user" :key="key">{{ key }}: {{ value }}</li>
    </ul>

    <!-- b. v-for with a Range -->
    <h2>b. v-for with a Range</h2>
    <ul>
      <li v-for="n in 5" :key="n">{{ n }}</li>
    </ul>

    <!-- c. v-for on <template> -->
    <h2>c. v-for on 'template'</h2>
    <template v-for="item in items" :key="item.id">
      <li>{{ item.text }}</li>
    </template>

    <!-- d. v-for with v-if -->
    <h2>d. v-for with v-if (Only render adults (age >= 18))</h2>
    <ul>
      <!-- Using v-for to iterate over items and v-if to filter -->
      <li v-for="person in people" :key="person.id">
        <!-- Only render adults (age >= 18) -->
        <span v-if="person.age >= 18"
          >{{ person.name }} (Age: {{ person.age }})</span
        >
      </li>
    </ul>

    <!-- e. v-for with a Component -->
    <h2>e. v-for with a Component</h2>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
const count = ref(0);
const incrementCount = () => {
  count.value++; // Access the ref value using .value
};
const doubleCount = computed(() => count.value * 2);
</script>

<script>
export default {
  data() {
    return {
      message: "Hello, Vue!",
      rawHTML: "<p>This is <strong>raw HTML</strong> content.</p>",
      inputPlaceholder: "v-bind:placeholder",
      message2: "Methods!",
      isActive: false,
      textColor: "blue",
      user: {
        name: "John Doe",
        age: 30,
        email: "john@example.com",
        country: "USA",
      },
      items: [
        { id: 1, text: "Item 1" },
        { id: 2, text: "Item 2" },
        { id: 3, text: "Item 3" },
      ],
      people: [
        { id: 1, name: "Alice", age: 25 },
        { id: 2, name: "Bob", age: 17 },
        { id: 3, name: "Charlie", age: 32 },
        { id: 4, name: "David", age: 15 },
      ],
    };
  },
  computed: {
    paragraphStyles() {
      return {
        color: this.textColor,
      };
    },
  },
  methods: {
    // Vue method
    changeMessage() {
      this.message2 = "Message changed!";
    },
    toggleActive() {
      this.isActive = !this.isActive; // Toggle the "isActive" property
    },
  },
};
</script>

<style>
/* Add CSS styling here if needed */
.active {
  color: green;
  font-weight: bold;
}
</style>
