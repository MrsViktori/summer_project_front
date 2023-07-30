<template>
  <div class="project" >
    <router-view></router-view>
  </div>

</template>

<script>
import {defineComponent} from "vue";
import router from "../router";
export default defineComponent(
    {
      router
    })

</script>

<style>
.project{
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
}

</style>
