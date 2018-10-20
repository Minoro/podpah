<template>
	<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" :width="width" :height="height" viewBox="0 0 16 16">
		<path fill="#444444" d="M2 1v14l12-7z"></path>
	</svg>
</template>
<script>
export default {
	props:{
		width: {
			type: [Number, String],
			default: 26
		},
		height: {
			type: [Number, String],
			default: 26
		}
	}
}
</script>