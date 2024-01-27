<template>
  <div class="page-container">
    <div class="tab-button">
      <div
        class="tab-btn"
        :class="{ active: activeTab === 'manageSubscriptions' }"
        @click="activeTab = 'manageSubscriptions'"
      >
        Manage Subscriptions
      </div>
      <div
        class="tab-btn"
        :class="{ active: activeTab === 'comparePlans' }"
        @click="activeTab = 'comparePlans'"
      >
        Compare Plans
      </div>
    </div>
    <PlanInfoCard
      v-if="activeTab === 'manageSubscriptions'"
      @changeTab="activeTab = $event"
    />

    <TabulerList v-if="activeTab === 'manageSubscriptions'" />
    <Packages v-if="activeTab === 'comparePlans'" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "subscription",
});

const activeTab = ref("manageSubscriptions");
</script>

<style lang="scss" scoped>
.tab-button {
  display: flex;
  gap: 1rem;
  align-items: center;
  margin: 1rem 0;
}

.tab-btn {
  text-transform: capitalize;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  cursor: pointer;
  padding-bottom: 1rem;
}
.active {
  border-bottom: 0.125rem solid $surface-bg;
  color: $surface-bg;
}
</style>
