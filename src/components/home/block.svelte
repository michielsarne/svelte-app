<script>
    export let name;
    export let icon;
    export let link;

    export let color = '#ffff';
    export let size = '18rem'

    import Web from "svelte-material-icons/Web.svelte";
    import Ticket from "svelte-material-icons/Ticket.svelte";
    import Billing from "svelte-material-icons/CashMultiple.svelte";
    import News from "svelte-material-icons/Newspaper.svelte";
    
    export let itemClass = 'scale-100'
    function mouseEnter() {
        itemClass = 'scale-105 cursor-pointer';
    }
    function mouseLeave() {
        itemClass = 'scale-100';
    }
</script>


<a href="{link}" class="w-full bg-primary transition-all flex gap-5 items-center justify-center p-5 flex-col rounded-3xl {itemClass}" on:mouseenter={mouseEnter} on:mouseleave={mouseLeave}>
    {#if icon == 'website'}
            <Web {color} {size} />
    {:else if icon == 'ticket'}
            <Ticket {color} {size} />
    {:else if icon == 'billing'}
            <Billing {color} {size} />
    {:else if icon == 'news'}
            <News {color} {size} />
    {/if}
    <h1 class="archivo text-secondary text-4xl uppercase">{name}</h1>
</a>