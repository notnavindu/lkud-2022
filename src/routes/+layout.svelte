<script>
	import '@fontsource/montserrat';
	import '../app.css';

	import { browser } from '$app/environment';
	import { firebaseAuthStore } from '$stores/auth.store';
	import { initilizeFirebase } from '$utils/firebase.util';

	if (browser) initilizeFirebase();
</script>

{#if !$firebaseAuthStore.loading}
	<slot />
{/if}
