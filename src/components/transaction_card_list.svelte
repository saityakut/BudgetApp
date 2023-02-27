<script>
  import TransactionCard from "./transaction_card.svelte";
  import {
    transactionStore,
    selectedTypeStore,
    incomeStore,
    investmentStore,
    expenseStore,
    searchStore,
  } from "../store";
  import { fly, fade, slide, scale } from "svelte/transition";
  import { flip } from "svelte/animate";
  $: transactionList = $transactionStore;
  $: if ($selectedTypeStore === "all") {
    transactionList = $transactionStore;
  } else if ($selectedTypeStore === "Income") {
    transactionList = $incomeStore;
  } else if ($selectedTypeStore === "Expenses") {
    transactionList = $expenseStore;
  } else if ($selectedTypeStore === "Investments") {
    transactionList = $investmentStore;
  }

  $: visibleTransactions = $searchStore
    ? transactionList.filter((transaction) => {
        return (
          transaction.name.match(`${$searchStore.toLocaleLowerCase()}.*`) ||
          transaction.name.match(`${$searchStore.toLocaleLowerCase()}.*`)
        );
      })
    : transactionList;
</script>

<div class="d-flex flex-column flex-sm-row flex-wrap justify-content-around">
  {#each visibleTransactions as transaction (transaction.id)}
    <div in:fade out:scale|local={{ duration: 1000 }} class="my-card">
      <TransactionCard {transaction} />
    </div>
  {/each}
</div>

<style>
  .my-card {
    width: 75%;
    margin: auto;
    margin-bottom: 5px;
    position: relative;
  }

  @media (min-width: 760px) {
    .my-card {
      width: 25%;
      margin: 15px;
    }
  }
</style>
