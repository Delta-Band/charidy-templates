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
button {
  background: transparent;
  border: none;
  font-size: 15px;
  text-transform: uppercase;
  outline: none;
  cursor: pointer;
  transition: .5s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  padding: 10px 20px;
  border-radius: 3px;
  display: flex;
  align-items: center;

  .icon {
    height: 24px;
    margin-right: 5px;
  }

  &:hover {
    background: rgba(black, 0.1);
  }
}
section {
  display: flex;
}
.right button {
  // margin-left: 30px;
}
</style>