<script lang="ts">
  import { photoDb, type PhotoItem } from "$lib/db"
  import type { ChangeEventHandler } from "svelte/elements"
  import InputText from "./InputText.svelte"
  import InputFiles from "./InputFiles.svelte"

  type FormValues = Omit<PhotoItem, "urls"> & { urls: string[] | null }

  const defaultValues: FormValues = {
    title: "",
    publication: "",
    location: "",
    date: "",
    description: "",
    urls: [],
  }

  let values: FormValues = $state(defaultValues)
  function reset() {
    values = { ...defaultValues }
  }

  function validate(values: FormValues) {
    if (!values.urls || values.urls.length === 0) {
      console.error("no urls")
    }
    return values as PhotoItem
  }

  async function onSubmit() {
    const item = validate(values)
    await photoDb.add(item)
    reset()
  }
</script>

<form onsubmit={onSubmit} class="flex max-w-xs flex-col gap-1">
  <InputText name="title" bind:value={values.title} />
  <InputText name="publication" bind:value={values.publication} />
  <InputText name="location" bind:value={values.location} />
  <InputText name="date" bind:value={values.date} />

  <InputFiles bind:urls={values.urls} />

  <button type="submit" class="btn btn-primary">submit</button>
</form>
