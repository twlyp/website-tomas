<script lang="ts">
  import "../app.css";
  import Background from "$components/Background.svelte";
  import BackgroundLogo from "$components/BackgroundLogo.svelte";
  import Graph from "$components/Graph";
  import { NODES } from "$constants";
  import { goto } from "$app/navigation";
  import { page } from "$app/state";
  import { FirebaseApp } from "sveltefire";
  import { auth, firestore, storage } from "$firebase";

  let width: number = $state(0);
  let height: number = $state(0);

  let { children } = $props();

  function onKeydownBackground(event: KeyboardEvent) {
    if (event.key === "Escape") goto("/");
  }

  const isGraphTabbable = $derived(page.route.id === "/");
</script>

<svelte:window
  bind:innerWidth={width}
  bind:innerHeight={height}
  onkeydowncapture={onKeydownBackground}
/>

<div class="absolute top-0 left-0 h-screen w-screen overflow-hidden">
  <Background />
  <BackgroundLogo />

  {#if width && height}
    <Graph {width} {height} nodes={NODES} isTabbable={isGraphTabbable} />
  {/if}
</div>

<FirebaseApp {auth} {firestore} {storage}>
  {@render children()}
</FirebaseApp>

<style>
  :global(html) {
    background-color: white;
  }
</style>
