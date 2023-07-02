import { useState } from "react";
import { Icone } from "./NavBar";

export function Posts() {
  const PostList = [
    {
      imagemUsuario: "../assets/img/meowed.svg",
      imagemConteudo: "../assets/img/gato-telefone.svg",
      imagemCurtidas: "../assets/img/respondeai.svg",
      legendaUsuario: "meowed",
      legendaConteudo: "gato-telefone",
      legendaCurtidas: "respondeai",
      nome: "meowed",
      nomecurtiu: "respondeai",
      numeroDeCurtidas: "101523",
    },

    {
      imagemUsuario: "../assets/img/barked.svg",
      imagemConteudo: "../assets/img/dog.svg",
      imagemCurtidas: "../assets/img/adorable_animals.svg",
      legendaUsuario: "barked",
      legendaConteudo: "dog",
      legendaCurtidas: "adorable_animals",
      nome: "barked",
      nomecurtiu: "adorable_animals",
      numeroDeCurtidas: "99159",
    },

    {
      imagemUsuario: "../assets/img/meowed.svg",
      imagemConteudo: "../assets/img/gato-telefone.svg",
      imagemCurtidas: "../assets/img/respondeai.svg",
      legendaUsuario: "meowed",
      legendaConteudo: "gato-telefone",
      legendaCurtidas: "respondeai",
      nome: "meowed",
      nomecurtiu: "respondeai",
      numeroDeCurtidas: "101523",
    },

    {
      imagemUsuario: "../assets/img/meowed.svg",
      imagemConteudo: "../assets/img/gato-telefone.svg",
      imagemCurtidas: "../assets/img/respondeai.svg",
      legendaUsuario: "meowed",
      legendaConteudo: "gato-telefone",
      legendaCurtidas: "respondeai",
      nome: "meowed",
      nomecurtiu: "respondeai",
      numeroDeCurtidas: "101523",
    },
  ];

  return (
    <div class="posts">
      {PostList.map((pot) => {
        return (
          <Post
            imagemUsuario={pot.imagemUsuario}
            imagemConteudo={pot.imagemConteudo}
            imagemCurtidas={pot.imagemCurtidas}
            legendaUsuario={pot.legendaUsuario}
            legendaConteudo={pot.legendaConteudo}
            legendaCurtidas={pot.legendaCurtidas}
            nome={pot.nome}
            nomecurtiu={pot.nomecurtiu}
            numeroDeCurtidas={pot.numeroDeCurtidas}
          />
        );
      })}
    </div>
  );
}

export function Post(atributo) {
  const [salvo, setSalvo] = useState(false);
  const [gostei, setGostei] = useState(false);
  const [curtidas, setCurtidas] = useState(Number(atributo.numeroDeCurtidas))

  const clickNaImagem = () => {
    setGostei(true);
    !gostei && setCurtidas(curtidas + 1);
  };

  const like = () => {
    !gostei && setCurtidas(curtidas + 1);
    gostei && setCurtidas(curtidas - 1);
    
    setGostei(!gostei);
  };



  return (
    <div class="post" data-test="post ">
      <div class="topo">
        <div class="usuario">
          <img src={atributo.imagemUsuario} alt={atributo.legendaUsuario} />
          {atributo.nome}{" "}
        </div>
        <div class="acoes">
          <Icone nomeicone="ellipsis-horizontal" />
        </div>
      </div>

      <div class="conteudo" >
        <img data-test="post-image"  onClick={clickNaImagem} src={atributo.imagemConteudo} alt={atributo.legendaConteudo} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <Icone data-test="like-post" onClick={like} class={gostei && "vermelho"} nomeicone={gostei ? "heart" : "heart-outline" }/>
            {["chatbubble-outline", "paper-plane-outline"].map(
              (nomeIcone, index) => (
                <Icone nomeicone={nomeIcone} key={index} />
              )
            )}
          </div>
          <div data-test="save-post" onClick={() => setSalvo(!salvo)}>
            {salvo ? <Icone nomeicone="bookmark" /> : <Icone nomeicone="bookmark-outline" />}
            
          </div>
        </div>

        <div class="curtidas">
          <img src={atributo.imagemCurtidas} alt={atributo.legendaCurtidas} />
          <div class="texto">
            Curtido por <strong>{atributo.nomecurtiu}</strong> e{" "}
            <strong>outras <span data-test="likes-number">{curtidas}</span> pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
