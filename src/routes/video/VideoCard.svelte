<script lang="ts">
  import YouTube from "./YouTube.svelte";
  export let title: string;
  export let videoId: string;
</script>

<div class="flex flex-col items-center mb-10">
  <h1 class="text-2xl mb-2">{title}</h1>
  <YouTube {videoId} />
</div>
