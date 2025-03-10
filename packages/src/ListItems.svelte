<script module>
  export { listItems };
</script>

{#snippet listItems(items)}
  {#each items as item, index}
    {item}
  {/each}
{/snippet}
