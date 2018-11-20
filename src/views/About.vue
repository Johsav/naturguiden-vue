<template>
  <div class="about main-content">
    <div class="left-content">
      <h1>Naturguiden - Great outdoor experiences</h1>
      <p class="subtxt">Naturguiden offer several days guided outdoor adventures. Mainly Nordic skating, kayak tours, Hiking and Cross country skiing</p>
      
      <button><router-link to="/one">Take a look on our Nordic skating tours</router-link></button>
    </div>    
  
    <div class="right-content">
      <p>On our skating trips we meet you at Arlanda airport (or elsewhere after agrement). Our kayak tours starts in Trosa south of Stockholm where you travel easily with poblic transportation from Stockholm.</p>
    </div>
  </div>  
</template>

<style lang="scss" scoped>  

  h1 {
    font-size: .5em;
    color: aqua;
  }

  .left-content {
    background-color: #ffe476;
  }

  .right-content {
    background: #fff;
    padding: 50px;
    margin-top: 80px;
    display: block;
  }

  button {
    font-size: 1.5em;
    margin-top: 100px;
  }

  .subtxt {
    font-size: 1.5em;
    margin-top: 30px;
  }

</style>