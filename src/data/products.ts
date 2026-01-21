/*
  =====================================================
  DADOS DOS PRODUTOS - CATÁLOGO DE PELÚCIAS
  =====================================================
*/

import { Product } from "@/contexts/CartContext";

// =====================================================
// LISTA DE PRODUTOS - SEÇÃO PELÚCIAS
// =====================================================

export const productsPelucias: Product[] = [
  {
    id: "1",
    name: "Pelúcia Stitch 30cm",
    price: 89.90,
    image: "/imagens/Personagens/Stitch/stitch-frente.jpg",
    images: ["/imagens/Personagens/Stitch/stitch-lado.jpg", "/imagens/Personagens/Stitch/stitch-costas.jpg"],
    category: "personagens",
    subcategory: "stitch",
  },
  {
    id: "2",
    name: "Pelúcia Angel 30cm",
    price: 65.90,
    image: "/imagens/Personagens/Stitch/angel-frente.jpg",
    images: ["/imagens/Personagens/Stitch/angel-lado.jpg", "/imagens/Personagens/Stitch/angel-costas.jpg"],
    category: "personagens",
    subcategory: "stitch",
  },
  {
    id: "3",
    name: "Pelúcia Fúria da Noite Banguela 30cm",
    price: 79.90,
    image: "imagens/Personagens/Como treinar o seu dragão/banguela-frente.jpg",
    images: ["/imagens/Personagens/Como treinar o seu dragão/banguela-lado.jpg", "/imagens/Personagens/Como treinar o seu dragão/banguela-costas.jpg"],
    category: "personagens",
    subcategory: "como-treinar-o-seu-dragao",
  },
  {
    id: "4",
    name: "Pelúcia Fúria da Luz 30cm",
    price: 56.90,
    image: "imagens/Personagens/Como treinar o seu dragão/furia-da-luz-frente.jpg",
    images: ["/imagens/produtos/personagens/furia-da-luz-lado.jpg", "/imagens/produtos/personagens/furia-da-luz-costas.jpg"],
    category: "personagens",
    subcategory: "como-treinar-o-seu-dragao",
  },

  {
    id: "5",
    name: "Pelúcia Ursinho Pooh 30cm",
    price: 56.90,
    image: "imagens/Personagens/Ursinho pooh/pooh-frente02-editada.jpg",
    images: ["imagens/Personagens/Ursinho pooh/pooh-lado02.webp","imagens/Personagens/Ursinho pooh/pooh-costas.webp"],
    category: "personagens",
    subcategory: "ursinho-pooh",
  },
  
   {
    id: "6",
    name: "Pelúcia Ursinho Pooh 25cm",
    price: 11.11,
    image: "imagens/Personagens/Ursinho pooh/pooh-p-frente01.webp",
    images: ["imagens/Personagens/Ursinho pooh/pooh-p-lado.webp", "imagens/Personagens/Ursinho pooh/pooh-p-costas.webp"],
    category: "personagens",
    subcategory: "ursinho-pooh",
  },
   {
    id: "7",
    name: "Pelúcia Tigrão 30cm",
    price: 11.11,
    image: "imagens/Personagens/Ursinho pooh/tigrao-frente.webp",
    images: ["imagens/Personagens/Ursinho pooh/tigrao-lado.webp", "imagens/Personagens/Ursinho pooh/tigrao-costas.webp"],
    category: "personagens",
    subcategory: "ursinho-pooh",
  },
   {
    id: "8",
    name: "Bob Esponja 40cm",
    price: 11.11,
    image: "imagens/Personagens/Bob esponja/bob-esponja-grande frente-02.jpg",
    images: ["imagens/Personagens/Bob esponja/bob-esponja-grande-lado.jpg", "imagens/Personagens/Bob esponja/bob-esponja-grande-costas.jpg"],
    category: "personagens",
    subcategory: "bob-esponja",
  },
   {
    id: "9",
    name: "Pelúcia Lula Molusco 30cm",
    price: 11.11,
    image: "imagens/Personagens/Bob esponja/lulamolusco-frente.webp",
    images: ["imagens/Personagens/Bob esponja/lulamolusco-lado.webp", "imagens/Personagens/Bob esponja/lulamolusco-costas.webp"],
    category: "personagens",
    subcategory: "bob-esponja",
  },
   {
    id: "10",
    name: "Pelúcia Plankton 40cm",
    price: 11.11,
    image: "imagens/Personagens/Bob esponja/plankton-frente.webp",
    images: ["imagens/Personagens/Bob esponja/plankton-lado.webp", "imagens/Personagens/Bob esponja/plankton-costas.webp"],
    category: "personagens",
    subcategory: "bob-esponja",
  },
   {
    id: "11",
    name: "Pelúcia Sr. Sirigueijo",
    price: 11.11,
    image: "imagens/Personagens/Bob esponja/sirigueijo-frente.webp",
    images: ["imagens/Personagens/Bob esponja/sirigueijo-lado.webp", "imagens/Personagens/Bob esponja/sirigueijo-costas.webp"],
    category:  "personagens",
    subcategory: "bob-esponja",
  },
   {
    id:"12",
    name: "Pelúcia Goku 25cm",
    price: 11.11,
    image: "imagens/Personagens/Dragonboll/goku-mini-frente.webp",
    images:["imagens/Personagens/Dragonboll/goku-mini-lado.webp", "imagens/Personagens/Dragonboll/goku-mini-costas"],
    category: "personagens",
    subcategory: "animes",
  },
   {
    id: "13",
    name: "Pelúcia Garfield 30cm",
    price: 11.11,
    image: "imagens/Personagens/Garfield/garfield-frente.jpg",
    images: [ "imagens/Personagens/Garfield/garfield-lado.jpg", "imagens/Personagens/Garfield/garfield-costas.jpg"],
    category: "personagens",
    subcategory: "garfield",
  },
    {
    id: "14",
    name: "Pelúcia Grogo 30cm",
    price: 11.11,
    image: "imagens/Personagens/Grogo/grogo-01-frente.webp",
    images: ["imagens/Personagens/Grogo/grogo-01-lado.webp", "imagens/Personagens/Grogo/grogo-01-costas.webp"],
    category: "personagens",
    subcategory: "grogo",
  },
  {
    id: "15",
    name: "Pelúcia Grogo 35cm",
    price: 11.11,
    image: "imagens/Personagens/Grogo/grogo-02-frente.webp",
    images:["imagens/Personagens/Grogo/grogo-02-lado.webp", "imagens/Personagens/Grogo/grogo-02-costas.webp"],
    category: "personagens",
    subcategory: "grogo",
  },
  {
    id: "16",
    name: "Pelúcia Kuromi vestido cinza 30cm",
    price: 11.11,
    image: "imagens/Personagens/Hello kit-Kuromi/kuromi-frente-vestido-cinza.jpg",
    images: ["imagens/Personagens/Hello kit-Kuromi/kuromi-lado-vestido-cinza.jpg", "imagens/Personagens/Hello kit-Kuromi/kuromi-costas-vestido-cinza.jpg"],
    category: "personagens",
    subcategory: "hello-kitty",
  },
  {
    id: "17",
    name: "Pelúcia Kuromi vestido rosa 30cm",
    price: 11.11,
    image: "imagens/Personagens/Hello kit-Kuromi/kuromi-frente-vestido-rosa.jpg",
    images: ["imagens/Personagens/Hello kit-Kuromi/kuromi-lado-vestido-rosa.jpg",  "imagens/Personagens/Hello kit-Kuromi/kuromi-costas-vestido-rosa.jpg"],
    category: "personagens",
    subcategory: "hello-kitty",
  },
  {
    id: "18",
    name: "Pelúcia Kuromi colorida 30cm",
    price: 11.11,
    image: "imagens/Personagens/Hello kit-Kuromi/kuromi-frente.webp",
    images: ["imagens/Personagens/Hello kit-Kuromi/kuromi-lado.webp", "imagens/Personagens/Hello kit-Kuromi/kuromi-costas.webp"],
    category: "personagens",
    subcategory: "hello-kitty",
  },
  {
    id: "19",
    name: "Pelúcia Kuromi preto e rosa",
    price: 11.11,
    image: "imagens/Personagens/Hello kit-Kuromi/kuromi-frente-preto-e-rosa.jpg",
    images: ["imagens/Personagens/Hello kit-Kuromi/kuromi-lado-preto-rosa.jpg", "imagens/Personagens/Hello kit-Kuromi/kuromi-costas-preto-rosa.jpg"],
    category: "personagens",
    subcategory: "hello-kitty",
  },
  {
    id: "20",
    name: "Pelúcia Patolino 40cm",
    price: 11.11,
    image: "imagens/Personagens/Looney tunes/patolino-frente.webp",
    images: ["imagens/Personagens/Looney tunes/patolino-lado.webp", "imagens/Personagens/Looney tunes/patolino-costas.webp"],
    category: "personagens",
    subcategory: "looney-tunes"
  },
  {
    id: "21",
    name: "Pelúcia Taz 40cm",
    price: 11.11,
    image: "imagens/Personagens/Looney tunes/taz-frente01.webp",
    images: ["imagens/Personagens/Looney tunes/taz-lado.webp", "imagens/Personagens/Looney tunes/taz-costas.webp"],
    category: "personagens",
    subcategory: "looney-tunes"
  },
  {
    id: "22",
    name: "Pelúcia Super Mario vermelho e azul 30cm",
    price: 11.11,
    image: "imagens/Personagens/Mario/mario-vermelho-frente.webp",
    images: ["imagens/Personagens/Mario/mario-vermelho-lado.webp", "imagens/Personagens/Mario/mario-vermelho-costas.webp"],
    category: "personagens",
    subcategory: "mario"
  },
  {
    id: "23",
    name: "Pelúcia Super Mario vermelho e amarelo 30cm",
    price: 11.11,
    image: "imagens/Personagens/Mario/mario-amarelo-frente02.webp",
    images: ["imagens/Personagens/Mario/mario-amarelo-lado.webp", "imagens/Personagens/Mario/mario-amarelo-costas03.webp"],
    category: "personagens",
    subcategory: "mario"
  },
  {
    id: "24",
    name:  "Pelúcia Super Mario branco e vermelho 30cm",
    price: 11.11,
    image: "imagens/Personagens/Mario/mario-branco-frente.webp",
    images: ["imagens/Personagens/Mario/mario-branco-lado.webp", "imagens/Personagens/Mario/mario-branco-costas.webp"],
    category: "personagens",
    subcategory: "mario",
  },
  {
    id: "25",
    name: "Pelúcia Cogumelo 30cm",
    price: 11.11,
    image: "imagens/Personagens/Mario/melo-frente02.webp",
    images: ["imagens/Personagens/Mario/melo-lado.webp", "imagens/Personagens/Mario/melo-costas.webp"],
    category: "personagens",
    subcategory: "mario",
  },
  {
    id: "26",
    name: "Pelúcia Yoshi 30cm",
    price: 11.11,
    image: "imagens/Personagens/Mario/yoshi-lado.webp",
    images: ["imagens/Personagens/Mario/yoshi-costas.webp"],
    category: "personagens",
    subcategory: "mario",
  },
  {
    id: "27",
    name: "Pelúcia Homem-Aranha com capuz 25cm",
    price: 11.11,
    image: "imagens/Personagens/Marvel/homem-aranha-frente.webp",
    images: ["imagens/Personagens/Marvel/homem-aranha-lado.webp", "imagens/Personagens/Marvel/homem-aranha-costas.webp"],
    category: "personagens",
    subcategory: "marvel",
  },
  {
    id: "28",
    name: "Pelúcia Thor 25cm",
    price: 11.11,
    image: "imagens/Personagens/Marvel/thor-frente02.webp",
    images: ["imagens/Personagens/Marvel/thor-lado01.webp", "imagens/Personagens/Marvel/thor-costas.webp"],
    category: "personagens",
    subcategory: "marvel",
  },
  {
    id: "29",
    name: "Pelúcia Venom 25cm",
    price: 11.11,
    image: "imagens/Personagens/Marvel/venom-frente.webp",
    images: ["imagens/Personagens/Marvel/venom-lado.webp", "imagens/Personagens/Marvel/venom-costas.webp"],
    category: "personagens",
    subcategory: "marvel",
  },
  {
    id: "30",
    name: "Pelúcia Minions roupa azul 35cm",
    price: 11.11,
    image: "imagens/Personagens/Minions/minion-azul-frente.webp",
    images: ["imagens/Personagens/Minions/minion-azul-lado.webp", "imagens/Personagens/Minions/minion-azul-costas.webp"],
    category: "personagens",
    subcategory: "minions",
  },
  {
    id: "31",
    name: "Pelúcia Minions macacão azul 35cm",
    price: 11.11,
    image: "imagens/Personagens/Minions/minion-macacao-frente.webp",
    images: ["imagens/Personagens/Minions/minion-macacao-lado.webp", "imagens/Personagens/Minions/minions-macacao-costas.webp"],
    category: "personagens",
    subcategory: "minions",
  },
  {
    id: "32",
    name: "Pelúcia Minions roupa vermelha 35cm",
    price: 11.11,
    image: "imagens/Personagens/Minions/minion-vermelho-frente01.webp",
    images: ["imagens/Personagens/Minions/minion-vermelho-lado.webp", "imagens/Personagens/Minions/minion-vermelho-costas.webp"],
    category: "personagens",
    subcategory: "minions",
  },
  {
    id: "33",
    name: "Pelúcia Sullivan 30cm",
    price: 11.11,
    image: "imagens/Personagens/Monstros SA/gatinho-frente02.webp",
    images: ["imagens/Personagens/Monstros SA/gatinho-lado.webp", "imagens/Personagens/Monstros SA/gatinho-costas.webp"],
    category: "personagens",
    subcategory: "monstros-sa",
  },
  {
    id: "34",
    name: "Pelúcia Sullivan 25cm",
    price: 11.11,
    image: "imagens/Personagens/Monstros SA/gatinho-p-frente.webp",
    images: ["imagens/Personagens/Monstros SA/gatinho-p-lado.webp", "imagens/Personagens/Monstros SA/gatinho-p-costas.webp"],
    category: "personagens",
    subcategory: "monstros-sa",
  },
  {
    id: "35",
    name: "Pelúcia Mike Wazowski 30cm",
    price: 11.11,
    image: "imagens/Personagens/Monstros SA/mike-frente.webp",
    images: ["imagens/Personagens/Monstros SA/mike-lado.webp", "imagens/Personagens/Monstros SA/mike-costas.webp"],
    category: "personagens",
    subcategory: "monstros-sa",
  },
  {
    id: "36",
    name: "Pelúcia Charmander 30cm",
    price: 11.11,
    image: "imagens/Personagens/Pokemon/charmander-frente.jpg",
    images: ["imagens/Personagens/Pokemon/charmander-lado.jpg", "imagens/Personagens/Pokemon/charmander-costas.jpg"],
    category: "personagens",
    subcategory: "animes",
  },
  {
    id: "37",
    name: "Pelúcia Psyduck 30cm",
    price: 11.11,
    image: "imagens/Personagens/Pokemon/psyduck-frente.webp",
    images: ["imagens/Personagens/Pokemon/psyduck-lado.webp", "imagens/Personagens/Pokemon/psyduck-costas.webp"],
    category: "personagens",
    subcategory: "animes",
  },
  {
    id: "38",
    name: "Pelúcia Squirtle 30cm",
    price: 11.11,
    image: "imagens/Personagens/Pokemon/squirtie-frente.jpg",
    images: ["imagens/Personagens/Pokemon/squirtie-lado.jpg", "imagens/Personagens/Pokemon/squirtie-costas.jpg"],
    category: "personagens",
    subcategory: "animes",
  },
  {
    id: "39",
    name: "Pelúcia Popeye 25cm",
    price: 11.11,
    image: "imagens/Personagens/Popeye/popeye-frente02.webp",
    images: ["imagens/Personagens/Popeye/popeye-lado02.webp", "imagens/Personagens/Popeye/popeye-costas.webp"],
    category: "personagens",
    subcategory: "popeye",
  },
  {
    id: "40",
    name: "Pelúcia Os Smurfs Gênio 30cm",
    price: 11.11,
    image: "imagens/Personagens/Smurf/smurf-oculos-frente.webp",
    images: ["imagens/Personagens/Smurf/smurf-oculos-lado.webp", "imagens/Personagens/Smurf/smurf-oculos-costas.webp"],
    category: "personagens",
    subcategory: "smurfs",
  },
  {
    id: "41",
    name: "Pelúcia Sonic 30cm",
    price: 11.11,
    image: "imagens/Personagens/Sonic/sonic-azul-frente.webp",
    images: ["imagens/Personagens/Sonic/sonic-azul-lado.webp", "imagens/Personagens/Sonic/sonic-azul-costas.webp"],
    category: "personagens",
    subcategory: "sonic",
  },
  {
    id: "42",
    name: "Pelúcia Stitch peludo 30cm",
    price: 11.11,
    image: "imagens/Personagens/Stitch/stitch-peludo-frente01-editada.jpg",
    images: ["imagens/Personagens/Stitch/stitch-peludo-ladoL-editada.jpg", "imagens/Personagens/Stitch/stitch-peludo-costasL-editada.jpg"],
    category: "personagens",
    subcategory: "stitch",
  },
  {
    id: "43",
    name: "Pelúcia Stitch com Xepa 30cm",
    price: 11.11,
    image: "imagens/Personagens/Stitch/stitch-xepa-frente-editada.jpg",
    images: ["imagens/Personagens/Stitch/stitch-xepa-lado-editada.jpg", "imagens/Personagens/Stitch/stitch-xepa-costas-editada.jpg"],
    category: "personagens",
    subcategory: "stitch",
  },
  {
    id: "44",
    name: "Pelúcia Stitch com Banjo 30cm",
    price: 11.11,
    image: "imagens/Personagens/Stitch/stitch-viola-frente.jpg",
    images: ["imagens/Personagens/Stitch/stitch-viola-lado.jpg", "imagens/Personagens/Stitch/stitch-viola-costas.jpg"],
    category: "personagens",
    subcategory: "stitch",
  },
  {
    id: "45",
    name: "Pelúcia Tartarugas Ninjas Leonardo 30cm",
    price: 11.11,
    image: "imagens/Personagens/Tartarugas ninjas/leonardo-frente.webp",
    images: ["imagens/Personagens/Tartarugas ninjas/leonardo-lado.webp", "imagens/Personagens/Tartarugas ninjas/leonardo-costas.webp"],
    category: "personagens",
    subcategory: "tartaruga-ninja",
  },
  {
    id: "46",
    name: "Pelúcia Xerife Woody 25cm",
    price: 11.11,
    image: "imagens/Personagens/Toy story/woody-frente.webp",
    images: ["imagens/Personagens/Toy story/woody-lado.webp", "imagens/Personagens/Toy story/woody-costas.webp"],
    category: "personagens",
    subcategory: "toystory",
  },
  {
    id: "47",
    name: "Pelúcia Jessie 25cm",
    price: 11.11,
    image: "imagens/Personagens/Toy story/jessie-frente02.webp",
    images: ["imagens/Personagens/Toy story/jessie-lado.webp", "imagens/Personagens/Toy story/jessie-costas.webp"],
    category: "personagens",
    subcategory: "toystory",
  },
  {
    id: "48",
    name: "Pelúcia Buzz Lightyear 25cm",
    price: 11.11,
    image: "imagens/Personagens/Toy story/buzz-frente.webp",
    images: ["imagens/Personagens/Toy story/buzz-lado.webp", "imagens/Personagens/Toy story/buzz-costas.webp"],
    category: "personagens",
    subcategory: "toystory",
  },
  {
    id: "49",
    name: "Pelúcia Lotso, O Ursinho Fofo 30cm",
    price: 11.11,
    image: "imagens/Personagens/Toy story/lotso-frente.webp",
    images: ["imagens/Personagens/Toy story/lotso-lado.webp", "imagens/Personagens/Toy story/lotso-costas.webp"],
    category: "personagens",
    subcategory: "toystory",
  },
  // {
  //   id: 
  //   name: 
  //   price: 
  //   image: 
  //   images: 
  //   category: 
  //   subcategory: 
  // },
  // {
  //   id: 
  //   name: 
  //   price: 
  //   image: 
  //   images: 
  //   category: 
  //   subcategory: 
  // },

  
  
  
];

// =====================================================
// LISTA DE PRODUTOS - SEÇÃO NOVIDADES
// =====================================================

export const productsNovidades: Product[] = [
  // {
  //   id: "6",
  //   name: "Pelúcia Fúria da Noite Banguela 30cm",
  //   price: 79.90,
  //   image: "imagens/Personagens/Como treinar o seu dragão/banguela-frente.jpg",
  //   images: ["/imagens/Personagens/Como treinar o seu dragão/banguela-lado.jpg", "/imagens/Personagens/Como treinar o seu dragão/banguela-costas.jpg"],
  //   category: "personagens",
  //   subcategory: "como-treinar-o-seu-dragao",
  // },
  {
    id: "7",
    name: "Pelúcia Mickey Mouse 30cm",
    price: 75.90,
    image: "imagens/Personagens/Mickey/mickey-frente.jpg",
    images: ["imagens/Personagens/Mickey/mickey-lado.jpg","imagens/Personagens/Mickey/mickey-costas.jpg"],
    category: "personagens",
    subcategory: "mickey"
  },
  {
    id: "8",
    name: "Pelúcia Minnie Mouse 30cm",
    price: 85.90,
    image: "imagens/Personagens/Mickey/minnie-frente.jpg",
    images: ["imagens/Personagens/Mickey/minnie-lado.jpg", "imagens/Personagens/Mickey/minnie-costas.jpg"],
    category: "personagens",
    subcategory: "mickey"
  },
  {
    id: "9",
    name: "Pelúcia Hello Kitty 30cm",
    price: 69.90,
    image: "imagens/Personagens/Hello kit-Kuromi/hellokitty-frente.webp",
    images: ["imagens/Personagens/Hello kit-Kuromi/hellokitty-lado.webp","imagens/Personagens/Hello kit-Kuromi/hellokitty-costas.webp"],
    category: "personagens",
    subcategory: "hello-kitty"
  },
];

// =====================================================
// LISTA DE PRODUTOS - SEÇÃO PROMOÇÕES
// =====================================================

export const productsPromocoes: Product[] = [
  {
    id: "9",
    name: "Pelúcia Pikachu 30cm",
    price: 49.90,
    originalPrice: 79.90,
    image: "imagens/Personagens/Pokemon/pikachu-frente.jpg",
    images: ["imagens/Personagens/Pokemon/pikachu-lado.jpg","imagens/Personagens/Pokemon/pikachu-costas.jpg"],
    category: "personagens",
    subcategory: "animes",
  },
  {
    id: "10",
    name: "Pelúcia Patrick 35cm",
    price: 39.90,
    originalPrice: 65.90,
    image: "imagens/Personagens/Bob esponja/patrick-frente-02.jpg",
    images: ["imagens/Personagens/Bob esponja/patrick-lado.jpg", "imagens/Personagens/Bob esponja/patrick-costas.jpg"],
    category: "personagens",
    subcategory: "bob-esponja",
  },
  {
    id: "11",
    name: "Pelúcia Bob Esponja 30cm",
    price: 44.90,
    originalPrice: 74.90,
    image: "imagens/Personagens/Bob esponja/bob-esponja-frente-02.jpg",
    images: ["imagens/Personagens/Bob esponja/bob-esponja-lado.jpg", "imagens/Personagens/Bob esponja/bob-esponja-costas.jpg"],
    category: "personagens",
    subcategory: "bob-esponja",
  },
  {
    id: "12",
    name: "Pelúcia Eevee 30cm",
    price: 35.90,
    originalPrice: 59.90,
    image: "imagens/Personagens/Pokemon/eevee-frente.jpg",
    images: ["/imagens/Personagens/Pokemon/eevee-frente-orelha-baixa.jpg", "/imagens/Personagens/Pokemon/eevee-lado.jpg", "/imagens/Personagens/Pokemon/eevee-costas.jpg"],
    category: "personagens",
    subcategory: "animes",
  },
];

// =====================================================
// TODOS OS PRODUTOS (PARA FILTRO)
// =====================================================

/**
 * Combina todos os produtos em uma única lista
 * Útil para funcionalidades de busca e filtro
 */
export const allProducts: Product[] = [
  ...productsPelucias,
  ...productsNovidades,
  ...productsPromocoes,
];
