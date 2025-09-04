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
  margin-top: 25px;
  position: relative;
  background-color: rgb(101, 31, 147, 0.3);
  width: 15%;
  height: 330px;
  border-radius: 8px;
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
    bottom: -35px;
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &__image {
    width: 80%;
  }

  @media (max-width: 1200px) {
    height: 300px;
  }

  @media (max-width: 1100px) {
    height: 280px;

    &__descr {
      font-size: 18px;
    }
  }

  @media (max-width: 1000px) {
    height: 250px;

    &__descr {
      font-size: 16px;
    }
  }

  @media (max-width: 900px) {
    height: 230px;

    &__descr {
      bottom: -30px;
      font-size: 14px;
    }
  }

  @media (max-width: 850px) {
    height: 210px;

    &__descr {
      bottom: -25px;
      font-size: 12px;
    }
  }

  @media (max-width: 800px) {
    height: 190px;
  }

  @media (max-width: 750px) {
    width: 80%;
  }
}
</style>
