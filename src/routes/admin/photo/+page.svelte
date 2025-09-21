<script lang="ts">
  import AdminCreatePhotoItemForm from "$lib/components/AdminCreatePhotoItemForm.svelte"
  import { photoDb } from "$lib/db"
</script>

{JSON.stringify(photoDb.items)}

<AdminCreatePhotoItemForm />
