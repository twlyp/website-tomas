<script lang="ts">
  import CreatePhotoItemForm from "$lib/components/CreatePhotoItemForm"
  import { photoDb, type Db, type PhotoItem, type WithId } from "$lib/db"
  import TrashIcon from "$lib/components/icons/TrashIcon.svelte"
  import { deleteObject, ref as storageRef } from "firebase/storage"
  import { storage } from "$lib/firebase"

  async function deleteItem(item: WithId<PhotoItem>) {
    try {
      await Promise.all([
        ...(item.assets?.map((a) => deleteObject(storageRef(storage, a.path))) ?? []),
        photoDb.delete(item.id),
      ])
      console.log(`deleted entry ${item.id} from photoDb`)
    } catch {}
  }
</script>

<table class="table">
  <thead>
    <tr>
      <th>id</th>
      <th>title</th>
      <th>publication</th>
      <th>location</th>
      <th>date</th>
      <th>urls</th>
    </tr>
  </thead>
  <tbody>
    {#each photoDb.items as item}
      <tr>
        <td>{item.id}</td>
        <td>{item.title}</td>
        <td>{item.publication}</td>
        <td>{item.location}</td>
        <td>{item.date}</td>
        <td>{item.assets?.map((a) => a.url).join(", ")}</td>
        <td>
          <button class="btn btn-circle btn-ghost" onclick={() => deleteItem(item)}>
            <TrashIcon />
          </button>
        </td>
      </tr>
    {/each}
  </tbody>
</table>

<CreatePhotoItemForm />
