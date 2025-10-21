<template>
  <article class="prize-card">
    <img :src="img" alt="" class="prize-card__image" />
    <p class="prize-card__descr">{{ descr }}</p>
  </article>
</template>

<script setup lang="ts">
defineProps<{ descr: string; img: string }>()
</script>

<style lang="scss" scoped>
.prize-card {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2.5rem;
  position: relative;
  background-color: rgb(101, 31, 147, 0.3);
  width: 15%;
  padding: 5% 0;
  border-radius: 0.8rem;
  box-shadow: 0 0 25px 5px rgba(194, 214, 235, 0.4);

  &::before {
    content: '';
    position: absolute;
    background-color: var(--main-color);
    width: 12px;
    height: 12px;
    top: 10px;
    right: 10px;
    border-radius: 100%;
  }

  &:hover {
    box-shadow: 0 0 40px 15px rgba(194, 214, 235, 0.4);

    .prize-card__image {
      transition: all 0.5s;
      transform: scale(1.1);
    }
  }

  &__descr {
    position: absolute;
    width: 100%;
    text-align: center;
    bottom: -3.5rem;
    color: #fff;
    font-size: 2rem;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &__image {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 80%;
    padding: 15% 0;

    &::before {
      width: 8px;
      height: 8px;
      top: 8px;
      right: 8px;
    }
  }
}
</style>
