<script lang="ts">
  import "$css"

  import Background from "$lib/components/Background.svelte"
  import BackgroundLogo from "$lib/components/BackgroundLogo.svelte"
  import Graph from "$lib/components/Graph"
  import { goto } from "$app/navigation"
  import { page } from "$app/state"

  let width: number = $state(0)
  let height: number = $state(0)

  let { children } = $props()

  function onKeydownBackground(event: KeyboardEvent) {
    if (event.key === "Escape") goto("/")
  }

  const isGraphTabbable = $derived(page.route.id === "/")
</script>

<svelte:window
  bind:innerWidth={width}
  bind:innerHeight={height}
  onkeydowncapture={onKeydownBackground}
/>

<div class="absolute top-0 left-0 h-screen w-screen overflow-hidden bg-white">
  <Background />
  <BackgroundLogo />

  {#if width && height}
    <Graph
      {width}
      {height}
      isTabbable={isGraphTabbable}
    />
  {/if}
</div>

{@render children()}
