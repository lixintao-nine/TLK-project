<template>
  <div class="container">
    <header>
      <img src="../../assets/cloud@x3.png" width="800" id="rt-bg" />
    </header>
    <main>
      <div class="border">
        <p class="title" style="color: red">建筑结构</p>
        <p class="article">
          明哲堂明哲堂为孙权第41世孙孙润玉（人称五阿太）所建，又称“五边厅”，建于明代。前后天井，正厅面阔三间，本房围绕厅堂而居，狭巷小弄，廊坊相连，是龙门古镇“厅堂组合式院落”的典型。
        </p>
        <p class="article">
          围墙能给人们带来安全感，从建筑学的角度来看也有通风采光等一系列问题。
        </p>
        <p class="title">以水为财</p>
        <p class="article">
          以水为财风水学中以水为财，所以天降的雨雪落到房顶上后，汇集于屋顶。
        </p>
        <p class="title">逢阳化水</p>
        <p class="article">
          逢阳化水屋顶的雨雪经过太阳的照射化为水，意味着困难过后的收获。
        </p>
        <p class="title">四水归堂</p>
        <p class="article">
          四水归堂水顺着屋檐留下，汇集天井，然后顺着水枧流入屋内下水道有招财进宝的寓意。
        </p>
      </div>
      <img src="../../assets/cloud@2.png" />
    </main>
    <footer :class="{ close: isClosed }">
      <svg
        @click="openOrClose"
        width="68px"
        height="56px"
        viewBox="0 0 34 28"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <title>编组 3备份</title>
        <g
          id="页面-1"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g
            id="白虎视角"
            transform="translate(-1137.000000, -634.000000)"
            fill="#FFF7EC"
            fill-rule="nonzero"
          >
            <g
              id="编组-3备份"
              transform="translate(1154.000000, 647.918129) rotate(90.000000) translate(-1154.000000, -647.918129) translate(1140.081871, 630.918129)"
            >
              <g
                id="编组"
                transform="translate(13.918129, 24.555556) rotate(90.000000) translate(-13.918129, -24.555556) translate(4.473684, 10.637427)"
              >
                <polygon
                  id="路径"
                  points="15.7405491 12.3717515 15.7405491 9.27864588 12.5924959 9.27864588 12.5924959 6.18579662 9.44441383 6.18579662 9.44441383 3.09291256 6.29632851 3.09291256 6.29632851 -1.13686838e-13 0 -1.13686838e-13 0 3.09291256 3.14827538 3.09291256 3.14827538 6.18579662 6.29632851 6.18579662 6.29632851 9.27864588 9.44441383 9.27864588 9.44441383 12.3717515 12.5924959 12.3717515 12.5924959 15.4645058 9.44441383 15.4645058 9.44441383 18.5576114 6.29632851 18.5576114 6.29632851 21.6504607 3.14827538 21.6504607 3.14827538 24.7433764 0 24.7433764 0 27.8362573 6.29632851 27.8362573 6.29632851 24.7433764 9.44441383 24.7433764 9.44441383 21.6504607 12.5924959 21.6504607 12.5924959 18.5576114 15.7405491 18.5576114 15.7405491 15.4645058 18.8888889 15.4645058 18.8888889 12.3717515"
                ></polygon>
              </g>
              <g
                id="编组备份-2"
                opacity="0.487054869"
                transform="translate(13.918129, 9.444444) rotate(90.000000) translate(-13.918129, -9.444444) translate(4.473684, -4.473684)"
              >
                <polygon
                  id="路径"
                  points="15.7405491 12.3717515 15.7405491 9.27864588 12.5924959 9.27864588 12.5924959 6.18579662 9.44441383 6.18579662 9.44441383 3.09291256 6.29632851 3.09291256 6.29632851 -1.13686838e-13 0 -1.13686838e-13 0 3.09291256 3.14827538 3.09291256 3.14827538 6.18579662 6.29632851 6.18579662 6.29632851 9.27864588 9.44441383 9.27864588 9.44441383 12.3717515 12.5924959 12.3717515 12.5924959 15.4645058 9.44441383 15.4645058 9.44441383 18.5576114 6.29632851 18.5576114 6.29632851 21.6504607 3.14827538 21.6504607 3.14827538 24.7433764 0 24.7433764 0 27.8362573 6.29632851 27.8362573 6.29632851 24.7433764 9.44441383 24.7433764 9.44441383 21.6504607 12.5924959 21.6504607 12.5924959 18.5576114 15.7405491 18.5576114 15.7405491 15.4645058 18.8888889 15.4645058 18.8888889 12.3717515"
                ></polygon>
              </g>
            </g>
          </g>
        </g>
      </svg>
      <img src="../../assets/img/1.jpg" height="60" @click="openImg('1.jpg')" />
      <img src="../../assets/img/1.jpg" height="60" />
    </footer>
    <Dialog :visible="visible" :closeDialog="closeDialog" :imgInfo="imgInfo" />
  </div>
</template>

<script>
import Dialog from "../../components/Dialog.vue";
import { onMounted, reactive, ref } from "vue";
export default {
  name: "MingzheTang2",
  components: { Dialog },
  setup() {
    const visible = ref(false);
    const imgInfo = reactive({
      url: "../../assets/img/1.jpg",
      title: "图片1",
    });
    const openImg = (url) => {
      visible.value = true;
      imgInfo.url = url;
    };
    const closeDialog = () => {
      visible.value = false;
    };
    const isClosed = ref(true);
    onMounted(() => {
      isClosed.value = false;
    });
    const openOrClose = (e) => {
      isClosed.value = !isClosed.value;
      e.path;
    };
    return {
      visible,
      imgInfo,
      openImg,
      closeDialog,
      isClosed,
      openOrClose,
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
header img {
  transform: translate(10%, -10%);
}
main {
  position: relative;
  width: 300px;
  height: 600px;
  margin-right: 20px;
  border-radius: 5px;
  background-color: #fff7ec;
}
main .border {
  position: absolute;
  left: 5px;
  top: 5px;
  width: calc(100% - 20px);
  height: calc(100% - 40px);
  border: 5px solid #a98658;
  border-radius: 5px;
  padding-top: 20px;
  overflow-y: scroll;
}
main .border::-webkit-scrollbar {
  width: 0px;
}
main .border p {
  width: calc(100% - 40px);
  padding: 0 20px;
  text-align: left;
  margin-bottom: 10px;
}
main .border p:last-child {
  margin-bottom: 80px;
}
main .border .title {
  font-size: 20px;
}
main .border .article {
  font-size: 16px;
}
main img {
  position: absolute;
  bottom: 10px;
  left: 5px;
  width: calc(100% - 20px);
}
footer {
  position: relative;
  right: -480px;
  margin-top: 20px;
  width: 600px;
  height: 80px;
  border-radius: 5px 0 0 5px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.5),
    rgba(255, 255, 255, 0.2)
  );
  transition: all 0.5s;
}
footer svg {
  position: absolute;
  top: 12px;
  left: 20px;
}
.close {
  right: 0;
}
.close svg {
  transform: rotate(180deg);
}
footer img {
  position: relative;
  top: 9px;
  border: 2px solid rgba(0, 0, 0, 0);
  margin-right: 20px;
  cursor: pointer;
}
footer img:hover {
  border: 2px solid #a98658;
}
</style>