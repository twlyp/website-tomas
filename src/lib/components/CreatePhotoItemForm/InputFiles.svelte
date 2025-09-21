<script lang="ts">
  import type { ChangeEventHandler } from "svelte/elements"

  let { urls = $bindable() }: { urls: string[] | null } = $props()
  let files = $state<FileList | null>(null)

  const onChangeFiles: ChangeEventHandler<HTMLInputElement> = (ev) => {}
</script>

<input type="file" class="file-input" multiple bind:files onchange={onChangeFiles} />
