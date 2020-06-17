<template>
  <div class="cover-media">
    <section class="left-top">
      <label>Cover Media</label>
      <p>
        The cover image will be used as a cover for the video<br />
        (you do not have to include a video)
      </p>
    </section>
    <section class="right-top"></section>
  </div>
</template>

<script>

export default {
  name: 'CoverMedia',
}
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
}

.right-top {
  width: 60%;
}

label {
  @extend .label;
}
</style>