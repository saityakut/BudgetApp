<script>
  import Header from "./components/header.svelte";
  import Sidebar from "./components/sidebar.svelte";
  import TransactionCardList from "./components/transaction_card_list.svelte";
  import TransactionHeader from "./components/transaction_header.svelte";
  import TransactionTableList from "./components/transaction_table_list.svelte";

  let view = "card";
</script>

<div class="p-1">
  <!-- Header -->
  <Header />
  <div class="d-flex flex-column flex-sm-row">
    <!-- Sidebar -->
    <Sidebar {view} on:handleViewSelect={(e) => (view = e.detail)} />
    <div class="flex-grow-1 pt-3">
      <!-- Transaction Header -->
      <TransactionHeader />
      <div class:hide={view === "table"}>
        <!-- TransactionCardList -->
        <TransactionCardList />
      </div>
      <div class:hide={view === "card"} class="w-75 m-auto">
        <!-- TransactionTableList -->
        <TransactionTableList />
      </div>
    </div>
  </div>
</div>

<style>
  .hide {
    display: none;
  }
</style>
