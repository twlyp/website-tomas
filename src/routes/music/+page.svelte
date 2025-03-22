<script lang="ts">
  import { PAGES } from "$constants";
  import PageSection from "$components/PageSection.svelte";
  import CardMusic from "./CardMusic.svelte";
  import EmbedBandcamp from "$components/EmbedBandcamp.svelte";
  import aunoTreadmill from "$lib/music/auno-treadmill.webp";
  import aunoEvaluacion from "$lib/music/auno-evaluacion.webp";
  import EmbedYouTube from "$components/EmbedYouTube.svelte";
</script>

<PageSection page={PAGES.MUSIC}>
  <div class="my-5 flex h-full w-full flex-col items-center justify-start">
    <CardMusic title="auno - part o" text="first album by auno">
      <EmbedBandcamp />
    </CardMusic>

    <CardMusic title="evaluacion sin costo 4" text="performance in chile, 2024">
      <a
        href="https://www.instagram.com/reel/C7fDYRzP6Uy/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={aunoEvaluacion}
          alt="screenshot from auno's performance at evaluación sin costo 4, chile, 2024"
          class="max-w-[350px]"
        />
      </a>
    </CardMusic>

    <CardMusic title="concept summary">
      <a
        href="https://www.instagram.com/reel/C8o2P5LsLlb/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={aunoTreadmill}
          alt="screenshot from auno's concept summary where they walk on a treadmill while performing"
          class="max-w-[350px]"
        />
      </a>
    </CardMusic>

    <CardMusic
      title="berlin fashion week 2024"
      text="sound installation at berlin's fashion week 2024"
    >
      <EmbedYouTube videoId="QK6zJtaBCwM" width={450} />
    </CardMusic>
  </div>
</PageSection>
