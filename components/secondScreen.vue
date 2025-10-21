<template>
  <div class="second_screen">
    <my-timeline />
    <prizes-block />
    <my-footer />
  </div>
</template>

<style lang="scss" scoped>
.second_screen {
  padding-bottom: 6.5rem;
}

@media (max-width: 768px) {
  .second_screen {
    padding-bottom: 2rem;
  }
}
</style>
