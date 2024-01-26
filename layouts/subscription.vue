<template>
  <div class="subscription-layout-container">
    <Sidenav />
    <div class="main-layout">
      <Navigation />
      <div class="page-container">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.subscription-layout-container {
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  background: $body-background;
}

.main-layout {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.page-container {
  flex: 1;
  overflow: auto;
}
</style>
