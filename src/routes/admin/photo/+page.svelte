<script lang="ts">
  import { firekitCollection } from "svelte-firekit"
  import AdminCreatePhotoItemForm from "$lib/components/AdminCreatePhotoItemForm.svelte"
  import { photoCollectionRef, type PhotoItem } from "$lib/db"

  const photos = firekitCollection<PhotoItem>(photoCollectionRef.path)
  const photosData = $derived(photos.data)
</script>

{JSON.stringify(photosData)}

<AdminCreatePhotoItemForm />