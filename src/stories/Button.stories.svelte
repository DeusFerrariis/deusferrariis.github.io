<script lang='ts'>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import Button from '../components/Button.svelte';
	
</script>

<Meta title="atom/Button" component={Button} />

<Story name="Default">
  <Button label="Click Me!"/>
</Story>

<Story name="Small">
  <Button size="SMALL" label="Click Me!"/>
</Story>

<Story name="Large">
  <Button size="LARGE" label="Click Me!"/>
</Story>

