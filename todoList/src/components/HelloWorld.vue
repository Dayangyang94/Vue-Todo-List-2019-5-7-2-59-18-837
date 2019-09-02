<template>
  <div class="hello">
    <h2>Jquery To Do List</h2>
    <h3>Simple Todo List with adding and filter by diff status.</h3>
    <form v-on:submit.prevent="addNewTodo">
    <label for="new-todo"></label>
    <input
      v-model="newTodoText"
      id="new-todo"
    >
    <button @click="add">Add</button>
  </form>
  <ul>
    <li
      is="todo-item"
      v-for="(todo, index) in items"
      v-bind:key="todo.id"
      v-bind:title="todo.title"
      v-on:remove="todos.splice(index, 1)"
    ></li>
  </ul>
  </div>
</template>

<script>
export default {
  name: 'ToDoList',
  data () {
    return {
      title: 'ToDoList', //标题名称
      //待办事项列表
     message:0
    }
  },
   methods:{
            add:function () {
                this.message++
            },
        }
}
</script>

<style scoped>

</style>
