<script module>
  export { listItems };
</script>

{#snippet listItems(items)}
  {#each items as item, index}
    <li>{index}:{item}</li>
  {/each}
{/snippet}
