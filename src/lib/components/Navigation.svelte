<script lang='ts'>
    import type { ComponentType } from "svelte";
    import { Home, Search, ListMusic, type Icon } from 'lucide-svelte';
    import logo from '$assets/Spotify_Logo_RGB_white.png';
    import { page } from '$app/stores';

    export let desktop: boolean;

    const menuItime: {path: string, label: string, icon: ComponentType<Icon> } [] = [
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
            <img src={logo} class="logo" alt="Spotify"/>
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
                                strokeWidth={2}
                            />
                        {   itme.label}
                        </a>
                    </li>
                    {/each}
            </ul>
        </div>
    </nav>
</div>

<style lang="scss">
    .nav-content {
        .logo {
            max-width: 100%;
            width: 130px;
        }
        .nav-content-inner {
            padding: 20px;
            min-width: var(--sidebar-width);
            background-color: var(--sidebar-color);
            height: 100vh;
            overflow: auto;
            display: none;
            ul {
                padding: 0;
                margin: 20px 0 0;
                list-style: none;
                li {
                    &.active {
                        a {
                            opacity: 1;
                        }
                    }
                    a {
                        display: flex;
                        align-items: center;
                        text-decoration: none;
                        color: var(--text-color);
                        font-size: functions.toRem(14);
                        font-weight: 500;
                        padding: 5px;
                        margin: 10px 0;
                        opacity: 0.7;
                        transition: opacity 0.2s;
                        &:hover,
                        &:foucs {
                            opacity: 1;
                        }
                        :global(svg) {
                            margin-right: 12px;
                        }
                    }
                }
            }
        }
        &.desktop {
            position: sticky;
            top: 0;
            .nav-content-inner {
                @include breakpoint.up('md');
                display: block;
            }
        }
    }
</style>
