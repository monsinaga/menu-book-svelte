<script lang="ts">
	import { totalOrderCount, totalOrderValue } from '$lib/store/order';
</script>

<div class="appbar">
	Kongkow Cafe ({$totalOrderCount} items - Rp {($totalOrderValue * 1000).toLocaleString('id')})
</div>

<style>
	div.appbar {
		display: flex;
		flex-direction: row;
		justify-content: center;
		padding: 16px;
		background-color: #f44336;
		color: white;
		font-size: 16px;
		font-weight: 500;
		position: sticky;
		top: 0;
		left: 0;
		right: 0;
	}
</style>