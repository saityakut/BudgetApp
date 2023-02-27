<script>
  import TransactionForm from "./transaction_form.svelte";
  import { createEventDispatcher } from "svelte";
  import { selectedTypeStore, searchStore, languageStore } from "../store";
  const dispatch = createEventDispatcher();

  const handleView = (viewSelection) => {
    dispatch("handleViewSelect", viewSelection);
  };
  export let view;
  let selectedType = "all";
  $: $selectedTypeStore = selectedType;
  let search = "";
  $: $searchStore = search;
</script>

<div
  class="d-flex flex-column mt-3 rounded p-3"
  style="background-color: #c5cbd8;"
>
  <div class="d-flex flex-sm-column justify-content-around">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      class:selected={view === "card"}
      on:click={() => handleView("card")}
      class="mb-2"
      style="cursor: pointer;"
    >
      {$languageStore === "EN" ? "Card View" : "Kart Görünümü"}
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      class:selected={view === "table"}
      on:click={() => handleView("table")}
      class="mb-2"
      style="cursor: pointer;"
    >
      {$languageStore === "EN" ? "Table View" : "Tablo Görünümü"}
    </div>
  </div>
  <div>
    <div class="mt-3">
      <input
        bind:value={search}
        type="search"
        class="form-control"
        placeholder={$languageStore === "EN"
          ? "search for transactions..."
          : "İşlem arayın..."}
      />
    </div>
    <select bind:value={selectedType} class="form-select mt-3">
      <option value="all" selected
        >{$languageStore === "EN" ? "All Transactions" : "Tüm İşlemler"}</option
      >
      <option value="Income" selected
        >{$languageStore === "EN" ? "Income" : "Gelirler"}</option
      >
      <option value="Expenses" selected
        >{$languageStore === "EN" ? "Expenses" : "Giderler"}</option
      >
      <option value="Investments" selected
        >{$languageStore === "EN" ? "Investments" : "Yatırımlar"}</option
      >
    </select>
  </div>
  <TransactionForm />
</div>

<style>
  .selected {
    color: white;
    background-color: #0d6efd;
    border-radius: 25px;
    text-align: center;
  }
</style>
