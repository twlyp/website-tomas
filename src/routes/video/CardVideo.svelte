<script lang="ts">
  import YouTube from "$lib/components/EmbedYouTube.svelte"
  import type { HTMLProps } from "$lib/types"
  interface Props extends HTMLProps {
    title: string
    videoId: string
  }

  let width: number = $state(0)
  let { title, videoId, class: klass, style }: Props = $props()
</script>

<div
  class="flex h-full w-full flex-col items-center justify-between {klass}"
  {style}
  bind:clientWidth={width}
>
  <div class="grow"></div>

  <YouTube {videoId} {width} />

  <div class="grow"></div>

  <h3 class="pb-5 text-center font-tomeyza text-3xl text-gray-200 lg:text-2xl">{title}</h3>
</div>
