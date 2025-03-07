<script lang="ts">
  import { onMount } from "svelte";
  import VideoCard from "./VideoCard.svelte";
  import { bindToInterval } from "../utils";

  let width: number;
  let height: number;

  const videos = [
    { title: "Transitions - nowness", videoId: "6VCX670GnpU" },
    { title: "Forgive You Not - Tyler Matthew Oyer", videoId: "7Qmv9T8pZKo" },
    { title: "Starving Vulture - Soya the Cow ", videoId: "pUsZGJKp-b8" },
    {
      title: "M U I O P O T M O S: the fate of the butterfly - Infringe",
      videoId: "UgVQQsdqGJU",
    },
  ];

  let container: HTMLDivElement;

  function scrollTo(y: number) {
    container.scrollTo({ top: y, behavior: "smooth" });
  }

  let targetScrollTop = 0;
  function onWheel(ev: WheelEvent) {
    if (Math.abs(container.scrollTop - targetScrollTop) > 1 && ev.deltaY < 20) return;

    targetScrollTop = bindToInterval(
      0,
      container.scrollHeight - height,
      container.scrollTop + Math.sign(ev.deltaY) * height
    );
    scrollTo(targetScrollTop);
  }

  onMount(() => {
    scrollTo(0);
  });
</script>

<div
  class="relative w-full h-full overflow-scroll no-scrollbar"
  bind:clientWidth={width}
  bind:clientHeight={height}
  bind:this={container}
>
  {#each videos as { title, videoId }}
    <VideoCard {title} {videoId} parentWidth={width} parentHeight={height} />
  {/each}
</div>

<div class="absolute top-0 left-0 w-full h-full" on:wheel|capture={onWheel} />

