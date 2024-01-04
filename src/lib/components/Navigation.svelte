<script lang='ts'>
    import type { ComponentType } from "svelte";
    import { Home, Search, ListMusic, type Icon } from 'lucide-svelte';
    import logo from '$assets/Spotify_Logo_RGB_white.png';
    import { page } from '$app/stores';

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
    <div class ='nav-content-inner'>
        <img src={logo} class="logo" alt="Spotify" width="100px"/>
    </div>
    <ul>
        {#each menuItime as itme} 
        <li class:active={itme.path == $page.url.pathname}>
            <a href={itme.path}>
                <svelte:component 
                this={itme.icon} 
                focusable='false' 
                aria-hidden='true' 
                color='var(--text-color)'
                 size={26}
                 strokeWidth={2}/>
                {itme.label}
            </a>
        </li>
        {/each}
    </ul>

</nav>
</div>