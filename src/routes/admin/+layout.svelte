<script lang="ts">
  import { FirebaseApp } from "sveltefire";
  import { auth, firestore, storage } from "$firebase";

  let { children } = $props();
</script>

<FirebaseApp {auth} {firestore} {storage}>
  {@render children()}
</FirebaseApp>
