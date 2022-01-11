<template>
  <ul>
   <TodoItem
    v-for="(todo,i) of todos"
    v-bind:todo="todo"
    v-bind:index="i"
    v-on:rm-todo="removeTodo"
   />
  </ul>
</template>

<script>
import TodoItem from  './TodoItem'
export default {
  props: ['todos'],
  components: {
    TodoItem,
  },
  methods: {
    removeTodo(id){
      this.$emit('remove-todo', id)
    }
  }
}
</script>

<style scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
</style>