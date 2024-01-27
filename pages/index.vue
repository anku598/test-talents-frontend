<template>
  <div class="homepage">
    <h2>Welcome To Test Talents</h2>
    <nuxt-link class="btn" to="/subscription">Go to Biling Page</nuxt-link>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.homepage {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.btn {
  @include commonButton(#fff, $surface-bg);
}
h2 {
  font-size: 2rem;
  font-weight: 500;
  line-height: 2.5rem;
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
