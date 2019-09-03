<template>
<div id="createForm">
   <input type="text" :value="inputing" @change="handleChanges">
   <button @click="handleAdd">add</button>
</div>
</template>

<script>
export default {
     name: 'create-form',
   //   data: function(){
   //      return{
   //         inputing:""
   //      }
   //   },
     methods: {
        handleChanges:function(event){
           this.inputing=event.target.value;
        },
        handleAdd:function(){
           console.log(this.inputing)
           this.$emit("addNewToDo",this.$store.state.inputing);
        }
     }
    
}
</script>