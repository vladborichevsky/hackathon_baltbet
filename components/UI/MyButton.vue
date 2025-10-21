<template>
  <button>
    <slot />
  </button>
</template>

<style lang="scss" scoped>
button {
  cursor: pointer;
  display: block;
  width: 35rem;
  color: var(--btn-txt);
  font-weight: 900;
  font-size: 2.8rem;
  line-height: 1;
  padding: 1.2rem 0;
  text-transform: uppercase;
  background-color: var(--main-color);
  border-radius: 0.8rem;
  border: none;
}

button:hover {
  transition: all 0.3s;
  box-shadow: 0 0 15px 5px rgba(194, 214, 235, 0.4);
}
</style>
