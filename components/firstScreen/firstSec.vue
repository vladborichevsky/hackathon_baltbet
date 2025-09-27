<template>
  <section class="first-section" aria-labelledby="rules-title">
    <img
      src="/logo_hackathon.webp"
      class="first-section__logo first-section__logo--hack"
      alt="Логотип хакатона"
    />
    <h3 class="first-section__date">15–22 августа</h3>
    <img
      src="/logo_baltbet.webp"
      class="first-section__logo first-section__logo--baltbet"
      alt="Логотип Baltbet"
    />
    <img src="/el_1.webp" class="first-section__decor" alt="" role="presentation" />

    <div class="first-section__bottom">
      <h2 id="rules-title" class="first-section__title">Правила</h2>
      <p class="first-section__descr">
        В первый день мероприятия участники примут участие в жеребьевке, на которой будет
        определено, в каких командах они будут выступать. Ознакомиться с полными правилами можно,
        нажав на кнопку ниже.
      </p>
      <a
        href="https://docs.google.com/document/d/1WSIJdJhG1DXAI3nhwLXfxXNl8GVqOcssPQ_DBKKYQXs/edit?tab=t.0"
        target="_blank"
        rel="noopener noreferrer"
        class="first-section__btn-link"
      >
        <my-button class="first-section__btn">правила</my-button>
      </a>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.first-section {
  width: 45%;

  &__logo {
    &--hack {
      width: 90%;
    }

    &--baltbet {
      display: block;
      width: 110px;
      margin-top: 15px;
    }
  }

  &__decor {
    width: 45%;
    position: relative;
    left: 30%;
  }

  &__bottom {
    transform: translateY(-20%);
  }

  &__descr {
    font-size: var(--descr-txt-fs-big);
    color: #fff;
  }

  &__btn {
    margin-top: 25px;
  }
}

@media (max-width: 992px) {
  .first-section__descr {
    font-size: var(--descr-txt-fs-mid);
  }
}

@media (max-width: 768px) {
  .first-section {
    width: 95%;
    text-align: justify;
  }
}
</style>
