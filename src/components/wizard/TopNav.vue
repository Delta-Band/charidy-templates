<template>
  <div class="top-nav">
    <section class="left">
      <button>
        <unicon name="arrow-left" class="icon" ></unicon>
        Exit
      </button>
    </section>
    <section class="right">
      <button>
        <unicon name="eye" class="icon" ></unicon>
        Preview
      </button>
      <button>
        <unicon name="save" class="icon" ></unicon>
        Save
      </button>
    </section>
  </div>
</template>

<script>
export default {
  name: "TopNav"
};
</script>

<style lang="scss" scoped>
@import "./colors.scss";
@import "./components.scss";

.top-nav {
  width: 100%;
  flex-grow: 0;
  border-bottom: 1px solid black;
  background-color: rgba(255, 255, 255, 0.79);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  box-sizing: border-box;
}

section {
  display: flex;
}
button {
  @extend .button;
  text-transform: uppercase;
}
</style>