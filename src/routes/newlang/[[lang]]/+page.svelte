<script>
    import { page } from '$app/stores'
    const {lang = "en"} = $page.params

    const greeting = {
        en: 'English hello',
        fr: 'French hello',
        es: 'Spanish hello'
    }

    const message =  greeting[lang]
</script>

<h2> Now we have {message} </h2>