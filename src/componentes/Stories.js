export default function Stories() {
  const StoriesLista = [
    {
      imagem: "../assets/img/9gag.svg",
      usuario: "9gag",
    },
    {
      imagem: "../assets/img/meowed.svg",
      usuario: "meowed",
    },
    {
      imagem: "../assets/img/barked.svg",
      usuario: "barked",
    },
    {
      imagem: "../assets/img/nathanwpylestrangeplanet.svg",
      usuario: "nathanwpylestrangeplanet",
    },
    {
      imagem: "../assets/img/wawawicomics.svg",
      usuario: "wawawicomics",
    },
    {
      imagem: "../assets/img/respondeai.svg",
      usuario: "respondeai",
    },
    {
      imagem: "../assets/img/filomoderna.svg",
      usuario: "filomoderna",
    },
    {
      imagem: "../assets/img/memeriagourmet.svg",
      usuario: "memeriagourmet",
    },
  ];

  return (
    <div class="stories">
      {StoriesLista.map((stor) => {
        return <Story imagem={stor.imagem} usuario={stor.usuario} />;
      })}

      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}

function Story(atributo) {
  return (
    <div class="story">
      <div class="imagem">
        <img src={atributo.imagem} alt="" />
      </div>
      <div class="usuario">{atributo.usuario}</div>
    </div>
  );
}
