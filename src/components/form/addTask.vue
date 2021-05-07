<template>
  <div>
    <form @submit="onSubmit" class="form">
      <h2>{{ title }}</h2>
      <p type="Name:">
        <input
          v-model="text"
          name="text"
          placeholder="Write your name task.."
        />
      </p>
      <p type="Time:">
        <input
          v-model="day"
          name="day"
          title="Time:"
          placeholder="10/5 10h:10ph.."
        />
      </p>
      <label
        >Reminder
        <input name="reminder" v-model="reminder" type="checkbox" />
      </label>
      <button>Send {{truong}}</button>
    </form>
    <!-- <div v-if="show">
      <button @click="rerender">re-render</button>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "AddTask",
  data() {
    return {
      reminder: "",
      day: "",
      id: "",
      text: "",
      show: true,
    };
  },
  props: ["taskData", "title"],
  methods: {
    onSubmit(e) {
      e.preventDefault();
      console.log(this.taskData);
      console.log("add");
      if (this.text === "") {
        confirm("Nhập Name");
        return 0;
      }
      if (this.day === "") {
        confirm("Nhập Time");
        return 0;
      }
      if (this.taskData.text) {
        console.log("edit");
        let editData = {
          ...this.taskData,
          text: this.text,
          day: this.day,
          reminder: this.reminder,
        };
        this.$emit("edit-task", editData);
        this.text = "";
        this.day = "";
        this.reminder = false;
        return 0;
      }
      const newTask = {
        id: Math.floor(Math.random() * 1000000000),
        text: this.text,
        day: this.day,
        reminder: this.reminder,
      };
      this.$emit("add-task", newTask);
      this.text = "";
      this.reminder = false;
      this.day = "";
      return 0;
    },
    rerender() {
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
        console.log("re-render start");
        this.$nextTick(() => {
          console.log("re-render end");
        });
      });
    },
  },
  mounted() {
    // console.log(this.taskData === null);
  },
  beforeCreate() {
    console.log("bCreated");
  },
  beforeMount() {
    console.log("bMount");
  },
  watch: {
    taskData() {
      // console.log(value, "watch");
      this.reminder = this.taskData.reminder;
      this.day = this.taskData.day;
      this.id = this.taskData.id;
      this.text = this.taskData.text;
    },
  },
  // computed:{
  //   truong(){
  //     console.log('object')
  //     return 'hi'
  //   }
  // }
};
</script>

<style scoped>
.form {
  width: 340px;
  height: 360px;
  background: #e6e6e6;
  border-radius: 8px;
  padding: 20px 30px;
  max-width: calc(100vw - 40px);
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  position: relative;
  margin-top: 5px;
}
h2 {
  margin: 10px 0;
  padding-bottom: 10px;
  font-size: 16px;
  width: 180px;
  color: #78788c;
  border-bottom: 3px solid #78788c;
}
p input {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  background: none;
  outline: none;
  resize: none;
  border: 0;
  font-family: "Montserrat", sans-serif;
  transition: all 0.3s;
  border-bottom: 2px solid #bebed2;
}
input:focus {
  border-bottom: 2px solid #78788c;
}
p:before {
  content: attr(type);
  display: block;
  margin: 28px 0 0;
  font-size: 14px;
  color: #5a5a5a;
}
button {
  float: right;
  padding: 8px 12px;
  margin: 8px 0 0;
  font-family: "Montserrat", sans-serif;
  border: 2px solid #78788c;
  background: 0;
  color: #5a5a6e;
  cursor: pointer;
  transition: all 0.3s;
}
button:hover {
  background: #78788c;
  color: #fff;
}
label {
  display: block;
  font-size: 14px;
}
label input {
  margin-top: 15px;
}
</style>