<script lang="ts">
  import Carousel from "$lib/components/Carousel.svelte"
  import PageSection from "$lib/components/PageSection.svelte"
  import { PAGES } from "$lib/constants"
  import CardVideo from "./CardVideo.svelte"

  const videos = [
    { title: "Transitions - nowness", videoId: "6VCX670GnpU" },
    { title: "Forgive You Not - Tyler Matthew Oyer", videoId: "7Qmv9T8pZKo" },
    { title: "Starving Vulture - Soya the Cow ", videoId: "pUsZGJKp-b8" },
    {
      title: "M U I O P O T M O S: the fate of the butterfly - Infringe",
      videoId: "UgVQQsdqGJU",
    },
  ]
</script>

<PageSection page={PAGES.VIDEO}>
  <Carousel direction="vertical" Component={CardVideo} data={videos} />
</PageSection>
