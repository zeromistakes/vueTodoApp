<template>
  <li>
    <span v-bind:class="{done: todo.completed}">
      <input type="checkbox" v-model="todo.completed">
      <strong>{{index + 1}}</strong>
      {{uppercaseTitle}}
    </span>
    <button v-on:click="$emit('rm-todo', todo.id);">&times;</button>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
    index: Number
  },
  computed: {
    uppercaseTitle() {
     return this.todo.title.toUpperCase();
    }
  }
}
</script>

<style scoped>
  .done {
    text-decoration: line-through;
  }
</style>