<script lang="ts">
    import "modern-normalize/modern-normalize.css";
    import '../styles/main.scss';
	import type { LayoutData } from "./$types";
    import LogoutButton from "$components/LogoutButton.svelte";
    import Navigation from "$components/Navigation.svelte";

    export  let data: LayoutData;

    $: user = data.user;
</script>

{#if user}
    <p>Hello {user.display_name}</p>
    <LogoutButton />
{/if}

<div id='main'>
    {#if user}
        <div id=sidebar>
            <Navigation desktop={true}/>
        </div>
    {/if}
    <div id="content">
        <main id='main-content'>
            <slot />
        </main>
    </div>
</div>

<style lang='scss'>
    #main {
        display: fkex;
        #content {
            flex: 1;
            main#main-content {
                padding: 30px 15px 60px;
                @include breakpoint.up('md') {
                    padding: 30px 30px 60px;
                }
            }
        }
    }
</style>