<template>
  <div class="cover-media">
    <section class="left-top">
      <label>Cover Media</label>
      <p>
        The cover image will be used as a cover for the video
        <br />(you do not have to include a video)
      </p>
    </section>
    <section class="right-top">
      <v-tabs
        v-model="tab"
        background-color="rgba(0, 0, 0, 0)"
      >
        <v-tab class="tab" v-for="item in items" :key="item.tab">
          <v-icon class="icon">{{item.icon}}</v-icon>
          <div class="txt">{{item.tab}}</div>
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="item in items"
          :key="item.tab"
        >
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
export default {
  name: "CoverMedia",
  data() {
    return {
      tab: null,
      items: [
        { tab: "Image", icon: "mdi-image-outline", content: "Drop Image", types:"png / jpg" },
        { tab: "Video", icon: "mdi-play-box-outline", content: "Drop Video", types:"mp4" },
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./components.scss";

.cover-media {
  width: 100%;
  display: flex;
  @extend .section;
}

.left-top {
  width: 40%;
  display: inline-flex;
  flex-direction: column;
  text-align: left;
  padding-right: 10%;
}

.right-top {
  width: 60%;
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
      height: 45px;
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