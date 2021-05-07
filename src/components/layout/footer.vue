<template >
  <div>
    <router-link to="/about">about</router-link>
  </div>
  <div class="copyr">copyRight: @dinhtruong 2021</div>
</template>
<script>
export default {
    name:"Footer"
};
</script>
<style scoped>
.copyr{
    font-size: 15px;
    font-style: italic;
}
div{
    text-align: center;
    padding-top: 5px;
}
</style>