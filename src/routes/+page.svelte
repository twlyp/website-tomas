<script lang="ts">
  import Background from "./Background.svelte";
  import BackgroundLogo from "./BackgroundLogo.svelte";
  import Graph from "./Graph.svelte";
  import OpenPage from "./OpenPage.svelte";
  import { COLORS_BACKGROUND_GRADIENT, NODES } from "./constants";
  import { viewportWidth, viewportHeight } from "./stores";
  import { opacityToHex } from "./utils";

  const backgroundColor =
    COLORS_BACKGROUND_GRADIENT[1].color +
    opacityToHex(COLORS_BACKGROUND_GRADIENT[1].opacity);
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
  {:else}
    <div
      class="w-full h-full"
      style="background-color: {backgroundColor};"
    ></div>
  {/if}

  <a
    href="mailto:tomeyzaguirre@gmail.com"
    class="absolute bottom-3 right-5 text-s"
  >
    contact me
  </a>
</div>

<OpenPage />
