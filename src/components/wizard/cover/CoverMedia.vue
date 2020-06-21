<template>
  <div class="cover-media" :class="{ 'portrait': wizardPortrait }">
    <section :class="{
        'top': wizardPortrait,
        'left': !wizardPortrait,
        }">
      <label>Cover Media</label>
      <p>Add an image that clearly represents your project.</p>
      <p>Choose one that looks good at different sizes. It will appear in different sizes in different places: on your project page, across the Kickstarter website and mobile apps, and (when shared) on social channels.</p>
      <p>You may want to avoid including banners, badges, and text because they may not be legible at smaller sizes.</p>
      <p>Your image should be at least 1024x576 pixels. It will be cropped to a 16:9 ratio.</p>
    </section>
    <section
      :class="{
        'bottom': wizardPortrait,
        'right': !wizardPortrait,
        }"
    >
      <v-tabs v-model="tab" background-color="rgba(0, 0, 0, 0)">
        <v-tab class="tab" v-for="item in items" :key="item.tab">
          <v-icon class="icon">{{item.icon}}</v-icon>
          <div class="txt">{{item.tab}}</div>
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in items" :key="item.tab">
          <v-responsive :aspect-ratio="16/9" class="drop-zone">
            <div class="contnent">
              <div>{{item.content}}</div>
              <div>{{item.types}}</div>
              <v-btn class="upload-btn" text ripple rounded>Upload from local hard drive</v-btn>
            </div>
          </v-responsive>
        </v-tab-item>
      </v-tabs-items>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CoverMedia",
  data() {
    return {
      tab: null,
      items: [
        {
          tab: "Image",
          icon: "mdi-image-outline",
          content: "Drop Image",
          types: "png / jpg"
        },
        {
          tab: "Video",
          icon: "mdi-play-box-outline",
          content: "Drop Video",
          types: "mp4"
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["wizardPortrait"])
  }
};
</script>

<style lang="scss" scoped>
@import "../shared-styles/index";

.cover-media {
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

.right,
.bottom {
  &::v-deep .theme--light.v-tabs-items {
    background-color: rgba(255, 255, 255, 0.5);
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