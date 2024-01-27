<template>
  <div class="tabuler-list">
    <div class="list-top">
      <h2>Recent History</h2>
      <div class="download-btn">
        <DownloadIcon class="download-svg" />
        <p>Download All</p>
      </div>
    </div>

    <div class="search-wrapper">
      <div class="filter">
        <p>Show</p>
        <select>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
        </select>

        <p>Lists</p>
      </div>

      <div class="search-input">
        <SearchIcon />
        <input type="text" v-model="searchQuery" placeholder="Search" />
      </div>
    </div>

    <table>
      <thead>
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Amount</th>
          <th scope="col">Plan</th>
          <th scope="col">Payment Type</th>
          <th scope="col">Transection ID</th>
          <th scope="col">Status</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in paginatedHistoryData" :key="item.id">
          <td data-label="Date">{{ item.date }}</td>
          <td data-label="Amount">{{ item.amount }}</td>
          <td data-label="Plan">{{ item.plan }}</td>
          <td data-label="Payment Type">{{ item.paymentType }}</td>
          <td data-label="Transaction ID">{{ item.transactionId }}</td>
          <td class="action">
            <p
              class="status"
              :class="{
                'status-rejected': item.status === 'Rejected',
                'status-pending': item.status === 'Pending',
                'status-approved': item.status === 'Approved',
              }"
            >
              {{ item.status }}
            </p>
          </td>

          <td data-label="Action"><DownloadIcon class="download-svg" /></td>
        </tr>
      </tbody>
    </table>

    <div class="history-footer">
      <div class="total-result">
        <p>
          Showing {{ paginatedHistoryData.length }} of
          {{ filteredHistoryData.length }} results
        </p>
      </div>

      <nav aria-label="Page navigation">
        <ul class="pagination">
          <li class="page-item" v-for="page in totalPages" :key="page">
            <a class="page-link" href="#" @click="setCurrentPage(page)">{{
              page
            }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup>
import DownloadIcon from "./icons/DownloadIcon.vue";
import SearchIcon from "./icons/SearchIcon.vue";

import { useHistoryStore } from "@/store/history";

const historyStore = useHistoryStore();

const searchQuery = ref("");
const entriesPerPage = ref(10);
const currentPage = ref(1);

onMounted(() => {
  historyStore.fetchData();
});

const filteredHistoryData = computed(() => {
  if (!searchQuery.value) {
    return historyStore.historyData;
  }
  return historyStore.historyData.filter((item) => {
    return Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });
});

const paginatedHistoryData = computed(() => {
  const start = (currentPage.value - 1) * entriesPerPage.value;
  const end = start + entriesPerPage.value;
  return filteredHistoryData.value.slice(start, end);
});

// Watcher to reset to first page when search query changes
watch(searchQuery, () => {
  currentPage.value = 1;
});

// Method to change the current page
function setCurrentPage(page) {
  currentPage.value = page;
}

// Computed property to calculate the total number of pages
const totalPages = computed(() => {
  return Math.ceil(filteredHistoryData.value.length / entriesPerPage.value);
});
</script>

<style lang="scss" scoped>
select {
  padding: 0.5rem;
  border-radius: 0.5rem;
}

.history-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;

  .pagination {
    display: flex;
    gap: 1rem;
  }
}

.filter {
  p {
    font-size: 0.875rem;
    color: $gray-600;
  }
}

.action {
  text-align: center !important;
}

.download-svg {
  fill: $gray-400;
}
.search-input {
  position: relative;
  border: 1px solid #ccc;
  overflow: hidden;
}

.search-input input[type="text"] {
  width: 100%;
  padding: 10px 40px;
  border: none;
  outline: none;
  font-size: 1rem;
}

.search-input svg {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  fill: #888;
}

.search-input SearchIcon {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  fill: #888;
}
table {
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
}

table tr {
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  padding: 0.35em;
}

table th {
  background: $gray-100;
  padding: 0.5rem 1rem;
}

table th,
table td {
  padding: 0.625em;
  text-align: left;
  padding: 1.2rem 1rem;
}
table td {
  color: $gray-600;
  font-weight: 400;
}

table th {
  font-size: 0.85em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

@media screen and (max-width: 600px) {
  table {
    border: 0;
  }

  table caption {
    font-size: 1.3em;
  }

  table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  table tr {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: 0.625em;
  }

  table td {
    border-bottom: 1px solid $gray-100;
    display: block;
    font-size: 0.8em;
    text-align: right;
  }

  table td::before {
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }

  table td:last-child {
    border-bottom: 0;
  }
}

.search-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;

  .filter {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
}
.tabuler-list {
  box-shadow: $box-shadow;
  background: $primary-body-bg;
  padding: 1.5rem;
  border-radius: 1.5rem;
  margin: 1.5rem 0;
}
.list-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.download-btn {
  @include commonButton(#000, #fff);
  border: 1px solid #000;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>
