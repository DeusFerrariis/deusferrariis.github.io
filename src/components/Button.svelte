<script lang='ts'>
  import { Size, HoverColors } from '../types.ts';

  export let colors: ColorPair = {
    bg: "#4CAF50", color: "white",
  };
  export let hoverColors: ColorPair = {
    bg: "white", color: "#4CAF50",  
  }

  export let size: Size = Size.Medium;
  export let label: String = "";
  let sizeClass = {
    "LARGE": "size-large",
    "MEDIUM": "size-medium",
    "SMALL": "size-small",
  };

  $: styles = `
    --bg: ${colors.bg};
    --color: ${colors.color};
    --hoverBg: ${hoverColors.bg};
    --hoverColor: ${hoverColors.color};
  `;

  let classString = `btn ${sizeClass[size]}`;
</script>

<button
  style={styles}
  class={classString}>
  {#if label != ""}
    {label}
  {:else}
    <slot />
  {/if}
</button>

<style>
  .btn {
    background-color: var(--bg);
    color: var(--color);

    font-weight: bold;

    transition-timing-function: ease-in-out;
    transition-property: color, background-color;
    transition-duration: 0.5s;

    cursor: pointer;

    border: 1px solid rgba(0, 0, 0, 0);
  }

  .btn:hover {
    background-color: var(--hoverBg);
    color: var(--hoverColor);

    transition-timing-function: ease-in-out;
    transition-property: color, background-color;
    transition-duration: 0.5s;

    border: 1px solid rgba(0, 0, 0, 0.068);
  }

  .btn.size-small {
    padding: 4px 8px;
    border-radius: 4px;
    font-side: 12px;
  }

  .btn.size-medium {
    padding: 8px 12px;
    border-radius: 4px;
    font-side: 12px;
  }

  .btn.size-large {
    padding: 12px 14px;
    border-radius: 4px;
    font-side: 12px;
  }
</style>
