<template>
  <div class="tabuler-list">
    <div class="list-top">
      <h2>Recent History</h2>
      <div class="download-btn">
        <DownLoadIcon />
        <p>Download All</p>
      </div>
    </div>

    <div class="search-wrapper">
      <div class="filter">
        <p>Show</p>
        <select name="" id="">
          <option value="">10</option>
          <option value="">20</option>
          <option value="">30</option>
          <option value="">40</option>
          <option value="">50</option>
        </select>

        <p>Lists</p>
      </div>

      <div class="search-input">
        <SearchIcon />
        <input type="text" placeholder="Search" />
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
        <tr>
          <td data-label="Account">a few minutes ago</td>
          <td data-label="Due Date">2500</td>
          <td data-label="Amount">Custom</td>
          <td data-label="Period">Bkash</td>
          <td data-label="Period">1254789965653</td>
          <td data-label="Period">Aprroved</td>
          <td data-label="Period"><DownloadIcon /></td>
        </tr>

        <tr>
          <td data-label="Account">28th Nov, 2021</td>
          <td data-label="Due Date">2500</td>
          <td data-label="Amount">Custom</td>
          <td data-label="Period">Bkash</td>
          <td data-label="Period">1254789965653</td>
          <td data-label="Period">Aprroved</td>
          <td data-label="Period"><DownloadIcon /></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import DownloadIcon from "./icons/DownloadIcon.vue";
import SearchIcon from "./icons/SearchIcon.vue";
</script>

<style lang="scss" scoped>
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

table th,
table td {
  padding: 0.625em;
  text-align: center;
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
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: 0.8em;
    text-align: right;
  }

  table td::before {
    /*
    * aria-label has no advantage, it won't be read inside a table
    content: attr(aria-label);
    */
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
}
</style>
