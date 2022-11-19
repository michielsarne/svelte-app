<script>
    

    export let title;
    export let shortText;
    export let img;
    
    export let itemClass = 'scale-100'
    function mouseEnter() {
        itemClass = 'scale-105 cursor-pointer';
    }
    function mouseLeave() {
        itemClass = 'scale-100';
    }
</script>


<div class="w-full bg-primary transition-all flex gap-5 items-center p-5 flex-row justify-start rounded-3xl {itemClass}" on:mouseenter={mouseEnter} on:mouseleave={mouseLeave}>
    <img class="rounded-3xl h-72" src="/lib/{img}" alt="{title}">
    <div class="flex flex-col h-full">
        <h1 class="archivo text-secondary text-4xl mb-8">{title}</h1>
        <p class="text-secondary archivo text-normal-p text-xl">{shortText}</p>
    </div>
    
</div>