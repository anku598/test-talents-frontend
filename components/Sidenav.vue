<template>
  <div class="side-nav-container">
    <div class="logo">
      <img src="@/assets/images/logo.svg" alt="Logo" />
    </div>
    <nav>
      <nuxt-link to="/">
        <HomeIcon />
        <p>Overview</p>
      </nuxt-link>
      <nuxt-link to="/subscription">
        <PlansAndBillingIcon />
        <p>Plans And Billing</p>
      </nuxt-link>
    </nav>
  </div>
</template>

<script setup>
import HomeIcon from "./icons/HomeIcon.vue";
import PlansAndBillingIcon from "./icons/PlansAndBillingIcon.vue";
</script>

<style lang="scss" scoped>
.side-nav-container {
  height: 100%;
  background: $primary-body-bg;
  box-shadow: $box-shadow;
  padding: 2.5rem 1rem;
  max-width: 15.5rem;
  width: 100%;
}

.logo {
  margin-bottom: 2rem;
}

nav {
  display: flex;
  flex-direction: column;
  text-transform: capitalize;
  line-height: 1.5rem;
  gap: 0.88rem;
  a {
    color: $gray-400;
    display: flex;
    padding: 0.75rem 1rem;
    align-items: flex-start;
    gap: 0.9rem;
    align-self: stretch;
  }

  svg {
    fill: $gray-400;
  }
}

.router-link-exact-active {
  background: $green-100;
  border-radius: 0.5rem;
  color: $surface-bg;

  svg {
    fill: $surface-bg;
  }
}
</style>
