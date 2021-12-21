<template>
  <div class="dialog-bg" v-if="visible">
    <div class="dialog-box">
      <header>{{ imgInfo.title }}</header>
      <main>
        <img :src="`/img/1.dae81e0f.jpg`" />
      </main>
      <footer>
        <button @click="closeDialog">取消</button>
        <button @click="closeDialog">确定</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dialog",
  props: {
    imgInfo: Object,
    visible: Boolean,
    closeDialog: Function,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.dialog-bg {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 999;
}
.dialog-box {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 800px;
  height: 600px;
  transform: translate(-50%, -50%);
  background-color: #fff;
  display: flex;
  flex-direction: column;
}
header {
  height: 40px;
  line-height: 40px;
}
main {
  flex: 1;
  border-top: 2px solid #ccc;
  border-bottom: 2px solid #ccc;
  padding: 20px;
}
main img {
  width: 100%;
}
footer {
  position: relative;
  height: 80px;
  line-height: 80px;
}
footer button {
  position: absolute;
  top: 25px;
  right: 30px;
  width: 100px;
  height: 30px;
  color: #fff;
  background-color: #a98658;
  border-radius: 3px;
  cursor: pointer;
}
footer button:first-child {
  right: 160px;
  color: #ccc;
  background-color: #fff;
  border: 2px solid #ccc;
}
footer button:hover {
  opacity: 0.8;
}
</style>