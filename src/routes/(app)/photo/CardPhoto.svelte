<script lang="ts">
  import type { HTMLProps } from "$types";

  export interface Props {
    date: string;
    imageAlt?: string;
    imageSrc: string;
    location: string;
    publication?: string;
    title: string;
  }

  let {
    class: klass,
    style,
    title,
    publication,
    location,
    date,
    imageSrc,
    imageAlt = imageSrc,
  }: Props & HTMLProps = $props();
</script>

<div
  class="flex h-full w-full flex-col items-center justify-center font-tomeyza text-xl text-gray-200
         lg:flex-row lg:items-end lg:justify-between lg:px-10 lg:py-5 {klass}"
  {style}
>
  <div class="grow lg:hidden"></div>

  <div class="mr-5 hidden lg:block">
    <h3 class="text-3xl">{title}</h3>
    {#if publication}
      <h4>{publication}</h4>
    {/if}
    <h4>{location}, {date}</h4>
  </div>

  <img
    class="max-h-4/5 max-w-full object-contain lg:max-h-full lg:max-w-4/5"
    src={imageSrc}
    alt={imageAlt}
  />

  <div class="grow lg:hidden"></div>

  <div class="mt-3 text-center lg:hidden">
    {#if publication}
      <h3 class="text-2xl">{title} - {publication}</h3>
    {:else}
      <h3 class="text-2xl">{title}</h3>
    {/if}
    <h4>{location}, {date}</h4>
  </div>
</div>
