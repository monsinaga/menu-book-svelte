<script lang="ts">
	import { order } from "$lib/store/order"

	export let menuId: string;
	export let id: string;
	export let label: string;
	export let price: number;

	$: counter = $order[id + '_' + menuId] ?? 0;
</script>

<div class="menu-price-row">
	<span class="price-description">{label}</span>
	<span>{price}</span>
</div>

<style>
	div.menu-price-row {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0 16px;
	}

	span.price-description {
		font-size: 12px;
	}
</style>