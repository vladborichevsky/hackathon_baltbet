<template>
  <footer class="footer-section">
    <!-- Кнопка для мобильных -->
    <div class="footer-section__btn footer-section__btn--mobile">
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLScJ3LiEXgmgTAdiq1UZKsTd10O-OpZyuOd4HnNfWjmCZC719Q/viewform"
        target="_blank"
        rel="noopener noreferrer"
        class="footer-section__link"
      >
        <my-button>принять участие</my-button>
      </a>
    </div>

    <!-- Даты приёма -->
    <img src="/admission_dates.webp" class="footer-section__image" alt="" role="presentation" />

    <!-- Кнопка для десктопа -->
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLScJ3LiEXgmgTAdiq1UZKsTd10O-OpZyuOd4HnNfWjmCZC719Q/viewform"
      target="_blank"
      rel="noopener noreferrer"
      class="footer-section__btn footer-section__btn--desktop"
    >
      <my-button>принять участие</my-button>
    </a>

    <!-- Ссылка на FAQ -->
    <a
      href="https://docs.google.com/document/d/1L16Prm_Q3XneL5C9VsJmXla5l0fhWvZEJnST90_qHH0/edit?tab=t.0"
      target="_blank"
      rel="noopener noreferrer"
      class="footer-section__link"
    >
      <img src="/faq.webp" class="footer-section__image" alt="FAQ" />
    </a>
  </footer>
</template>

<style lang="scss" scoped>
.footer-section {
  margin-top: 9.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;

  &__btn--mobile {
    display: none;
  }

  &__image {
    display: block;
    width: 20rem;
  }
}

@media (max-width: 768px) {
  .footer-section {
    flex-direction: column;
    justify-content: space-between;

    &__btn--desktop {
      display: none;
    }

    &__btn--mobile {
      display: block;
      margin: 1rem 0;
    }
  }
}
</style>
