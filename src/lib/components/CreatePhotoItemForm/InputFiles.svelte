<script lang="ts">
  import type { ChangeEventHandler } from "svelte/elements"
  import { getDownloadURL, uploadBytes } from "firebase/storage"
  import { getImageRef } from "$lib/firebase"
  import { v7 as uuid } from "uuid"
  import type { StorageItem } from "$lib/db"

  let { storageItems = $bindable() }: { storageItems: StorageItem[] | null } = $props()
  let files = $state<FileList | null>(null)
  let isLoading = $state(false)

  const onChangeFiles: ChangeEventHandler<HTMLInputElement> = async (ev) => {
    if (!files) {
      storageItems = null
      return
    }

    isLoading = true
    for (const file of files) {
      try {
        const fileId = uuid()
        const fileName = fileId + "." + file.name.split(".").pop()
        const snapshot = await uploadBytes(getImageRef(fileName), file, {
          contentType: file.type,
          customMetadata: { name: file.name },
        })
        const url = await getDownloadURL(snapshot.ref)
        const path = snapshot.ref.fullPath
        console.log(`uploaded file ${file.name} to ${path}`)
        storageItems = [...(storageItems || []), { path, url }]
      } catch (e) {
        console.error(e)
      }
    }
    isLoading = false
  }
</script>

<div class="flex flex-col items-center gap-1">
  <input type="file" class="file-input" multiple bind:files onchange={onChangeFiles} />
  {#if isLoading}
    <span class="loading loading-xl loading-dots"></span>
  {/if}

  {#if storageItems}
    <ul class="flex w-full flex-row items-center justify-evenly">
      {#each storageItems as item}
        <li>
          <img src={item.url} alt={item.path} class="max-h-20 max-w-20" />
        </li>
      {/each}
    </ul>
  {/if}
</div>
