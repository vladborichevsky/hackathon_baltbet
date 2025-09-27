<template>
  <div class="second_screen">
    <my-timeline />
    <prizes-block />
    <my-footer />
  </div>
</template>

<style lang="scss" scoped>
.second_screen {
  padding-bottom: 65px;
}

@media (max-width: 768px) {
  .second_screen {
    padding-bottom: 20px;
  }
}
</style>
