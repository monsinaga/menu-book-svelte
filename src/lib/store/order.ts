import { derived, writable } from "svelte/store";

export const order = writable<{ [key: string]: number }>({});
export const totalOrderValue = writable(0);
export const totalOrderCount = derived(
    order,
    (o) => Object.values(o).reduce((prev, curr) => prev + curr, 0)
);