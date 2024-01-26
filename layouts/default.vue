<template>
  <div>
    <header>
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/subscription">subscription</nuxt-link>
    </header>

    <div class="main">
      <slot />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
