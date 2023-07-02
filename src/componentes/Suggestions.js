import {UsuarioSidebar} from "./User";

export function Sugestoes(atributo){
    return (
      <div class="sugestoes">
      <div class="titulo">
         Sugestões para você
        <div>Ver tudo</div>
      </div>
        {atributo.children}
      </div>
      
  
    )
}

  export  function Sugestao({imgSidebar, legSidebar, nomeSidebar, razaoSidebar}){
    return (
      <div class="sugestao">
            <div class="usuario">
              <UsuarioSidebar
                imgSidebar={imgSidebar}
                legSidebar={legSidebar}
                nomeSidebar={nomeSidebar}
                razaoSidebar={razaoSidebar}
              />
            </div>
            <div class="seguir">Seguir</div>
          </div>
    )
  }