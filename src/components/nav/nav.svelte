<script>
    import NavItem from "./item.svelte";
    import Logo from "../../images/logo-roger.svelte";
    import Chevron from "svelte-material-icons/ChevronRightCircle.svelte";
    const navItems = [
        { name: "Dashboard", icon: "dashboard", link: "/dashboard"},
        { name: "Account", icon: "person", link: "#"},
        { name: "Projects", icon: "file", link: "#"},
        { name: "News", icon: 'news', link: "/news"},
    ]

    export let navClass = "-translate-x-36";
    export let size = '2rem';
    export let buttonToggle = false;
    export let buttonClass = 'scale-0'
    export let chevronClass = '';
    export let chevronColor = 'color-black'
    function mouseEnter() {
        buttonClass = "scale-1 transition-all";
    }
    function mouseLeave() {
        buttonClass = "scale-0 transition-all"
    }
    function handleClick() {
        buttonToggle = !buttonToggle;
        if(buttonToggle) {
            navClass = '';
            chevronClass = "rotate-180"

        } else {
            navClass = "-translate-x-36";
            chevronClass = '';
        }
    }
</script>


<nav class="bg-grey fixed rounded-tr-3xl rounded-br-3xl transition-all h-full w-52 p-2 z-20 {navClass}" on:mouseenter={mouseEnter} on:mouseleave={mouseLeave}>
    <button class="absolute top-1/2 duration-300 -right-3 {buttonClass} {chevronClass}" on:click={() => (buttonToggle = !buttonToggle), handleClick()}>
        <Chevron {size} {chevronColor} />
    </button>
    <div class="w-full flex justify-end p-1 mb-4 mt-4">
        <a href="/dashboard">
            <Logo />
        </a>

    </div>
    <ul class="flex gap-2 flex-col">
        {#each navItems as item}
            <NavItem name={item.name} icon={item.icon} link={item.link}/>
        {/each}
    </ul>
</nav>