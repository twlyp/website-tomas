<script lang="ts">
  import type { ChildrenProp } from "$types";

  interface Props extends ChildrenProp {
    title: string;
    text?: string;
  }
  const { children, title, text }: Props = $props();
</script>

<div class="mb-10 flex w-full flex-col items-center text-gray-200 md:grid md:grid-cols-2">
  <h1 class="mb-5 font-tomeyza text-3xl md:hidden">{title}</h1>

  <div class="mb-5 justify-self-center md:mb-0">
    {@render children()}
  </div>

  <div class="md:ml-10 md:justify-self-start">
    <h1 class="mb-5 hidden font-tomeyza text-3xl md:block">{title}</h1>
    {#if text}
      <p class="font-tomasito text-2xl">{text}</p>
    {/if}
  </div>
</div>
