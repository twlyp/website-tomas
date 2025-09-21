<script lang="ts">
  import { firekitCollection } from "svelte-firekit"
  import { type PhotoItem } from "$lib/firebase.types"
  import AdminCreatePhotoItemForm from "$lib/components/AdminCreatePhotoItemForm.svelte"
  import { photoCollectionRef } from "$lib/db"

  const photos = firekitCollection<PhotoItem>(photoCollectionRef.path)
  const photosData = $derived(photos.data)
</script>

{JSON.stringify(photosData)}

<AdminCreatePhotoItemForm />