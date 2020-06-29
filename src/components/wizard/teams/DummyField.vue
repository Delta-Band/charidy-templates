<template>
  <div class="dummy-title" :class="{
        'portrait': wizardPortrait,
        }">
    <section :class="{
        'top': wizardPortrait,
        'left': !wizardPortrait,
        }">
      <div class="label">
        Title
      </div>
      <p>Lorem Ipsum...</p>
      <span class="tag required">Required</span>
    </section>
    <section
      :class="{
        'bottom': wizardPortrait,
        'right': !wizardPortrait,
        }"
    >
      <div class="input-title">Title</div>
      <v-text-field height="50" class="text-input" counter color="#000"></v-text-field>
      <Tip class="text-input-tip">Title tip...</Tip>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Tip from "@/shared-components/Tip";

export default {
  name: "DummyField",
  components: {
    Tip
  },
  computed: {
    ...mapGetters(["wizardPortrait"])
  }
};
</script>

<style lang="scss" scoped>
@import "@/shared-styles/index";

.dummy-title {
  width: 100%;
  display: flex;
  @extend .section;
}

.text-input {
  @extend .text-input;
  flex-grow: 1;
}

.text-input-tip {
  margin-top: -12px;
  margin-bottom: 32px;
}

.tag {
  @extend .tag;
}
</style>