<template>
  <h2>Todo App</h2>
  <AddTodo @add-todo="addTodo" />
  <TodoList
      v-bind:todos="todos"
      v-on:remove-todo="removeTodo"
  />
</template>

<script>
import TodoList from '@/components/TodoList'
import AddTodo from "@/components/AddTodo";
export default {
  name: 'App',
  data() {
    return {
      todos: []
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
        .then((response) => response.json())
        .then((json) => {
          this.todos = json;
        })
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter(t => t.id !== id)
    },
    addTodo(todo) {
      this.todos.push(todo);
    }
  },
  components: {
    AddTodo,
    TodoList
  }
}
</script>