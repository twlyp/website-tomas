<script lang="ts">
  import CreatePhotoItemForm from "$lib/components/CreatePhotoItemForm"
  import { photoDb } from "$lib/db"
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
        <td>{item.urls}</td>
      </tr>
    {/each}
  </tbody>
</table>

<CreatePhotoItemForm />
