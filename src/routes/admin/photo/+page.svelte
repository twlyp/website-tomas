<script lang="ts">
  import CreatePhotoItemForm from "$lib/components/CreatePhotoItemForm"
  import { photoDb } from "$lib/db"
</script>

{JSON.stringify(photoDb.items)}

<CreatePhotoItemForm />
