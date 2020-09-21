<template>
  <div class="about">
    <button @click="editHandle">修改</button>
    <button @click="submitHandle">提交</button>
    <h1 class="name">
      {{ name }}
      <p>明日复明日</p>
    </h1>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { Login } from "../api/login";

export default {
  computed: {
    ...mapState("shop", ["name"]),
  },
  methods: {
    ...mapActions("shop", ["asyncUpdateName"]),
    editHandle() {
      this.asyncUpdateName("你好明天");
    },
    submitHandle() {
      Login()
        .then((res) => {
          message.success("登录成功");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style lang="less" scoped>
@import "../style/styles.less";

.name {
  color: #f00;
  p {
    font-size: 50px;
    font-weight: bold;
    color: #000;
    .flexCenter();
  }
}
</style>
