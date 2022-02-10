<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@700&family=Space+Mono:wght@700&display=swap" rel="stylesheet">

  <title>DeusFerrariis</title>
</svelte:head>

<div class="page-aligner">
  <div class="page">
    <img class="title-pic" src="anvil.png"/>
    <h1>DeusFerrariis</h1>

    <div class="nav" style="margin-bottom: 2rem;">
	<li class="nav">[<a class="nav" href="/">home</a>]</li>
	<li class="nav">[<a class="nav" href="/posts">posts</a>]</li>
	<li class="nav">[<a class="nav" href="/about">about</a>]</li>
	<li class="nav">[<a class="nav" target="_blank" href="https://github.com/DeusFerrariis">github</a>]</li>
    </div>

    <slot></slot>
  </div>
</div>


<style>
  .page-aligner {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .page {
    width: 100%;
    max-width: 70ch;
  }
  ul.nav, li.nav {
    list-style-type: none;
    font-family: sans-serif;
    color: white;
  }
  .nav {
    user-select: none;
  }
  li.nav {
    padding: 0;
    margin: 0;
    margin-right: 0.4rem;
  }
  a.nav {
    margin-left: 2px;
    margin-right: 2px;
    text-decoration: none;
    color: white;
  }
  a.nav:hover {
    margin-left: 4px;
    margin-right: 4px;
    color: #0E9594;
  }
  div.nav {
    overflow: hidden;
    text-align: left;
    margin: 0;
    width: 100%;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-top: 2rem;
  }
  .title-pic {
    margin-top: 1rem;
    margin-bottom: 1rem;
    max-width: 12rem;
    width: 33%;
    height: 33%;
    max-height: 12rem;
  }
  h1 {
    font-family: 'Inter', sans-serif;
    font-size: 1.4rem;
    padding: 0;
    margin: 0;
    color: white;
  }
</style>
