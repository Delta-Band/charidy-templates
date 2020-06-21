<template>
  <v-app>
    <div id="wizard">
      <TopNav />
      <div id="wizard-content">
        <Steps />
        <router-view />
      </div>
    </div>
  </v-app>
</template>

<script>
import TopNav from "./TopNav.vue";
import Steps from "./steps/Steps.vue";
import { mapActions } from "vuex";

export default {
  name: "Wizard",
  components: {
    TopNav,
    Steps
  },
  created() {
    window.addEventListener("resize", this.onRisize);
  },
  destroyed() {
    window.removeEventListener("resize", this.onRisize);
  },
  mounted() {
    this.wizardUpdatePortrait(this.$el.clientWidth);
  },
  methods: {
    ...mapActions(["wizardUpdatePortrait"]),
    onRisize() {
      this.wizardUpdatePortrait(this.$el.clientWidth);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./shared-styles/index";

#wizard {
  width: 100%;
  height: 100%;
  background-color: rgb(238, 238, 238);
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  & >>> .v-menu__content {
    color: red;
  }
}

#wizard-content {
  width: 100%;
  overflow: auto;
  flex-grow: 1;
  box-sizing: border-box;
}
</style>

<style lang="scss" >
.v-menu__content {
  text-align: left;
}
</style>