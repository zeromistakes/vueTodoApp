<template>
  <h2>Todo App</h2>
  <AddTodo @add-todo="addTodo" />
  <select v-model="filter">
    <option value="all">All</option>
    <option value="completed">Completed</option>
    <option value="not-completed">Not Completed</option>
  </select>
  <Loader v-if="isLoading"></Loader>
  <TodoList
      v-else-if="filteredTodos.length"
      v-bind:todos="filteredTodos"
      v-on:remove-todo="removeTodo"
  />
  <p v-else>No Todos!</p>
</template>

<script>
import TodoList from '@/components/TodoList'
import AddTodo from "@/components/AddTodo";
import Loader from "@/components/Loader";
export default {
  name: 'App',
  data() {
    return {
      todos: [],
      isLoading: true,
      filter: 'all'
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
        .then((response) => response.json())
        .then((json) => {
          this.todos = json;
          this.isLoading = false;
        })
  },
  // watch: {
  //   filter(val){
  //     console.log(val);
  //   }
  // },
  computed: {
    filteredTodos() {
      if(this.filter === 'all') {
        return this.todos;
      }
      if(this.filter === 'completed') {
        return this.todos.filter(t => t.completed);
      }
      if(this.filter === 'not-completed') {
        return this.todos.filter(t => !t.completed);
      }
    }
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
    TodoList,
    Loader
  }
}
</script>