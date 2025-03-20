<script lang="ts">
  import "../app.css";
  import Background from "$components/Background.svelte";
  import BackgroundLogo from "$components/BackgroundLogo.svelte";
  import Graph from "$components/Graph";
  import { NODES } from "$constants";
  import { goto } from "$app/navigation";

  let width: number = $state(0);
  let height: number = $state(0);

  let { children } = $props();

  function onKeydownBackground(event: KeyboardEvent) {
    if (event.key === "Escape") goto("/");
  }
</script>

<svelte:window
  bind:innerWidth={width}
  bind:innerHeight={height}
  onkeydowncapture={onKeydownBackground}
/>

<div class="absolute top-0 left-0 w-screen h-screen overflow-hidden">
  <Background />
  <BackgroundLogo />

  {#if width && height}
    <Graph {width} {height} nodes={NODES} />
  {/if}

  <a
    href="mailto:tomeyzaguirre@gmail.com"
    class="absolute bottom-3 right-5 text-s"
  >
    contact me
  </a>
</div>

{@render children()}

<style></style>
