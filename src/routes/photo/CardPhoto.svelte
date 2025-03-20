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
  class="flex h-full w-full flex-col items-center justify-center sm:px-10 sm:py-5 lg:flex-row lg:items-end lg:justify-between {klass}"
  {style}
>
  <div class="grow lg:hidden"></div>

  <div class="mr-3 hidden lg:block">
    <h3>{title}</h3>
    <h4>{location}, {date}</h4>
  </div>

  <img class="max-h-full max-w-full object-contain" src={imageSrc} alt={imageAlt} />

  <div class="grow lg:hidden"></div>

  <div class="mt-3 text-center lg:hidden">
    <h3>{title}</h3>
    <h4>{location}, {date}</h4>
  </div>
</div>
