<template>
  <section class="prizes-section" aria-labelledby="prizes-title">
    <h2 id="prizes-title" class="prizes-section__title">Призы и подарки</h2>

    <div class="prizes-section__list">
      <prize-card v-for="(card, index) in cards" :key="index" :descr="card.descr" :img="card.img" />
    </div>

    <img src="/el_3.webp" class="prizes-section__decor" alt="" role="presentation" />
  </section>
</template>

<script setup>
const cards = [
  { img: '/prizes_pic/mck_5.webp', descr: 'Выходной' },
  { img: '/prizes_pic/mck_1.webp', descr: 'Футболка' },
  { img: '/prizes_pic/mck_3.webp', descr: 'Плед' },
  { img: '/prizes_pic/mck_4.webp', descr: 'Сертификат' },
  { img: '/prizes_pic/mck_2.webp', descr: 'Ланьярд' },
  { img: '/prizes_pic/mck_6.webp', descr: 'Набор пива' },
]
</script>

<style lang="scss" scoped>
.prizes-section {
  margin-top: 5rem;
  position: relative;

  &__title {
    margin: 0 auto;
  }

  &__list {
    display: flex;
    justify-content: space-between;
  }

  &__decor {
    position: absolute;
    top: -5%;
    left: -30%;
    width: 40%;
    z-index: -5;
  }
}

@media (max-width: 768px) {
  .prizes-section {
    &__list {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      row-gap: 2rem;
      justify-items: center;
    }

    &__title {
      text-align: center;
    }
  }
}

@media (max-width: 576px) {
  .prizes-section__list {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
