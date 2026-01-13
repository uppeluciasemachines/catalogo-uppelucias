/*
  =====================================================
  DADOS DOS PRODUTOS - CATÁLOGO DE PELÚCIAS
  =====================================================
  
  Este arquivo contém todos os produtos do catálogo.
  Edite aqui para adicionar, remover ou modificar pelúcias.
  
  COMO ADICIONAR UM NOVO PRODUTO:
  1. Copie um bloco de produto existente
  2. Altere os valores (id, name, price, image, category)
  3. Salve o arquivo
  
  IMPORTANTE:
  - O ID deve ser único para cada produto
  - O preço deve ser um número (ex: 89.90, não "R$ 89,90")
  - A categoria deve corresponder a uma das categorias em CategoryFilter.tsx
  
  SOBRE AS IMAGENS:
  1. Crie a pasta: public/images/produtos/
  2. Salve suas fotos lá
  3. Use o caminho: /images/produtos/nome-da-foto.jpg
  4. Deixe image: "" para mostrar placeholder
*/

import { Product } from "@/contexts/CartContext";

// =====================================================
// LISTA DE PRODUTOS - SEÇÃO PELÚCIAS
// =====================================================

/**
 * Produtos da seção principal "Pelúcias"
 * 
 * ESTRUTURA DE CADA PRODUTO:
 * - id: identificador único (string)
 * - name: nome que aparece no card
 * - price: preço em reais (número decimal)
 * - image: caminho da imagem ou "" para placeholder
 * - category: categoria para filtro
 * - size: tamanho (opcional)
 */
export const productsPelucias: Product[] = [
  {
    id: "1",
    name: "Pelúcia Stitch 30cm",
    price: 89.90,
    image: "/imagens/produtos/personagens/stitch-frente.jpg", // Adicione: /images/produtos/foto-principal.jpg
    images: ["/imagens/produtos/personagens/stitch-lado.jpg", "/imagens/produtos/personagens/stitch-costas.jpg"], // Adicione mais fotos: ["/images/produtos/foto2.jpg", "/images/produtos/foto3.jpg"]
    category: "personagens",
    size: "Médio",
  },
  {
    id: "2",
    name: "Pelúcia Angel 30cm",
    price: 65.90,
    image: "/imagens/produtos/personagens/angel-frente.jpg",
    images: ["/imagens/produtos/personagens/angel-lado.jpg","/imagens/produtos/personagens/angel-costas.jpg"],
    category: "personagens",
    size: "Pequeno",
  },
  {
    id: "3",
    name: "Pelúcia Fúria da Noite Banguela 30cm",
    price: 79.90,
    image: "/imagens/produtos/personagens/banguela-frente.jpg",
    images: ["/imagens/produtos/personagens/banguela-lado.jpg", "/imagens/produtos/personagens/banguela-costas.jpg"],
    category: "personagens",
    size: "Grande",
  },
  {
    id: "4",
    name: "Pelúcia Fúria da Luz 30cm",
    price: 56.90,
    image: "/imagens/produtos/personagens/furia-da-luz-frente.jpg",
    images: ["/imagens/produtos/personagens/Furia-da-luz-lado.jpg", "/imagens/produtos/personagens/furia-da-luz-costas.jpg"],
    category: "personagens",
    size: "Médio",
  },
];

// =====================================================
// LISTA DE PRODUTOS - SEÇÃO NOVIDADES
// =====================================================

/**
 * Produtos da seção "Novidades"
 * Mesma estrutura dos produtos acima
 */
export const productsNovidades: Product[] = [
  {
    id: "5",
    name: "Pelúcia Charmander 30cm",
    price: 99.90,
    image: "/imagens/produtos/personagens/charmander-frente.jpg",
    images: ["/imagens/produtos/personagens/charmander-lado.jpg", "/imagens/produtos/personagens/charmander-costas.jpg"],
    category: "personagens",
    size: "Grande",
  },
  {
    id: "6",
    name: "Pelúcia Mickey Mouse 30cm",
    price: 75.90,
    image: "/imagens/produtos/personagens/mickey-frente.jpg",
    images: ["/imagens/produtos/personagens/mickey-lado.jpg", "/imagens/produtos/personagens/mickey-costas.jpg"],
    category: "personagens",
    size: "Médio",
  },
  {
    id: "7",
    name: "Pelúcia Minnie Mouse 30cm",
    price: 85.90,
    image: "/imagens/produtos/personagens/minnie-frente.jpg",
    images: ["/imagens/produtos/personagens/minnie-lado.jpg", "/imagens/produtos/personagens/minnie-costas.jpg"],
    category: "personagens",
    size: "Pequeno",
  },
  {
    id: "8",
    name: "Pelúcia Kuromi 30cm",
    price: 69.90,
    image: "/imagens/produtos/personagens/kuromi-frente-vestido-rosa.jpg",
    images: ["/imagens/produtos/personagens/kuromi-lado-vestido-rosa.jpg", "/imagens/produtos/personagens/kuromi-costas-vestido-rosa.jpg"],
    category: "personagens",
    size: "Médio",
  },
];

// =====================================================
// LISTA DE PRODUTOS - SEÇÃO PROMOÇÕES
// =====================================================

/**
 * Produtos da seção "Promoções"
 * Inclui preço original (originalPrice) para exibir formato promocional
 */
export const productsPromocoes: Product[] = [
  {
    id: "9",
    name: "Pelúcia Pikachu 30cm",
    price: 49.90,
    originalPrice: 79.90,
    image: "/imagens/produtos/personagens/pikachu-frente.jpg",
    images: ["/imagens/produtos/personagens/pikachu-lado.jpg", "/imagens/produtos/personagens/pikachu-costas.jpg"],
    category: "personagens",
    size: "Pequeno",
  },
  {
    id: "10",
    name: "Pelúcia Patrick 35cm",
    price: 39.90,
    originalPrice: 65.90,
    image: "/imagens/produtos/personagens/patrick-frente 02.jpg",
    images: ["/imagens/produtos/personagens/patrick-lado.jpg", "/imagens/produtos/personagens/patrick-costas.jpg"],
    category: "personagens",
    size: "Médio",
  },
  {
    id: "11",
    name: "Pelúcia Bob Esponja 30cm",
    price: 44.90,
    originalPrice: 74.90,
    image: "/imagens/produtos/personagens/bob-esponja-frente-02.jpg",
    images: ["/imagens/produtos/personagens/bob-esponja-lado.jpg", "/imagens/produtos/personagens/bob-esponja-costas.jpg"],
    category: "personagens",
    size: "Grande",
  },
  {
    id: "12",
    name: "Pelúcia Eevee 30cm",
    price: 35.90,
    originalPrice: 59.90,
    image: "/imagens/produtos/personagens/eevee-frente.jpg",
    images: ["/imagens/produtos/personagens/eevee-frente-orelha-baixa.jpg", "/imagens/produtos/personagens/eevee-lado.jpg", "/imagens/produtos/personagens/eevee-costas.jpg"],
    category: "personagens",
    size: "Pequeno",
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
