<script lang="ts">
  import PageSection from "$components/PageSection.svelte";
  import { PAGES } from "$constants";
  import VideoCard from "./VideoCard.svelte";

  const videos = [
    { title: "Transitions - nowness", videoId: "6VCX670GnpU" },
    { title: "Forgive You Not - Tyler Matthew Oyer", videoId: "7Qmv9T8pZKo" },
    { title: "Starving Vulture - Soya the Cow ", videoId: "pUsZGJKp-b8" },
    {
      title: "M U I O P O T M O S: the fate of the butterfly - Infringe",
      videoId: "UgVQQsdqGJU",
    },
  ];
</script>

<PageSection page={PAGES.VIDEO}>
  <div class="h-full w-full">
    {#each videos as { title, videoId }}
      <VideoCard {title} {videoId} />
    {/each}
  </div>
</PageSection>
