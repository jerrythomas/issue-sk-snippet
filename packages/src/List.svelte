<script>
  import { listItems } from "./ListItems.svelte";
  let { items = $bindable([]) } = $props();
</script>

<ul>
  {@render listItems(items)}
</ul>
