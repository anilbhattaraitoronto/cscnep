import { writable } from "svelte/store";

export let members = writable(null);
export let execCommittee = writable();