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
    <ul>
      <!-- Using v-for to iterate and render ColorItem components -->
      <color-item
        v-for="(color, index) in colors"
        :key="index"
        :color="color"
      ></color-item>
    </ul>

    <!-- 7. Event Handling: Listening to Events [v-on:click] -->
    <h1>7. Event Handling: Listening to Events</h1>
    <!-- a. Inline Handlers -->
    <h2>a. Inline Handlers</h2>
    <!-- a. Inline Event Handler -->
    <button @click="count++">Add 1</button>
    <p>Count is: {{ count }}</p>

    <!-- b. Method Handlers -->
    <h2>b. Method Handlers</h2>
    <!-- `greet` is the name of the method defined above -->
    <button @click="greet">Greet</button>

    <!-- 8. Form Input Bindings -->
    <h1>8. Form Input Bindings</h1>
    <!-- a. v-model with <input type="text">, <input type="checkbox">, <input type="radio">, <select> and <textarea> -->
    <h2>
      a. v-model with input type="text", input type="checkbox", input
      type="radio", select and textarea
    </h2>
    <!-- Text Input -->
    <label for="username">Username:</label>
    <input type="text" id="username" v-model="username" />
    <p>Username: {{ username }}</p>

    <!-- Checkbox -->
    <label for="subscribe">Subscribe:</label>
    <input type="checkbox" id="subscribe" v-model="subscribed" />
    <p>Subscribed: {{ subscribed }}</p>

    <!-- Radio Buttons -->
    <div>
      <label for="male">Male:</label>
      <input type="radio" id="male" value="male" v-model="gender" />
      <label for="female">Female:</label>
      <input type="radio" id="female" value="female" v-model="gender" />
    </div>
    <p>Gender: {{ gender }}</p>

    <!-- Select Dropdown -->
    <label for="selectGender">Select Gender:</label>
    <select id="selectGender" v-model="selectedGender">
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </select>
    <p>Selected Gender: {{ selectedGender }}</p>

    <!-- Textarea -->
    <label for="feedback">Feedback:</label>
    <textarea id="feedback" v-model="userFeedback"></textarea>
    <p>Feedback: {{ userFeedback }}</p>

    <!-- b. v-model modifiers [.lazy , .number, .trim] -->
    <h2>b. v-model modifiers [.lazy , .number, .trim]</h2>
    <!-- Lazy Modifier -->
    <label for="lazyInput">Lazy Input:</label>
    <input type="text" id="lazyInput" v-model.lazy="lazyValue" />
    <p>Lazy Value: {{ lazyValue }}</p>

    <!-- Number Modifier -->
    <label for="numberInput">Number Input:</label>
    <input type="text" id="numberInput" v-model.number="numericValue" />
    <p>Numeric Value: {{ numericValue }}</p>

    <!-- Trim Modifier -->
    <label for="trimInput">Trim Input:</label>
    <input type="text" id="trimInput" v-model.trim="trimmedValue" />
    <p>Trimmed Value: "{{ trimmedValue }}"</p>

    <!-- 9. Watchers -->
    <h1>9. Watchers</h1>
    <p>
      Ask a yes/no question:
      <input v-model="question" />
    </p>
    <p>{{ answer }}</p>

    <!-- 10. Components -->
    <h1>10. Components</h1>
    <!-- a.props -->
    <h2>a. Use the Component and pass a prop</h2>
    <ChildComponent :title="parentTitle" @button-click="handleButtonClick2">
      <!-- b. provide content through a slot -->
      <h2>b. Slot Content</h2>
      <p>This is additional content provided through a slot.</p>
    </ChildComponent>

    <!-- c.event[$emit] -->
    <h2>c. Emit a custom event from the component</h2>
    <p>Received from child: {{ childMessage }}</p>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
const count = ref(0);
const incrementCount = () => {
  count.value++; // Access the ref value using .value
};
const doubleCount = computed(() => count.value * 2);
const name = ref("Vue.js");

function greet(event) {
  alert(`Hello ${name.value}!`);
  // `event` is the native DOM event
  if (event) {
    alert(event.target.tagName);
  }
}
const question = ref("");
const answer = ref("Questions usually contain a question mark. ;-)");

watch(question, async (newQuestion) => {
  if (newQuestion.indexOf("?") > -1) {
    answer.value = "Thinking...";
    try {
      const res = await fetch("https://yesno.wtf/api");
      answer.value = (await res.json()).answer;
    } catch (error) {
      answer.value = "Error! Could not reach the API. " + error;
    }
  }
});
</script>

<script>
import ColorItem from "./ColorItem.vue";
import ChildComponent from "./ChildComponent.vue";

export default {
  components: {
    "color-item": ColorItem,
    ChildComponent,
  },
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
      colors: ["red", "green", "blue", "yellow", "purple"],
      buttonClicked: false,
      // a. v-model with various form elements
      username: "",
      subscribed: false,
      gender: "", // For radio buttons
      selectedGender: "",
      userFeedback: "",

      // b. v-model modifiers
      lazyValue: "",
      numericValue: "",
      trimmedValue: "",

      // 10. Components
      parentTitle: "Hello from parent!",
      childMessage: "",
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
    handleButtonClick() {
      // Set the buttonClicked data property to true when the button is clicked
      this.buttonClicked = true;
    },
    handleButtonClick2(message) {
      this.childMessage = message;
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
