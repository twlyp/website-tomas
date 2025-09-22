<script lang="ts">
  import { photoCollection, type PhotoItem, type StorageItem } from "$lib/db"
  import InputText from "./InputText.svelte"
  import InputFiles from "./InputFiles.svelte"

  type FormValues = Omit<PhotoItem, "assets"> & { assets: StorageItem[] | null }

  const defaultValues: FormValues = {
    title: "",
    publication: "",
    location: "",
    date: "",
    description: "",
    assets: null,
  }

  let values: FormValues = $state(defaultValues)
  function reset() {
    values = { ...defaultValues }
  }

  function validate(values: FormValues) {
    if (!values.assets || values.assets.length === 0) {
      console.error("no assets")
    }
    return values as PhotoItem
  }

  async function onSubmit() {
    const item = validate(values)
    await photoCollection.add(item)
    reset()
  }
</script>

<form onsubmit={onSubmit} class="flex max-w-xs flex-col gap-1 mb-10">
  <InputText name="title" bind:value={values.title} />
  <InputText name="publication" bind:value={values.publication} />
  <InputText name="location" bind:value={values.location} />
  <InputText name="date" bind:value={values.date} />

  <InputFiles bind:storageItems={values.assets} />

  <button type="submit" class="btn btn-primary">submit</button>
</form>
