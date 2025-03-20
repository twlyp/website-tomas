<script lang="ts">
  import type { HTMLProps } from "$types";

  export interface Props {
    date: string;
    imageAlt?: string;
    imageSrc: string;
    location: string;
    title: string;
  }

  let {
    class: klass,
    style,
    title,
    location,
    date,
    imageSrc,
    imageAlt = imageSrc,
  }: Props & HTMLProps = $props();
</script>

<div
  class="w-full h-full sm:px-10 sm:py-5 flex flex-col lg:flex-row items-center lg:items-end justify-center lg:justify-between {klass}"
  {style}
>
  <div class="lg:hidden grow"></div>

  <div class="hidden lg:block mr-3">
    <h3>{title}</h3>
    <h4>{location}, {date}</h4>
  </div>

  <img
    class="max-h-full max-w-full object-contain"
    src={imageSrc}
    alt={imageAlt}
  />

  <div class="lg:hidden grow"></div>

  <div class="lg:hidden mt-3 text-center">
    <h3>{title}</h3>
    <h4>{location}, {date}</h4>
  </div>
</div>
