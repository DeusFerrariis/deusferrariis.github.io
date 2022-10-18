<script lang='ts'>
	import { Hamburger } from "svelte-hamburgers";
	export let menuIsOpen: Boolean;
</script>

<nav>
	<div id="left">
		<h1 id="title">DeusFerrariis</h1>
	</div>
	<div id="center">
		<h1 id="title">DeusFerrariis</h1>
	</div>
	<div id="right">
		<Hamburger bind:open={menuIsOpen}/>
	</div>
</nav>

<style>
	@import url(
		'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;1,400&display=swap'
	);

	nav {
		width: 100%;
		height: 48px;

		background-color: white;
		border-bottom: 2px solid #CCC6;

		display: flex;
		flex-direction: row;
		align-items: center;
	}
	
	div#left, div#center, div#right {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;

		flex-grow: 1;
		height: 100%;
	}

	div#right {
		justify-content: flex-end;
	}
	
	h1 {
		font-family: "Roboto", sans-serif;
		font-size: 32px;
		color: #1B324B;
		font-weight: medium;
		line-height: 1;
	}

	h1 {
		font-family: "Roboto", sans-serif;
		font-size: 32px;
		color: #1B324B;
		font-weight: medium;
		margin: 0;
		padding: 0;
	}

	div#left h1#title {
		visibility: hidden; 
	}

	div#right:last-child {
		visibility: hidden;
	}

	@media only screen and (max-width: 414px) {
		h1 {
			font-size: 24px;
		}

		div#right:last-child {
			visibility: visible;
		}

		div#center h1#title {
			visibility: hidden; 
		}

		div#left h1#title {
			visibility: visible; 
			margin-left: 8px;
		}
	}
</style>