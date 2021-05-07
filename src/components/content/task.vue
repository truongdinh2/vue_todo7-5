<template lang="en">
<div :class = "[task.reminder ? 'reminder' : '','task' ]" 
  @dblclick="$emit('toggle-reminder', task.id)"
>
  <p>{{task.text}}<span @click="onDelete()" >x</span></p>
  <p>{{task.day}}
    <span
    @click="$emit('edit-task',task.id)"
    ><img
     src="https://img.icons8.com/metro/26/000000/edit.png"
     height=14
     width=14
     /></span>
    </p>
</div>
</template>
<script>
export default {
  name: "Task",
  props: {
    task: Object,
  },
  methods: {
    onDelete() {
      this.$emit("delete-task");
    },
  },
};
</script>
<style scoped>
.task {
  background-color: #dadad7;
  margin: 5px 0;
  padding: 1px 15px;
}
.task p:first-child {
  font-family: "Times New Roman", Times, serif;
  font-weight: 600;
}
.task p:nth-child(2) {
  font-size: 15px;
  font-style: italic;
}
.task p {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
}
.task p span {
  color: red;
  font-weight: 800;
  cursor: pointer;
  align-content: center;
}
.reminder {
  border-left: 5px solid rgb(29, 32, 158);
}
</style>