<template >
  <div>
    <span
      >TASKS
    </span>
    <button v-show="isHomePage" @click="$emit('toggle-form')">
      {{ title }}
    </button>
  </div>
</template>
<script>
export default {
  name: "Header",
  props: {
    title: String,
  },
  computed: {
    isHomePage() {
      if (this.$route.path === "/") {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
<style scoped>
div {
  display: flex;
  width: 340px;
  justify-content: space-between;
}
button {
  padding: 3%;
  background-color: green;
  color: white;
  border: none;
  cursor: pointer;
}
span {
  padding: 3% 0;
}
</style>