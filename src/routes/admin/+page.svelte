<script lang="ts">
  import { userStore, SignedIn, SignedOut } from "sveltefire";
  import { auth } from "$firebase";
  import {
    signInWithRedirect,
    GoogleAuthProvider,
    signOut,
    type ParsedToken,
  } from "@firebase/auth";
  import { derived } from "svelte/store";
  import AdminPanel from "$components/AdminPanel.svelte";

  const user = userStore(auth);
  const claims = derived<typeof user, ParsedToken>(user, ($user, set) => {
    $user?.getIdTokenResult().then((result) => {
      set(result?.claims);
    });
  });
</script>

<SignedOut>
  <button
    class="btn btn-primary"
    onclick={() => signInWithRedirect(auth, new GoogleAuthProvider())}
  >
    sign in with google
  </button>
</SignedOut>

<SignedIn>
  <button class="btn btn-primary" onclick={() => signOut(auth)}> sign out </button>

  {#if $claims?.admin}
    <AdminPanel />
  {/if}
</SignedIn>
