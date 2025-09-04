<template>
  <button>
    <slot />
  </button>
</template>

<style lang="scss" scoped>
button {
  cursor: pointer;
  display: block;
  width: 300px;
  color: var(--btn-txt);
  font-weight: 900;
  font-size: 22px;
  line-height: 22px;
  padding: 10px 0;
  text-transform: uppercase;
  background-color: var(--main-color);
  border-radius: 8px;
  border: none;
}

button:hover {
  transition: all 0.3s;
  box-shadow: 0 0 15px 5px rgba(194, 214, 235, 0.4);
}

@media (max-width: 1000px) {
  button {
    width: 280px;
    font-size: 20px;
  }
}

@media (max-width: 900px) {
  button {
    width: 260px;
    font-size: 20px;
  }
}

@media (max-width: 600px) {
  button {
    width: 230px;
    font-size: 18px;
  }
}

@media (max-width: 500px) {
  button {
    width: 200px;
    font-size: 16px;
  }
}
</style>
