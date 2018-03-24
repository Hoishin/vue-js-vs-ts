<template>
	<header class="navbar">
		<section class="navbar-section">
			<a
				href="/"
				class="navbar-brand mr-2">TODO</a>
			<a
				href="/"
				class="btn btn-link">Home</a>
			<a
				href="/about"
				class="btn btn-link">About</a>
			<a
				href="/list"
				class="btn btn-link">List</a>
		</section>

		<section class="navbar-center">
			{{ path }}
		</section>

		<section class="navbar-section">
			<x-search/>
		</section>
	</header>
</template>

<script>
import {mapState} from 'vuex';
import XSearch from './Search.vue';

export default {
	components: {XSearch},
	computed: {
		...mapState({
			path: ({route}) => route.path,
			params: ({route}) => route.params,
			query: ({route}) => route.query,
		}),
	},
};
</script>
