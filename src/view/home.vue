<template >
  <div>
    <AddTask
      v-show="isShowActionForm"
      @add-task="addTask"
      :taskData="taskEdit"
      @edit-task="editData"
      :title="!isEditForm ? 'ADD TASK' : 'EDIT TASK'"
      value="dinh"
    />
    <Tasks
      @delete-task="deleteTask"
      @toggle-reminder="toggleReminder"
      :tasks="tasks"
      @edit-task="editTask"
    />
  </div>
</template>
<script>
import Tasks from "../components/content/tasks";
import AddTask from "../components/form/addTask";
export default {
  name: "Home",
  components: {
    Tasks,
    AddTask,
    // Truong,
  },
  props:["isShowForm"],
  data() {
    return {
      tasks: [],
      taskEdit: {
        text: "",
        day: "",
        reminder: false,
        id: "",
      },
      isShowActionForm: this.isShowForm,
      isEditForm: false,
      api: "https://5fbb65b4c09c200016d406f6.mockapi.io/info",
    };
  },
  async created() {
    this.tasks = await this.fetchData();
  },
  methods: {
    async deleteTask(id) {
      if (confirm("Xóa nhe !")) {
        const res = await fetch(`${this.api}/${id}`, {
          method: "DELETE",
        });
        res.ok
          ? (this.tasks = this.tasks.filter((task) => task.id !== id))
          : alert("bug");
      }
    },
    async toggleReminder(id) {
      let toggleTask;
      this.tasks.forEach((task) =>
        task.id === id
          ? (toggleTask = { ...task, reminder: !task.reminder })
          : ""
      );
      await fetch(`${this.api}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(toggleTask),
      });
      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      );
    },
    async addTask(newTask) {
      this.tasks.push(newTask);
      await fetch(this.api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });
    },
    editTask(task) {
      this.isShowActionForm = true;
      this.isEditForm = true;
      this.taskEdit = task;
      this.$emit('is-edit-change-name-btn')
    },
    async editData(editedData) {
      const res = await fetch(`${this.api}/${editedData.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedData),
      });
      console.log(res);
      this.tasks = this.tasks.map((task) =>
        task.id === editedData.id ? editedData : task
      );
    },
    async fetchData() {
      const res = await fetch(this.api);
      const data = await res.json();
      return data;
    },
  },
  watch:{
      isShowForm(){
          this.isShowActionForm=this.isShowForm
      }
  }
};
</script>
<style >
</style>