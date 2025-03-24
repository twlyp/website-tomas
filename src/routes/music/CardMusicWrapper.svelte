<script lang="ts">
  import type { ComponentProps } from "svelte";
  import CardMusic from "./CardMusic.svelte";
  import EmbedYouTube from "$components/EmbedYouTube.svelte";
  import EmbedBandcamp from "$components/EmbedBandcamp.svelte";

  interface Props extends Omit<ComponentProps<typeof CardMusic>, "children"> {
    embedBandcamp?: boolean;
    embedInstagram?: { imgSrc: string; imgAlt: string; link: string };
    embedYoutube?: ComponentProps<typeof EmbedYouTube>;
  }

  let { embedBandcamp, embedInstagram, embedYoutube, ...cardMusicProps }: Props = $props();
  let isBio = $derived(!embedBandcamp && !embedInstagram && !embedYoutube);
</script>

{#if isBio}
  <div
    class="flex h-full w-full flex-col items-center justify-center text-gray-200 {cardMusicProps.class}"
    style={cardMusicProps.style}
  >
    <div class="max-w-2xl text-center font-serif text-xl">
      <p class="mt-5 mb-10">
        AUNO is the sound/performance project of Berlin-based Chilean artist Tomás Eyzaguirre, in
        which they focus on exploring the corporeality of the voice. Working mainly with singing,
        extended vocal techniques, microphone and amplification, they create complex sounds and
        feedback-laden atmospheres, with which they transcends genre conventions declaring the
        ambiguous and plastic qualities of the voice.
      </p>

      <p class="mb-3">
        auno was conceived in 2020 while developing a sound art performance during a residency in
        “Aguamarga” (ES 2020). They have performed in several cultural spaces such as:
      </p>

      <ul>
        <li><a href="?slide=1">“Evualuacion sin Costo” (CL 2024)</a></li>
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
{:else}
  <CardMusic {...cardMusicProps}>
    {#if embedBandcamp}
      <EmbedBandcamp />
    {:else if embedInstagram}
      <a href={embedInstagram.link} target="_blank" rel="noopener noreferrer">
        <img class="max-w-[350px]" src={embedInstagram.imgSrc} alt={embedInstagram.imgAlt} />
      </a>
    {:else if embedYoutube}
      <EmbedYouTube {...embedYoutube} />
    {/if}
  </CardMusic>
{/if}
