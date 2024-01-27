<template>
  <div>
    <header>
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/subscription">Payments & Biling</nuxt-link>
    </header>

    <div class="main">
      <slot />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  gap: 1rem;
  a {
    text-transform: capitalize;
    font-size: 1.2rem;
  }
}
</style>
