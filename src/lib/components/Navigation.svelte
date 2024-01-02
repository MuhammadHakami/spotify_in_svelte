<script lang='ts'>
    import type { ComponentType } from "svelte";
    import { Home, Search, ListMusic, type Icon } from 'lucide-svelte'

    export let desktop: boolean;

    const menuItime: {path: string, label: string, icon: ComponentType} [] = [
        {
        path: '/',
        label: 'Home',
        icon: Home
        },
        {
            path: '/search',
            label: 'Search',
            icon: Search
        },
        {
            path: '/playlists',
            label: 'Playlists',
            icon: ListMusic
        }
    ];
</script>

<div class='nav-content' class:desktop class:mobile={!desktop}>
<nav aria-label='Main'>

</nav>
</div>