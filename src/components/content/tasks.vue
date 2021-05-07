<template>
  <div class="boxData">
    <div :key="task.id" v-for="task in tasks">
      <Task
        @delete-task="$emit('delete-task', task.id)"
        :task="task"
        @toggle-reminder="$emit('toggle-reminder', task.id)"
        @edit-task="$emit('edit-task', task)"
      />
    </div>
  </div>
</template>
<script>
import Task from "./task";
export default {
  name: "Tasks",
  props: {
    tasks: Array,
  },
  components: {
    Task,
  },
  emits: ["delete-task", "toggle-reminder", "edit-task"],
};
</script>
<style >
.boxData {
  overflow-y: scroll;
  height: 395px;
}
</style>