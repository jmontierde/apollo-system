<template>
	<div class="app-container">
		<div class="content"></div>

		<v-footer class="footer d-flex flex-column">
			<div class="px-4 py-2 bg-black text-center w-100">
				{{ new Date().getFullYear() }} —
				<strong>APOLLO SYSTEMS Front End Developer Exam</strong>
			</div>
		</v-footer>
	</div>
</template>

<script>
export default {
	data: () => ({
		icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'],
	}),
}
</script>

<style scoped>
.app-container {
	display: flex;
	flex-direction: column;
}

/* Main content area will fill up the remaining space */
.content {
	flex-grow: 1;
	padding: 10px;
	margin-top: 60px;
}

/* Style footer */
.footer {
	position: fixed; /* Keeps it at the bottom */
	bottom: 0;
	left: 0;
	right: 0;
	background-color: #000;
	color: #fff;
	text-align: center;
}
</style>
