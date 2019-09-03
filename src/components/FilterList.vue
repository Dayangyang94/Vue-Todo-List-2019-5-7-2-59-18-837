<template>
  <div>
    <button @click="handleStatusUpdate('all')">All</button>
    <button @click="handleStatusUpdate('active')">Active</button>
    <button @click="handleStatusUpdate('completed')">Completed</button>
  </div>
</template>

<script>
export default {
  name: "FilterList",
  methods: {
      handleStatusUpdate: function(status) {
      this.$emit("handleStatusUpdate",status);
    }
  }
}
</script>