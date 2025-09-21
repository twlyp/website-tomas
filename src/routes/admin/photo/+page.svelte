<script lang="ts">
  import { firekitCollection } from "svelte-firekit"
  import { type PhotoItem } from "../../../firebase.types"
  import AdminCreatePhotoItemForm from "$components/AdminCreatePhotoItemForm.svelte"
  import { photoCollectionRef } from "../../../db"

  const photos = firekitCollection<PhotoItem>(photoCollectionRef.path)
  const photosData = $derived(photos.data)
</script>

{JSON.stringify(photosData)}

<AdminCreatePhotoItemForm />