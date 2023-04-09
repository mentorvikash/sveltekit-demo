<h3 class="feature" >Feature</h3>
<slot />

<style>
    .feature{
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 10px;
        text-align: center;

        @media screen and (max-width: 768px){
            font-size: 18px;
        }
        @media screen and (max-width: 480px){
            font-size: 16px;
        }
        @media screen and (max-width: 320px){
            font-size: 14px;
        }
    }
</style>