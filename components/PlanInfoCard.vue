<template>
  <div class="plan-info-card">
    <div class="card-title">Current Plan</div>

    <div class="info-wrapper">
      <div class="plan-name">
        <div class="plan-name-text">Basic</div>
        <div class="plan-price">0 USD/Month</div>
      </div>

      <div class="feature-list">
        <ul>
          <li>
            <div class="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
              >
                <path
                  d="M6.55879 10.935L3.91859 8.29476L3.01953 9.18749L6.55879 12.7267L14.1565 5.12906L13.2637 4.23633L6.55879 10.935Z"
                  fill="#1D4354"
                />
              </svg>
            </div>
            <p>5 Assessment Invitations Per Month</p>
          </li>

          <li>
            <div class="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
              >
                <path
                  d="M6.55879 10.935L3.91859 8.29476L3.01953 9.18749L6.55879 12.7267L14.1565 5.12906L13.2637 4.23633L6.55879 10.935Z"
                  fill="#1D4354"
                />
              </svg>
            </div>
            <p>5 Assessment Invitations Per Month</p>
          </li>

          <li>
            <div class="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
              >
                <path
                  d="M6.55879 10.935L3.91859 8.29476L3.01953 9.18749L6.55879 12.7267L14.1565 5.12906L13.2637 4.23633L6.55879 10.935Z"
                  fill="#1D4354"
                />
              </svg>
            </div>
            <p>5 Assessment Invitations Per Month</p>
          </li>

          <li>
            <div class="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
              >
                <path
                  d="M6.55879 10.935L3.91859 8.29476L3.01953 9.18749L6.55879 12.7267L14.1565 5.12906L13.2637 4.23633L6.55879 10.935Z"
                  fill="#1D4354"
                />
              </svg>
            </div>
            <p>5 Assessment Invitations Per Month</p>
          </li>
        </ul>

        <ul>
          <li>
            <div class="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
              >
                <path
                  d="M6.55879 10.935L3.91859 8.29476L3.01953 9.18749L6.55879 12.7267L14.1565 5.12906L13.2637 4.23633L6.55879 10.935Z"
                  fill="#1D4354"
                />
              </svg>
            </div>
            <p>5 Assessment Invitations Per Month</p>
          </li>

          <li>
            <div class="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
              >
                <path
                  d="M6.55879 10.935L3.91859 8.29476L3.01953 9.18749L6.55879 12.7267L14.1565 5.12906L13.2637 4.23633L6.55879 10.935Z"
                  fill="#1D4354"
                />
              </svg>
            </div>
            <p>5 Assessment Invitations Per Month</p>
          </li>

          <li>
            <div class="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
              >
                <path
                  d="M6.55879 10.935L3.91859 8.29476L3.01953 9.18749L6.55879 12.7267L14.1565 5.12906L13.2637 4.23633L6.55879 10.935Z"
                  fill="#1D4354"
                />
              </svg>
            </div>
            <p>5 Assessment Invitations Per Month</p>
          </li>
        </ul>
      </div>

      <div class="limit-info">
        <div class="number-of-limit">5</div>
        <div class="limit-text">Current Invitation Limit</div>
        <div class="date-txt">Expired On : 6th September, 2024</div>
      </div>
    </div>

    <button class="btn" @click="goToComparePlans">Upgrade Plan</button>
  </div>
</template>

<script setup>
const emit = defineEmits(["changeTab"]);

function goToComparePlans() {
  emit("changeTab", "comparePlans");
}
</script>

<style lang="scss" scoped>
.btn {
  @include commonButton(#fff, $surface-bg);
}
.plan-info-card {
  box-shadow: $box-shadow;
  background: $primary-body-bg;
  padding: 1.5rem;
  border-radius: 1.5rem;
}

.card-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  line-height: 2rem;
  font-weight: 600;
  text-transform: capitalize;
  color: $gray-600;
}

.info-wrapper {
  display: flex;
  gap: 1.5rem;
  justify-content: space-between;
  border: 1px solid $gray-200;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
}

.plan-name,
.limit-info {
  flex: 1;
}

.plan-name {
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .plan-name-text {
    font-size: 2rem;
    line-height: 2.5rem;
    color: $gray-600;
    margin-bottom: 0.7rem;
    padding-left: 1.5rem;
  }

  .plan-price {
    font-size: 1.25rem;
    line-height: 1.8rem;
    color: $gray-600;
    padding-left: 1.5rem;
  }
}

.feature-list {
  display: flex;
  gap: 1.2rem;
  flex: 2;
  padding: 1.5rem 0;
  ul {
    list-style: none;
    li {
      display: flex;
      gap: 0.5rem;

      p {
        font-size: 0.87rem;
        color: $gray-500;
      }
    }
  }
}

.limit-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  background: $green-100;
  padding: 1.5rem;
  text-align: center;

  .number-of-limit {
    width: 50px;
    height: 50px;
    font-size: 2rem;
    line-height: 2.5rem;
    color: $surface-bg;
    font-weight: 600;
    border: 2px solid $surface-bg;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .limit-text {
    font-size: 1.25rem;
    color: $gray-600;
    line-height: 1.8rem;
  }

  .date-txt {
    color: #1d4354;
  }
}
</style>
