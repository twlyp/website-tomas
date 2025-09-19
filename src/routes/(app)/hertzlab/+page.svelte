<script lang="ts">
  import type { ComponentProps } from "svelte"
  import CardMusicWrapper from "../music/CardMusicWrapper.svelte"
  import aunoEvaluacion from "$lib/music/auno-evaluacion.webp"
  import PageSection from "$components/PageSection.svelte"

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
      title: "berlin fashion week 2024",
      text: "sound installation at berlin's fashion week 2024",
      embedYoutube: {
        videoId: "QK6zJtaBCwM",
        width: 450,
      },
    },
  ]
</script>

<PageSection class="text-gray-200">
  {#each data as d, idx (idx)}
    <CardMusicWrapper {...d} class="my-20" style="height: auto;" />
  {/each}
</PageSection>
