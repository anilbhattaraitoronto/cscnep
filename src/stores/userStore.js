import { writable } from "svelte/store";

export let user = writable(localStorage.getItem("user") || null);