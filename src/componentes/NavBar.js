export default function NavBar() {
    return (
      <div class="navbar">
        <div class="container">
          <div class="logo">
          <Icone nomeicone="logo-instagram" />
          <div class="separador"></div>
            <img src="/assets/img/logo.png" alt="logo" />
          </div>
  
          <div class="pesquisa">
            <input type="text" placeholder="Pesquisar" />
          </div>
  
          <div class="icones">
            
            {[ "paper-plane-outline", "compass-outline", "heart-outline", "person-outline" ].map((nomeIcone, index) => (
            <Icone nomeicone={nomeIcone} key={index} />
          ))}


          </div>
  
          <div class="icones-mobile">
          
            <Icone nomeicone="paper-plane-outline" />
          </div>
        </div>
      </div>
    );
  }
  



  export function Icone(atributo){
    return(
      <ion-icon class={atributo.class} name={atributo.nomeicone} {...atributo}></ion-icon>
    );



  }