<script lang="ts">
  import Graph from "./Graph.svelte";
  import OpenPage from "./OpenPage.svelte";
  import { NODES } from "./constants";
  import {viewportWidth, viewportHeight} from './stores';

</script>

<svelte:window bind:innerWidth={$viewportWidth} bind:innerHeight={$viewportHeight} />

<div class="absolute top-0 left-0 w-screen h-screen">
  {#if $viewportWidth && $viewportHeight}
    <Graph width={$viewportWidth} height={$viewportHeight} nodes={NODES} />
  {/if}
</div>

<OpenPage />
