<script>
    import Block from "../../components/news/block.svelte";

    const blocks = [
        { 
            title: 'De Facebook-pixel: wat en waarom?', 
            shortText: 'De Facebook-pixel… Als je al bezig bent geweest met Facebook-advertenties, bestaat de kans dat je ook al van de Facebook-pixel hebt gehoord. Dat is een handige tool om cijfers en statistieken van je website en advertenties op te volgen. Het is een klein stukje code dat je veel inzichten kan opleveren voor je bedrijf. In deze blog leggen we uit wat de pixel precies is en wat het voor jou en je bedrijf kan betekenen.',
            img: 'pixel.jpeg'
        },
        { 
            title: 'Hoe ziet een goede website eruit?', 
            shortText: 'Je bedrijf staat eindelijk op poten, je weet waar je de komende maanden en jaren naartoe wil en wat je daarvoor nodig hebt. Een leuke website hoort daar natuurlijk ook bij. Snel een paar kliks, en klaar? Helaas … Besteed voldoende aandacht aan het ontwerp van je website en ga na wat je ermee wil bereiken. Een kwaliteitsvolle website laat namelijk een goede eerste indruk na bij je doelpubliek. En je krijgt nooit een tweede kans om een eerste indruk te maken.', 
            img: 'website.jpg'
        },
        { 
            title: 'E-mailmarketing, een must voor je bedrijf!',
            shortText:'Verstuur jij op regelmatige basis e-mails met nieuws over je bedrijf, producten of diensten naar klanten of prospects? Met mailingprogramma’s zoals MailChimp of Flexmail kan je eenvoudig mails versturen naar je contacten. Je kan je mails ook personaliseren, maar het blijft toch minder persoonlijk. Wat zijn de voordelen van e-mailmarketing en waar moet je op letten?',
            img: 'email.jpeg'
        },
        { 
            title: 'Opvallen met Instagram highlights',
            shortText: 'Instagram highlights zijn verhalen die permanent op de feed van je profiel blijven staan. Via deze highlights kan je verschillende aspecten van je bedrijf tonen. ',
            img: 'instagram.jpg'
        },
    ]
</script>
<div class="p-5 w-11/12 overflow-visible absolute top-0 left-0 right-0 ml-20 z-10">
    <h1 class="archivo text-primary text-6xl mb-10">News</h1>
    <div class="grid grid-cols-1 gap-4">
        {#each blocks as block}
            <Block title={block.title} shortText={block.shortText} img={block.img}/>
        {/each}
    </div>
</div>