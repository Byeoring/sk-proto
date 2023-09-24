<script>
    export let data;
    const { character } = data;
</script>
<a href="/maple">maple</a>
<h1>maple 캐릭터</h1>
<div>
    <h2>{character.name}</h2>
    <p>{character.level}</p>
    <p>{character.class}</p>
    <p>{JSON.stringify(character)}</p>
</div>
