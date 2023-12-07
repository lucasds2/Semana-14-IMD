<script>
  let celsius = '';
  let fahrenheit = '';

  function converterParaFahrenheit() {
    if (celsius !== '') {
      const temperaturaCelsius = parseFloat(celsius);
      const temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;
      fahrenheit = temperaturaFahrenheit.toFixed(2);
    } else {
      fahrenheit = '';
    }
  }
</script>

<style>
</style>

<div>
  <label for="celsius">Digite a temperatura em Celsius:</label>
  <input type="text" id="celsius" bind:value={celsius} />

  <button on:click={converterParaFahrenheit}>Converter</button>

  {#if fahrenheit !== ''}
    <p>{fahrenheit} °F</p>
  {/if}
</div>
