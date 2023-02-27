<script>
  import { transactionStore, languageStore } from "../store";

  let transactionName = "";
  let transactionType = "";
  let transactionDate = "";
  let transactionAmount;
  let message = "";

  const handleSubmit = () => {
    if (transactionName.trim().length > 3 && transactionName.length < 20) {
      const newTransaction = {
        id: Date.now(),
        name: transactionName.toLocaleLowerCase(),
        type: transactionType,
        amount: transactionAmount,
        date: transactionDate,
      };
      console.log(newTransaction);
      transactionStore.update((currentTransactions) => {
        return [newTransaction, ...currentTransactions];
      });
      transactionName = "";
      transactionType = "Income";
      transactionDate = "";
      transactionAmount = "";
      message = "İşleme Başarılı";
    } else if (
      transactionName.trim().length < 4 ||
      transactionName.trim().length > 20
    ) {
      message = "İşlem ismi 3 ve 20 karakter arasında olmalıdır.";
    }
  };
</script>

<form on:submit|preventDefault={handleSubmit} class="mt-3 p-1">
  <div class="mt-2 mb-2 text-danger fw-bolder fs-4">
    {$languageStore === "EN" ? "Add New Transaction" : "Yeni İşlem Ekleyin"}
  </div>
  <div class="mb-2">
    <input
      on:input={() => (message = "")}
      bind:value={transactionName}
      type="text"
      required
      autocomplete="off"
      class="form-control"
      placeholder={$languageStore === "EN" ? "Transaction Name" : "İşlem İsmi"}
    />
  </div>
  <div class="mb-2">
    <input
      bind:value={transactionAmount}
      type="number"
      required
      autocomplete="off"
      class="form-control"
      placeholder={$languageStore === "EN"
        ? "Transaction Amount"
        : "İşlem Miktarı"}
    />
  </div>
  <select bind:value={transactionType} class="form-select mb-2">
    <option value="Income" selected
      >{$languageStore === "EN" ? "Income" : "Gelir"}</option
    >
    <option value="Expenses"
      >{$languageStore === "EN" ? "Expenses" : "Gider"}</option
    >
    <option value="Investments"
      >{$languageStore === "EN" ? "Investments" : "Yatırım"}</option
    >
  </select>
  <div class="mb-2">
    <input
      bind:value={transactionDate}
      type="date"
      required
      class="form-control"
    />
  </div>
  <div class="form-text text-wrap text-danger">{message}</div>
  <button type="submit" class="btn btn-primary w-100"
    >{$languageStore === "EN" ? "Submit" : "Kaydet"}</button
  >
</form>
