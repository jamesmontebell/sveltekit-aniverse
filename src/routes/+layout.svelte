<script lang="ts">
	import '../app.postcss';
	import { goto } from '$app/navigation';
	import { Input } from '$lib/components/ui/input';
	import { Toggle } from '$lib/components/ui/toggle';
	import { ChevronDown } from 'lucide-svelte';
	import { scale, slide } from 'svelte/transition';
	import { onMount } from 'svelte';

	let input: string;
	let dropdown: boolean;
	function handleDropdown() {
		dropdown = !dropdown;
	}
	onMount(() => {
		input = '';
	});
</script>

<nav class="sticky top-0 z-40 flex w-full flex-col border-b bg-secondary">
	<div class="flex h-16 items-center pl-6">
		<div class="flex items-center">
			<a href="/" class="mr-5">AniVerse</a>
		</div>

		<div class="flex items-center gap-x-3">
			<div>
				<form
					on:submit|preventDefault={() => {
						goto(`/search?${new URLSearchParams({ query: input })}`);
						input = '';
					}}
					class="hidden sm:flex"
				>
					<Input class="max-w-[200px]" placeholder="Search..." bind:value={input} />
				</form>
				<!-- 
				<Toggle
					bind:pressed={dropdown}
					on:click={handleDropdown}
					class="block cursor-pointer p-2 sm:hidden"
				>
					<ChevronDown
						class={`transition-transform duration-300 ${dropdown ? 'rotate-180' : ''}`}
					/>
				</Toggle> -->
			</div>
		</div>
	</div>

	{#if dropdown}
		<form
			transition:slide
			on:submit|preventDefault={() => {
				goto(`/search?${new URLSearchParams({ query: input })}`);
			}}
			class="mb-3 block sm:hidden"
		>
			<div transition:scale>
				<Input placeholder="Search..." bind:value={input} />
			</div>
		</form>
	{/if}
</nav>
<slot />
