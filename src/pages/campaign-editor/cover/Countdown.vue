<template>
  <div id="countdown" :class="{ 'portrait': wizardPortrait }">
    <section :class="{
        'top': wizardPortrait,
        'left': !wizardPortrait,
        }">
      <div class="label">
        Countdown Image
        <!-- <span class="tag">Advanced</span> -->
      </div>
      <p>Lorem Ipsum...</p>
    </section>
    <section
      :class="{
        'bottom': wizardPortrait,
        'right': !wizardPortrait,
        }"
    >
      <v-responsive :aspect-ratio="16/9" class="drop-zone">
        <div class="contnent">
          <div>Drop Image</div>
          <div>png / jpg</div>
          <v-btn class="upload-btn" text ripple rounded outlined>Upload</v-btn>
        </div>
      </v-responsive>
      <Tip>Countdown tip...</Tip>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Tip from "@/shared-components/Tip";

export default {
  name: "Countdown",
  components: {
    Tip,
  },
  computed: {
    ...mapGetters(["wizardPortrait"])
  }
};
</script>

<style lang="scss" scoped>
@import '@/shared-styles/index';

#countdown {
  width: 100%;
  display: flex;
  @extend .section;
}

.drop-zone {
  padding: 0;
  background-color: rgba(255, 255, 255, 0.5);

  .contnent {
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    .upload-btn {
      height: 40px;
      padding: 0 45px;
      text-transform: none;
      font-family: inherit;
      letter-spacing: unset;
      font-size: 16px;
      margin-top: 5%;
      border: 1px solid $greyDark;
    }
  }
}
</style>