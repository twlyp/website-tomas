<script lang="ts">
  import YouTube from "./YouTube.svelte";
  interface Props {
    title: string;
    videoId: string;
    parentWidth: number;
    parentHeight: number;
  }

  // biome-ignore lint/style/useConst: props
  let { title, videoId, parentWidth, parentHeight }: Props = $props();
</script>

<div
  class="relative flex flex-col items-center pb-28 justify-center"
  style="width: {parentWidth}px; height: {parentHeight}px;"
>
  <YouTube {videoId} width={parentWidth} />
  <h4 class="absolute bottom-0 -translate-y-0 text-gray-200 mb-2">{title}</h4>
</div>
