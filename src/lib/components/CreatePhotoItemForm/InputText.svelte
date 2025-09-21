<script lang="ts">
  let { value = $bindable(), name }: { value: string; name: string } = $props()
</script>

<label class="floating-label">
  <span>{name}</span>
  <input type="text" bind:value placeholder={name} class="validator input input-md" required />
</label>
