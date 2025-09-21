<script lang="ts">
  import { auth } from "$lib/firebase"
  import { GoogleAuthProvider, signInWithPopup, signOut } from "@firebase/auth"
  import { firebaseUser } from "$lib/firebaseUser.svelte"
</script>

{#if firebaseUser.user}
  <button class="btn btn-primary" onclick={() => signOut(auth)}> sign out </button>
{:else}
  <button class="btn btn-primary" onclick={() => signInWithPopup(auth, new GoogleAuthProvider())}>
    sign in with google
  </button>
{/if}
