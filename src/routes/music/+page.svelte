<script lang="ts">
  import { PAGES } from "$constants";
  import PageSection from "$components/PageSection.svelte";
  import aunoTreadmill from "$lib/music/auno-treadmill.webp";
  import aunoEvaluacion from "$lib/music/auno-evaluacion.webp";
  import Carousel from "$components/Carousel.svelte";
  import CardMusicWrapper from "./CardMusicWrapper.svelte";
  import type { ComponentProps } from "svelte";

  const data: Array<ComponentProps<typeof CardMusicWrapper>> = [
    {
      title: "auno - part o",
      text: "first album by auno",
      embedBandcamp: true,
    },
    {
      title: "evaluacion sin costo 4",
      text: "performance in chile, 2024",
      embedInstagram: {
        imgSrc: aunoEvaluacion,
        imgAlt: "screenshot from auno's performance at evaluación sin costo 4, chile, 2024",
        link: "https://www.instagram.com/reel/C7fDYRzP6Uy/",
      },
    },
    {
      title: "concept summary",
      embedInstagram: {
        imgSrc: aunoTreadmill,
        imgAlt:
          "screenshot from auno's concept summary where they walk on a treadmill while performing",
        link: "https://www.instagram.com/reel/C8o2P5LsLlb/",
      },
    },
    {
      title: "berlin fashion week 2024",
      text: "sound installation at berlin's fashion week 2024",
      embedYoutube: {
        videoId: "QK6zJtaBCwM",
        width: 450,
      },
    },
    { title: "bio" },
  ];
</script>

<PageSection page={PAGES.MUSIC}>
  <div class="h-full w-full text-gray-200">
    <Carousel Component={CardMusicWrapper} {data} direction="vertical" />
  </div>
</PageSection>
