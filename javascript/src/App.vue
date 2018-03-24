<template>
	<div id="app">
		<x-header/>
		<h1>{{ hoge }}</h1>
		<router-view/>
	</div>
</template>

<script>
import XHeader from './components/Header.vue';

export default {
	components: {XHeader},
};
</script>


<style>
@import url('../node_modules/spectre.css');
</style>

<style scoped>
#app {
	margin: 10px;
}
</style>
