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

<div class="w-full h-full px-10 py-5 flex flex-row items-end {klass}" {style}>
  <div>
    <h3>{title}</h3>
    <h4>{location}, {date}</h4>
  </div>
  <img
    class="max-h-full max-w-full grow object-contain"
    src={imageSrc}
    alt={imageAlt}
  />
</div>
