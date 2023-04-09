<!-- catch all routes -->

<script>
    import { page } from "$app/stores";
    const slugArr = $page.params.slug.split("/");
    console.log({ slugArr });
</script>

{#if slugArr.length == 1}
    <h1>View doc for feature {slugArr[0]}</h1>
{:else if slugArr.length == 2}
    <h1>View doc for feature {slugArr[0]} and concept {slugArr[1]}</h1>
{/if}

{#if slugArr.length == 1}
    <h1>The array have One element</h1>
{:else}
    <h2>This array has more then one element</h2>
{/if}
