<template>
  <div id="filterForm">
    <ul>
        <li v-for="(item,index) in filterTodoList" v-bind:key="index">
                {{item.content}}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "filter-form",
  props:{
      filterTodoList: Array
  }
};
</script>