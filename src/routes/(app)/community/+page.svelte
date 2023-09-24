<script>
    export let communityNames = ['inven', 'dc', 'fmko', 'ilbe'];
</script>

<a href="/">home</a>
<h1>community</h1>

<ul>
    {#each communityNames as communityName}
        <li><a href={`community/${communityName}`}>{communityName}</a></li>
    {/each}
</ul>