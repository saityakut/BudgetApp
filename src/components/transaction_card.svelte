<script>
  import { Card, CardBody } from "sveltestrap";
  import { transactionStore } from "../store";
  export let transaction;
  let border;
  if (transaction.type === "Income") {
    border = "border border-primary border-4";
  } else if (transaction.type === "Expenses") {
    border = "border border-danger border-4";
  } else {
    border = "border border-warning border-4";
  }

  const handleDelete = (id) => {
    $transactionStore = $transactionStore.filter(
      (transaction) => transaction.id != id
    );
  };
</script>

<Card class={border}>
  <CardBody class="text-center">{transaction.name}</CardBody>
  <span class="money text-danger fw-bolder">{transaction.amount}</span>
  <span class="date text-danger fw-bolder">{transaction.date}</span>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <span on:click={() => handleDelete(transaction.id)} class="delete-btn">X</span
  >
</Card>

<style>
  .money {
    background-color: #c5cbd8;
    padding: 0 5px;
    border-radius: 0.25rem;
    width: fit-content;
    position: absolute;
    top: -5px;
    left: -5px;
    color: #fff;
  }

  .date {
    background-color: #c5cbd8;
    padding: 0 5px;
    border-radius: 0.25rem;
    width: fit-content;
    position: absolute;
    right: -6px;
    bottom: -5px;
    color: #fff;
  }

  .delete-btn {
    position: absolute;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    top: -5px;
    right: -6px;
    background-color: rgb(51, 50, 50);
    border-radius: 50%;
    color: #fff;
    cursor: pointer;
  }

  .delete-btn:hover {
    background-color: red;
  }
</style>
