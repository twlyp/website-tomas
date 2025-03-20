<script lang="ts">
  import YouTube from "./YouTube.svelte";
  interface Props {
    title: string;
    videoId: string;
    parentWidth: number;
    parentHeight: number;
  }

  let { title, videoId, parentWidth, parentHeight }: Props = $props();
</script>

<div
  class="relative flex flex-col items-center justify-center pb-28"
  style="width: {parentWidth}px; height: {parentHeight}px;"
>
  <YouTube {videoId} width={parentWidth} />
  <h4 class="absolute bottom-0 mb-2 -translate-y-0 text-gray-200">{title}</h4>
</div>
