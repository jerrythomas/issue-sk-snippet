# issue-sk-snippet

Reproduction of an issue with exported snippets

## How to replicate

```bash
pnpm i
cd sites/sample
pnpm dev
```

```bash
pnpm dev

> sk-snippet@0.0.1 dev /Users/Jerry/Developer/Labs/sk-snippet/sites/sample
> vite dev

3:35:15 PM [vite] (client) Forced re-optimization of dependencies

  VITE v6.2.1  ready in 457 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
Error:   Failed to scan for dependencies from entries:
  /Users/Jerry/Developer/Labs/sk-snippet/sites/sample/src/routes/+page.svelte

  ✘ [ERROR] "listItems" is not declared in this file

    script:/Users/Jerry/Developer/Labs/sk-snippet/packages/example/src/ListItems.svelte?id=0:2:11:
      2 │   export { listItems };
        ╵            ~~~~~~~~~
```

This issue does not occur in the folloiwing cases

- If the listItems snippet is in the List component
- if both the ListItems and the List component are in the lib folder of the svelte-kit project.

This issue seems to occur only when the snippet is in a separate package.

## Playground

The same code works on the playground

https://svelte.dev/playground/9f2ce709c92c451c98221568e8aeaf4e?version=5.20.2

## Build works

This runs without errors too!

```bash
pnpm i
cd sites/sample
pnpm build
```
