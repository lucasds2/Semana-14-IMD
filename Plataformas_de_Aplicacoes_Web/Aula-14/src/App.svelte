<script>
  let nome = '';
  let mensagem = '';

  function atualizarMensagem() {
    mensagem = `Olá ${nome}`;
  }
</script>

<style>
</style>

<div>
  <label for="nome">Digite seu nome:</label>
  <input type="text" id="nome" bind:value={nome} on:input={atualizarMensagem} />

  {#if nome}
    <p>{mensagem}</p>
  {/if}
</div>
