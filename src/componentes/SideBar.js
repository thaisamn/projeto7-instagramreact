import {Usuario} from "./User";
import {Sugestao, Sugestoes} from "./Suggestions";
import { useState } from "react";

export default function SideBar() {
  const usuarios = [
    {
      nome: "bad.vibes.memes",
      img: "assets/img/bad.vibes.memes.svg",
      razao: "Segue você",
    },
    {
      nome: "chibirdart",
      img: "assets/img/chibirdart.svg",
      razao: "Segue você",
    },
    {
      nome: "bad.vibes.memes",
      img: "assets/img/razoesparaacreditar.svg",
      razao: "Novo no Instagram",
    },
    {
      nome: "razoesparaacreditar",
      img: "assets/img/adorable_animals.svg",
      razao: "Segue você",
    },
    {
      nome: "adorable_animals",
      img: "assets/img/smallcutecats.svg",
      razao: "Segue você",
    },
  ];

  const [nomeUsuarioPrincipal, setNomeUsuarioPrincipal] = useState('catanacômica')
  const [imagemUsuarioPrincipal, setimagemUsuarioPrincipal] = useState('../assets/img/catanacomics.svg')

  const mudarNome = () => {
    const novoNome  = prompt('digite novo nome do usuario');
    if(novoNome){
      setNomeUsuarioPrincipal(novoNome)
    }
  }

  const mudarImagem = () => {
    const novaImagem = prompt('digite o caminho da imagem');
    if(novaImagem){
      setimagemUsuarioPrincipal(novaImagem);
    }
  }


  return (
    <div class="sidebar">
      <Usuario
        imagemUsuarioPrincipal={imagemUsuarioPrincipal}
        nomeUsuarioPrincipal={nomeUsuarioPrincipal}
        iconeusuario="pencil"
        mudarNome={mudarNome}
        mudarImagem={mudarImagem}
      />

      <Sugestoes>
        {usuarios.map((us) => (
          <Sugestao
            imgSidebar={us.img}
            legSidebar={""}
            nomeSidebar={us.nome}
            razaoSidebar={us.razao}
          />
        ))}
      </Sugestoes>

      <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </div>
  );
}
