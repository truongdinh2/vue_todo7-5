<template>
  <div>
    <!-- <Truong  /> -->
    <Header
      @toggle-form="isShowForm = !isShowForm"
      :title="!isShowForm ? 'ADD Task' : 'CANCLE'"
    />
    <router-view :isShowForm="isShowForm" @is-edit-change-name-btn="isShowForm=!isShowForm"></router-view>
    <Footer />
  </div>
</template>

<script>
// import Truong from "./components/test/truong";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
    // Truong,
  },
  data() {
    return {
      isShowForm: false,
    };
  },
};
</script>

<style >
#app {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
