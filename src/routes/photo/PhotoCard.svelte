<script lang="ts">
  export let title: string;
  export let location: string;
  export let date: string;
  export let imageSrc: string;
  // biome-ignore lint/style/useConst: <explanation>
  export let imageAlt: string = title;
</script>

<div
  class="w-full h-full px-10 py-5 flex flex-row items-end {$$props.class}"
  style={$$props.style}
>
  <div>
    <h3>{title}</h3>
    <h4>{location}, {date}</h4>
  </div>
  <img
    class="max-h-full max-w-full flex-grow object-contain"
    src={imageSrc}
    alt={imageAlt}
  />
</div>
