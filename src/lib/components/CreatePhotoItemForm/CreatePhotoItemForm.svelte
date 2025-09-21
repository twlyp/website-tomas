<script lang="ts">
  import { photoDb, type PhotoItem } from "$lib/db"
  import InputText from "./InputText.svelte"

  const defaultValues: PhotoItem = {
    title: "",
    publication: "",
    location: "",
    date: "",
    description: "",
    urls: [],
  }

  let values: PhotoItem = $state(defaultValues)
  function reset() {
    values = { ...defaultValues }
  }

  async function onSubmit() {
    await photoDb.add(values)
    reset()
  }
</script>

<form onsubmit={onSubmit}>
  <InputText name="title" bind:value={values.title} />
  <InputText name="publication" bind:value={values.publication} />
  <InputText name="location" bind:value={values.location} />
  <InputText name="date" bind:value={values.date} />

  <button type="submit" class="btn btn-primary">submit</button>
</form>
