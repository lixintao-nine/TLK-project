<template>
  <div class="nav-bg">
    <span class="nav-border top">
      {{ navName }}
      <img src="../../assets/cloud.png" class="nav-cloud" />
    </span>
    <ul id="open" style="padding-left: 40px" class="flex-row">
      <li v-for="li in navList" :key="li">{{ li.name }}</li>
    </ul>
    <div class="ft"></div>
  </div>
</template>

<script>
export default {
  name: "NavUnit",
  props: {
    navName: String,
    navList: Array,
  },
};
</script>

<style lang="less" scoped>
</style>