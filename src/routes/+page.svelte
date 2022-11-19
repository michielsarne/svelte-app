<script>
    import Block from "../components/home/block.svelte"

    const blocks = [
        { name: 'Websites', link: '/news', icon: 'website'},
        { name: 'Tickets', link: '/news', icon: 'ticket'},
        { name: 'Billing', link: '/news', icon: 'billing'},
        { name: 'News', link: '/news', icon: 'news'},
    ]
</script>
<div class="p-5 w-11/12 overflow-hidden absolute top-0 left-0 right-0 ml-20 z-10">
    <h1 class="archivo text-primary text-6xl mb-10">Dashboard</h1>
    <div class="grid grid-cols-2 gap-4">
        {#each blocks as block}
            <Block name={block.name} icon={block.icon} link={block.link}/>
        {/each}
    </div>
</div>