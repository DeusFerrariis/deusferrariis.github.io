<script context="module">
	/** @type {import('@sveltejs/kit').ErrorLoad} */
	export function load({ error, status }) {
		return {
			props: {
				title: `${status}: ${error.message}`,
				status: status
			}
		};
	}
</script>

<script>
	export let title;
	export let status;
</script>

{#if (status == 404)}
  <h1>Nothing to see here :/</h1>
{/if}

<style>
  h1 {
    font-family: 'Inter', sans-serif;
    font-size: 1.4rem;
    padding: 0;
    margin: 0;
    color: white;
  }
</style>
