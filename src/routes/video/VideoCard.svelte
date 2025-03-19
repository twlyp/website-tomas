<script lang="ts">
  import YouTube from "./YouTube.svelte";
  export let title: string;
  export let videoId: string;
  export let parentWidth: number;
  export let parentHeight: number;
</script>

<div
  class="relative flex flex-col items-center pb-28 justify-center"
  style="width: {parentWidth}px; height: {parentHeight}px;"
>
  <YouTube {videoId} width={parentWidth} />
  <h4 class="absolute bottom-0 -translate-y-0 text-gray-200 mb-2">{title}</h4>
</div>
