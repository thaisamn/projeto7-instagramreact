export  function Usuario(atributo) {
    return (
      <div class="usuario">
        <img
          data-test="profile-image "
          onClick={() => atributo.mudarImagem()}
          src={atributo.imagemUsuarioPrincipal}
          alt={atributo.legendausuario}
        />
        <div class="texto">
          <span>
            <strong data-test="name">{atributo.nomeUsuarioPrincipal}</strong>
            <ion-icon data-test="edit-name" onClick={() => atributo.mudarNome()} name={atributo.iconeusuario}></ion-icon>
          </span>
        </div>
      </div>
    );
  }

  export  function UsuarioSidebar(atributo) {
    return (
      <div class="usuario">
        <img src={atributo.imgSidebar} alt={atributo.legSidebar} />
        <div class="texto">
          <div class="nome">{atributo.nomeSidebar}</div>
          <div class="razao">{atributo.razaoSidebar}</div>
        </div>
      </div>
    );
  }