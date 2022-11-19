<script>
    import File from "svelte-material-icons/File.svelte";
    import Account from "svelte-material-icons/Account.svelte";
    import News from "svelte-material-icons/NewBox.svelte";
    import Dashboard from "svelte-material-icons/TabletDashboard.svelte";
    export let name;
    export let link;
    export let icon;
    export let color = '#2af065';
    export let size = '2rem'

    export let hoverClass = "after:scale-0";
    function mouseEnter() {
        hoverClass = "after:scale-1 cursor-pointer";
    }
    function mouseLeave() {
        hoverClass = "after:scale-0 cursor-auto"
    }
</script>


<li class="nav-item-li flex relative text-2xl p-2 after:content-[''] transition-all after:transition-all after:origin-bottom-left after:w-full after:absolute after:bottom-0 after:h-1 after:rounded-3xl after:bg-primary {hoverClass}" on:mouseenter={mouseEnter} on:mouseleave={mouseLeave}>
    <a class="text-primary flex flex-row archivo flex-auto" href="{link}">{name}
    {#if icon == 'file'}
            <File {color} {size} />
    {:else if icon == 'person'}
            <Account {color} {size} />
    {:else if icon == 'news'}
            <News {color} {size} />
    {:else if icon == 'dashboard'}
            <Dashboard {color} {size} />
    {/if}
    </a>
</li>