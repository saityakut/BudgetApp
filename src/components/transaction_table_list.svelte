<script>
  import {
    transactionStore,
    selectedTypeStore,
    incomeStore,
    investmentStore,
    expenseStore,
    searchStore,
    languageStore,
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

  const handleDelete = (id) => {
    $transactionStore = $transactionStore.filter(
      (transaction) => transaction.id != id
    );
  };

  $: visibleTransactions = $searchStore
    ? transactionList.filter((transaction) => {
        return (
          transaction.name.match(`${$searchStore.toLocaleLowerCase()}.*`) ||
          transaction.name.match(`${$searchStore.toLocaleLowerCase()}.*`)
        );
      })
    : transactionList;
</script>

<table
  class="table table-hover table-bordered"
  style="background-color: #c5cbd8;"
>
  <thead>
    <tr>
      <th>{$languageStore === "EN" ? "Name" : "İsim"}</th>
      <th>{$languageStore === "EN" ? "Amount" : "Miktar"}</th>
      <th>{$languageStore === "EN" ? "Type" : "Tür"}</th>
      <th>{$languageStore === "EN" ? "Date" : "Tarih"}</th>
      <th>{$languageStore === "EN" ? "Delete" : "Sil"}</th>
    </tr>
  </thead>
  <tbody>
    {#each visibleTransactions as transaction (transaction.id)}
      <tr in:fade out:scale|local={{ duration: 1000 }}>
        <td>{transaction.name}</td>
        <td>{transaction.amount}</td>
        <td>{transaction.type}</td>
        <td>{transaction.date}</td>
        <td class="text-center"
          ><button
            on:click={() => handleDelete(transaction.id)}
            class="btn btn-danger">X</button
          ></td
        >
      </tr>
    {/each}
  </tbody>
</table>
