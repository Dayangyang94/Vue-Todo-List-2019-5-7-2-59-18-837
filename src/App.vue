<template>
  <div id="app">
    <h2>
      Vue To Do List
      Simple Todo List with adding and filter by diff status.
    </h2>
    <CreateForm @click="addToDo"></CreateForm>
    <DoList :filterTodoList="filterTodoList"></DoList>
    <FilterList @handleStatusUpdate="handleStatusUpdate"></FilterList>
  </div>
</template>

<script>
import CreateForm from "./components/CreateForm.vue";
import DoList from "./components/DoList.vue";
import FilterList from "./components/FilterList.vue";
export default {
  name: "app",
  components: {
    CreateForm,
    DoList,
    FilterList
  },
  data: function() {
    return {
      /**
       * 定义了 todo item 中属性为 {content:'吃饭',status:'active'}
       * 定义了 todo 的两种状态 completed、active，默认为 active
       */
      todoList: [
        { content: "吃饭", status: "active" },
        { content: "睡觉", status: "completed" },
        { content: "打豆豆", status: "active" }
      ],

      currentFilter: "active"
    };
  },
  computed: {
    filterTodoList: function() {
      let filterList = [];
      for (let index = 0; index < this.todoList.length; index++) {
        const element = this.todoList[index];
        if (
          element.status === this.currentFilter ||
          this.currentFilter === "all"
        ) {
          filterList.push(element);
        }
      }
      return filterList;
    }
  },
  computed: {
    counters: function() {
      return this.$store.state.inputing;
    }
  },
  methods: {
    addToDo: function(inputing) {
      console.log(arguments),
        this.todoList.push({
          content: this.$store.state.inputing,
          status: "active"
        });
      this.$store.state.inputing = "";
    },
    handleStatusUpdate: function(status) {
      this.currentFilter = status;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.items {
  list-style: none;
  text-align: left;
  line-height: 30px;
}

.items li.completed {
  text-decoration: line-through;
}

.filter a {
  margin: 0 10px;
  line-height: 30px;
}

.filter a.active {
  color: #f60;
  border: 1px solid #ccc;
  border-radius: 2px;
  padding: 3px;
  cursor: pointer;
}
input[type=checkbox].done-todo { 
	
    margin: 5px 5px 2px 0; 
}
</style>
