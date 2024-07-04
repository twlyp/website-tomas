<script lang="ts">
  import Bandcamp from "./Bandcamp.svelte";

  let width: number;
</script>

<div bind:clientWidth={width} class="flex flex-col items-center mb-10">
  <h1 class="text-2xl mb-5">auno - part o</h1>
  <Bandcamp {width} />
</div>
