<template>
  <div id="countdown" :class="{ 'portrait': wizardPortrait }">
    <section :class="{
        'top': wizardPortrait,
        'left': !wizardPortrait,
        }">
      <label>
        Countdown Image
        <span class="tag">Advanced</span>
      </label>
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
          <v-btn class="upload-btn" text ripple rounded>Upload from local hard drive</v-btn>
        </div>
      </v-responsive>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Countdown",
  computed: {
    ...mapGetters(["wizardPortrait"])
  }
};
</script>

<style lang="scss" scoped>
@import "./shared-styles/index";

#countdown {
  width: 100%;
  display: flex;
  @extend .section;

  &.portrait {
    flex-direction: column;
  }
}

.left {
  width: 40%;
  display: inline-flex;
  flex-direction: column;
  text-align: left;
  padding-right: 10%;

  &::v-deep p {
    margin-bottom: 20px;
  }
}

.right {
  width: 60%;
}

.top {
  text-align: left;
  margin-bottom: 30px;
}

label {
  @extend .label;
  margin-top: 12px;
}

.tab {
  .txt {
    margin-left: 7px;
    transform: translateY(1px);
  }
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
      padding: 0 4%;
      text-transform: none;
      font-family: inherit;
      letter-spacing: unset;
      font-size: 16px;
      margin-top: 5%;
      background-color: $blue;
      color: white;
    }
  }
}
</style>