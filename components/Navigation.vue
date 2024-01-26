<template>
  <div class="navbar">
    <nuxt-link to="/">
      <QuestionIcon class="ques-icon" />
    </nuxt-link>
    <nuxt-link to="/subscription">
      <img class="avatar" src="../assets/images/avatar.png" alt="Avatar Icon" />
      <div class="profile-name">
        <p>Hi,</p>
        <span>Monir</span>
      </div>

      <div class="dropdown">
        <ChevronDownicon />
      </div>
    </nuxt-link>
  </div>
</template>

<script setup>
import QuestionIcon from "./icons/QuestionIcon.vue";
import ChevronDownicon from "./icons/ChevronDownicon.vue";
</script>

<style lang="scss" scoped>
.navbar {
  background: $primary-body-bg;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 1.5rem;
  border-radius: 0.75rem;
  padding: 1rem 2rem 1rem 1rem;
  box-shadow: $box-shadow;
  width: 100%;
  align-items: center;
  margin: 1rem 0;

  a {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .profile-name {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    line-height: 1.8rem;
    color: $gray-600;
    p {
      text-transform: capitalize;
    }
    span {
      text-transform: capitalize;
      font-weight: 700;
      margin-left: 0.5rem;
    }
  }
}

.ques-icon {
  fill: $gray-400;
}
</style>
