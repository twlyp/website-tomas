<script lang="ts">
  import "../app.css";
  import Background from "./Background.svelte";
  import BackgroundLogo from "./BackgroundLogo.svelte";
  import Graph from "./Graph.svelte";
  import { NODES } from "$constants";

  // biome-ignore lint/style/useConst: bound variable
  let width: number = $state(0);
  // biome-ignore lint/style/useConst: bound variable
  let height: number = $state(0);

  // biome-ignore lint/style/useConst: props
  let { children } = $props();
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />

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
