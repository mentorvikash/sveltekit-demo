<script>
    import { goto, beforeNavigate, afterNavigate } from '$app/navigation'
    
    const handleClick = () =>{
        // goto("/blogs",{ replaceState: true })
        goto("/blogs")

    }

    beforeNavigate( navigation => {
        console.log({ before: navigation })
    })

    afterNavigate( navigation => {
        console.log({ after: navigation })
    })


</script>

<a href="/blogs">Blog</a>
<a href="/newlang">New Language</a>

<h1>Welcome to Home </h1>
<button on:click={handleClick} >Place Order</button>