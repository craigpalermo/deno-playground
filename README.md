# deno-playground

This project is a sort of monorepo for my experimenting and learning with Deno. Projects are organized by category based on their functionality or concepts they utilize.

## Working with Deno

### Format project files

```
deno fmt src/
```

## CLI Programs

### Installation

Deno includes a [script installer](https://deno.land/manual/tools/script_installer) that allows you to install a script as an executable. For example, if you want to install `src/cli/days.ts` so you can run it anywhere, you can install it by running:

```
deno install -n days src/cli/days.ts
# ... reload shell ...
days until "2025.10.12"
```

Note: You must also add `~/.deno/bin` to your path.

```
export PATH="<path to home folder>/.deno/bin:$PATH"
```