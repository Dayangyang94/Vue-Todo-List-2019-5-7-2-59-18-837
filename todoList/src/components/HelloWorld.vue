<template>
<div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Jquery To Do List</h2>
    <h3>Simple Todo List with adding and filter by diff status.</h3>
<p>
    <label for="new-todo">Add a todo</label>
    <input id="new-todo" v-model="newTodoText">
    <button @click="addTodo">add</button>
</p >
<ul>
<li
  v-for="(todo, index) in todos"
  v-bind:key="todo.id"
  v-bind:title="todo.title"
  v-on:remove="todos.splice(index, 1)"
><input type="checkbox" id="todo.id" v-model="todo.checked">
{{todo.title}}</li>
</ul>
<p><button>all</button><button>Active</button><button>Complete</button></p >

</div>
</template>

<script>
export default {
name: 'HelloWorld',
props: {
msg: String
},
data(){
return{
newTodoText: '',
toggle:false,
todos:[
],
nextTodoId: 1
}
},
methods:{
  addTodo:function(){
  this.todos.push({id:this.nextTodoId,title:this.newTodoText,checked:false})
  this.nextTodoId=this.nextTodoId+1;
}
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
margin: 40px 0 0;
}
label{
margin: 10px;
}
button{
margin: 10px;
}
ul{
margin:0 auto;
display:block;
padding:0px;
}
</style>