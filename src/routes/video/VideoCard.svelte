<script lang="ts">
  import YouTube from "$components/EmbedYouTube.svelte";
  interface Props {
    title: string;
    videoId: string;
  }

  let width: number = $state(0);
  let { title, videoId }: Props = $props();
</script>

<div
  class="relative flex h-full w-full flex-col items-center justify-center pb-10"
  bind:clientWidth={width}
>
  <div class="grow"></div>

  <YouTube {videoId} {width}/>

  <div class="grow"></div>

  <h3 class="text-gray-200">{title}</h3>
</div>
