<template>
  <section class="what-section" aria-labelledby="what-title">
    <h2 id="what-title" class="what-section__title">Что это такое?</h2>

    <p class="what-section__descr">
      Хакатон — это креативное мероприятие, в ходе которого участники объединяются в команды, чтобы
      за ограниченное время разработать инновационные идеи и решения, превращая свои мысли в
      реальные проекты, а также весело провести время в дружеской атмосфере сотрудничества и
      творчества.
      <br /><br />
      Цель нашего мероприятия — создать креативную атмосферу для раскрытия талантов сотрудников, где
      увлекательное тестирование продуктов «БАЛТБЕТ» и командная работа помогут укрепить
      корпоративный дух, пробудить живой интерес к компании и выявить самых вдохновленных коллег для
      дальнейшего развития наших сервисов.
    </p>

    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLScJ3LiEXgmgTAdiq1UZKsTd10O-OpZyuOd4HnNfWjmCZC719Q/viewform"
      target="_blank"
      rel="noopener noreferrer"
      class="what-section__btn-link"
    >
      <my-button class="what-section__btn">принять участие</my-button>
    </a>

    <img src="/el_2.webp" class="what-section__decor" alt="" role="presentation" />
  </section>
</template>

<style lang="scss" scoped>
.what-section {
  position: relative;
  width: 45%;
  margin-top: 30px;

  &__descr {
    font-size: var(--descr-txt-fs-big);
    color: #ffff;
  }

  &__decor {
    display: block;
    width: 60%;
    position: absolute;
    bottom: -25%;
    left: 50%;
    z-index: -5;
  }

  &__btn {
    margin-top: 25px;
  }
}

@media (max-width: 1000px) {
  .what-section__descr {
    font-size: 16px;
  }
}

@media (max-width: 750px) {
  .what-section {
    width: 80%;
  }
}

@media (max-width: 450px) {
  .what-section__decor {
    bottom: -5%;
  }
}
</style>
