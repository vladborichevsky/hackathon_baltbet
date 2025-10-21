<template>
  <section class="timeline-section" aria-label="Таймлайн">
    <img
      src="/timeline.webp"
      class="timeline-section__image timeline-section__image--desktop"
      alt=""
      role="presentation"
    />
    <img
      src="/timeline_mid_1.webp"
      class="timeline-section__image timeline-section__image--mid timeline-section__image--mid-left"
      alt=""
      role="presentation"
    />
    <img
      src="/timeline_mid_2.webp"
      class="timeline-section__image timeline-section__image--mid timeline-section__image--mid-right"
      alt=""
      role="presentation"
    />
    <img
      src="/timeline_mob.webp"
      class="timeline-section__image timeline-section__image--mobile"
      alt=""
      role="presentation"
    />
  </section>
</template>

<style lang="scss" scoped>
.timeline-section {
  &__image {
    display: block;

    &--desktop {
      width: 100%;
      margin: 0 auto;
      margin-bottom: 2rem;
    }

    &--mid,
    &--mobile {
      display: none;
    }

    &--mid {
      width: 80%;
      margin-top: 2rem;
    }

    &--mid-left {
      margin-right: auto;
    }

    &--mid-right {
      margin-left: auto;
    }

    &--mobile {
      width: 75%;
      margin: 0 auto;
      margin-top: 2rem;
    }
  }
}

@media (max-width: 992px) {
  .timeline-section__image {
    &--desktop {
      display: none;
    }

    &--mid {
      display: block;
    }
  }
}

@media (max-width: 576px) {
  .timeline-section__image {
    &--mid {
      display: none;
    }

    &--mobile {
      display: block;
    }
  }
}
</style>
