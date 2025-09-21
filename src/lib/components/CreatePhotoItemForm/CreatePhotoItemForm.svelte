<script lang="ts">
  import { photoDb, type PhotoItem } from "$lib/db"

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
  <label class="floating-label">
    <span>title</span>
    <input
      type="text"
      bind:value={values.title}
      placeholder="title"
      class="input input-md"
      required
    />
  </label>
  <label class="floating-label">
    <span>publication</span>
    <input
      type="text"
      bind:value={values.publication}
      placeholder="publication"
      class="input input-md"
      required
    />
  </label>
  <label class="floating-label">
    <span>location</span>
    <input
      type="text"
      bind:value={values.location}
      placeholder="location"
      class="input input-md"
      required
    />
  </label>
  <label class="floating-label">
    <span>date</span>
    <input
      type="text"
      bind:value={values.date}
      placeholder="date"
      class="input input-md"
      required
    />
  </label>
  <button type="submit" class="btn btn-primary">submit</button>
</form>
