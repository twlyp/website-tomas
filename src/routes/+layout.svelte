<script>
  import "../app.css";
  import Background from "./Background.svelte";
  import BackgroundLogo from "./BackgroundLogo.svelte";
  import Graph from "./Graph.svelte";
  import { NODES } from "./constants";
  import { viewportWidth, viewportHeight } from "./stores";
</script>

<svelte:window
  bind:innerWidth={$viewportWidth}
  bind:innerHeight={$viewportHeight}
/>

<div class="absolute top-0 left-0 w-screen h-screen overflow-hidden">
  <Background />
  <BackgroundLogo />

  {#if $viewportWidth && $viewportHeight}
    <Graph width={$viewportWidth} height={$viewportHeight} nodes={NODES} />
  {/if}

  <a
    href="mailto:tomeyzaguirre@gmail.com"
    class="absolute bottom-3 right-5 text-s"
  >
    contact me
  </a>
</div>

<slot></slot>

<style></style>
