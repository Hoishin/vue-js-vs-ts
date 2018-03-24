<template>
	<div id="app">
		<header class="navbar">
			<section class="navbar-section">
				<a 
					href="/" 
					class="navbar-brand mr-2"
				>TODO</a>
				<a 
					href="/" 
					class="btn btn-link"
				>Home</a>
				<a 
					href="/about" 
					class="btn btn-link"
				>About</a>
				<a 
					href="/list" 
					class="btn btn-link"
				>List</a>
			</section>
		</header>

		<router-view/>>
	</div>
</template>

<style>
@import url('../node_modules/spectre.css');
</style>

<style scoped>
#app {
	margin: 10px;
}
</style>
