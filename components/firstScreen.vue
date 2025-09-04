<template>
  <div class="first_screen">
    <first-sec />
    <second-sec />
  </div>
</template>

<style lang="scss" scoped>
.first_screen {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
}

@media (max-width: 750px) {
  .first_screen {
    margin-top: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
