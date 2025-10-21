<template>
  <div class="first_screen">
    <first-sec />
    <second-sec />
  </div>
</template>

<style lang="scss" scoped>
.first_screen {
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
}

@media (max-width: 768px) {
  .first_screen {
    margin-top: 0;
    flex-direction: column;
    align-items: center;
    padding: 0 1rem;
  }
}
</style>
