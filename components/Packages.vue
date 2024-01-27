<template>
  <div class="packages-container">
    <div class="section-top">
      <div class="section-title">Compare Plans</div>
      <div class="sub-txt">
        We’ll credit your account if you need to downgrade during the billing
        cycle.
      </div>
    </div>

    <div class="tab-buttons">
      <button
        class="tab-button"
        :class="{ active: activeCurrency === 'BDT' }"
        @click="activeCurrency = 'BDT'"
      >
        BDT
      </button>

      <button
        class="tab-button"
        :class="{ active: activeCurrency === 'USD' }"
        @click="activeCurrency = 'USD'"
      >
        USD
      </button>

      <button
        class="tab-button"
        :class="{ active: activePlan === 'Monthly' }"
        @click="activePlan = 'Monthly'"
      >
        Monthly
      </button>

      <button
        class="tab-button"
        :class="{ active: activePlan === 'Yearly' }"
        @click="activePlan = 'Yearly'"
      >
        Yearly
      </button>
    </div>

    <div class="packages-card-wrapper">
      <div class="single-package-card">
        <div class="plan-name">
          <div class="plan-name-text">Basic</div>
          <div class="plan-price">0 USD/Month</div>
        </div>

        <div class="feature-list">
          <div class="plan-txt">
            It’s Free, Try out skills-based hiring From Now.
          </div>
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
        </div>
      </div>

      <div class="single-package-card popular-package">
        <div class="plan-name">
          <div class="plan-name-text">Premium</div>
          <div class="plan-price">100 USD/Month</div>
        </div>

        <div class="feature-list">
          <div class="plan-txt">
            Great for Medium teams looking to hire best talent, faster.
          </div>
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
        </div>
      </div>

      <div class="single-package-card">
        <div class="plan-name">
          <div class="plan-name-text">Business</div>
          <div class="plan-price">400 USD/Month</div>
        </div>

        <div class="feature-list">
          <div class="plan-txt">
            It’s Free, Try out skills-based hiring From Now.
          </div>
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

          <div class="btn">upgrade</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const activeCurrency = ref("BDT");
const activePlan = ref("Monthly");
</script>

<style lang="scss" scoped>
.btn {
  @include commonButton(#fff, $surface-bg);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
}

.plan-price {
  font-size: 1.5rem;
}
.tab-buttons {
  margin: 2.5rem 0;
  text-align: center;
  button {
    @include commonButton($gray-700, #fff);
    border-radius: 0rem 0.5rem 0.5rem 0rem;
    border: 1px solid $gray-300;
    text-transform: uppercase;
    &:nth-child(2) {
      margin-right: 1rem;
    }
  }
  .active {
    @include commonButton(#fff, $surface-bg);
    border-radius: 0.5rem 0rem 0rem 0.5rem;
    text-transform: uppercase;
  }
}

.packages-card-wrapper {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.single-package-card {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.plan-name {
  border-radius: 1.78769rem 1.78769rem var(--Size-None, 0rem)
    var(--Size-None, 0rem);
  background: $gray-100;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.4rem;
  padding: 2.43rem 5.4rem;
  font-size: 2rem;
  font-weight: 700;
  color: $gray-600;
}

.popular-package {
  .feature-list {
    border: 2px solid $gray-600;
    border-radius: 0 0 2rem 2rem;
  }
  .plan-name {
    background: $gray-600;
    color: #fff;
  }
}

.plan-txt {
  text-align: center;
  color: #1d4354;
  font-size: 0.99rem;
  line-height: 1.35rem;
  font-weight: 600;
  margin: 2rem 0;
}
.packages-container {
  box-shadow: $box-shadow;
  background: $primary-body-bg;
  padding: 1.5rem;
  border-radius: 1.5rem;
}

.feature-list {
  background: #f9fafa;
  box-shadow: $box-shadow;
  padding: 1.13rem 2.85rem;
}

.section-top {
  text-align: center;
  margin-bottom: 0.5rem;
  .section-title {
    font-size: 2rem;
    color: $gray-600;
    text-transform: capitalize;
    font-weight: 600;
  }

  .sub-txt {
    font-size: 1rem;
    color: $gray-600;
    font-weight: 400;
  }
}
.feature-list {
  ul {
    li {
      display: flex;
      gap: 0.7rem;

      p {
        font-size: 0.87rem;
        color: $gray-500;
      }
    }
  }
}
</style>
