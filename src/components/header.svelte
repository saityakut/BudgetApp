<script>
  import { languageStore } from "../store";
  const handleLanguage = () => {
    if ($languageStore === "TR") {
      $languageStore = "EN";
    } else if ($languageStore === "EN") {
      $languageStore = "TR";
    }
  };
</script>

<div class="p-1 d-flex justify-content-between bg-light">
  <div class="text-primary fs-3 m-auto">
    {$languageStore === "EN" ? "Budget App" : "Bütçe Uygulaması"}
  </div>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    on:click={handleLanguage}
    style="cursor: pointer;"
    class="p-2 mb-1 bg-primary bg-gradient text-white rounded"
  >
    {$languageStore === "EN" ? "TR" : "EN"}
  </div>
</div>
