<script lang="ts">
  import { PAGES } from "$constants";
  import PageSection from "$components/PageSection.svelte";
  import CardMusic from "./CardMusic.svelte";
  import EmbedBandcamp from "$components/EmbedBandcamp.svelte";
  import aunoTreadmill from "$lib/music/auno-treadmill.webp";
  import aunoEvaluacion from "$lib/music/auno-evaluacion.webp";
  import EmbedYouTube from "$components/EmbedYouTube.svelte";
  
  const idCardEvaluacion = "card-evaluacion";
</script>

<PageSection page={PAGES.MUSIC}>
  <div class="my-5 flex h-full w-full flex-col items-center justify-start text-gray-200">
    <CardMusic title="auno - part o" text="first album by auno">
      <EmbedBandcamp />
    </CardMusic>

    <CardMusic title="evaluacion sin costo 4" text="performance in chile, 2024" id={idCardEvaluacion}>
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

    <div class="max-w-2xl pb-20 text-center font-serif text-xl">
      <p class="mt-5 mb-10">
        AUNO is the sound/performance project of Berlin-based Chilean artist Tomás Eyzaguirre, in
        which they focus on exploring the corporeality of the voice. Working mainly with singing,
        extended vocal techniques, microphone and amplification, they create complex sounds and
        feedback-laden atmospheres, with which they transcends genre conventions declaring the
        ambiguous and plastic qualities of the voice.
      </p>

      <p class="mb-3">
        auno was conceived in 2020 while developing a sound art performance during a
        residency in “Aguamarga” (ES 2020). They have performed in several cultural spaces such as:
      </p>

      <ul>
        <li><a href="#{idCardEvaluacion}">“Evualuacion sin Costo” (CL 2024)</a></li>
        <li>“Galeria MANA” (IP 2024)</li>
        <li>“MOLT” (DE 2023)</li>
        <li>“Eboded festival” (IL 2023)</li>
        <li>“ICC - Berlin Questions” (DE 2022)</li>
        <li>“Dock 11” (DE 2022)</li>
        <li>“Galerie Grölman” (DE 2022)</li>
        <li>“The Ballery” (DE 2020)</li>
        <li>“Paolo Pinkel” (DE 2020)</li>
        <li>“The White Rectangle” (DE 2021)</li>
        <li>“Nativos” (CL 2022)</li>
        <li>“Ergo Collective” (GR 2022)</li>
        <li>“Startbahn” (DE 2022)</li>
        <li>“Monopol” (DE 2022)</li>
      </ul>
    </div>
  </div>
</PageSection>
