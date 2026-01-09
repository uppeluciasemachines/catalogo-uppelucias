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
    image: "/imagens/produtos/personagens/Stitch frente.jpg", // Adicione: /images/produtos/foto-principal.jpg
    images: ["/imagens/produtos/personagens/Stitch lado.jpg", "/imagens/produtos/personagens/Stitch costas.jpg"], // Adicione mais fotos: ["/images/produtos/foto2.jpg", "/images/produtos/foto3.jpg"]
    category: "personagens",
    size: "Médio",
  },
  {
    id: "2",
    name: "Pelúcia Angel 30cm",
    price: 65.90,
    image: "/imagens/produtos/personagens/Angel frente.jpg",
    images: ["/imagens/produtos/personagens/Angel lado.jpg","/imagens/produtos/personagens/Angel costas.jpg"],
    category: "personagens",
    size: "Pequeno",
  },
  {
    id: "3",
    name: "Pelúcia Fúria da Noite Banguela 30cm",
    price: 79.90,
    image: "/imagens/produtos/personagens/Banguela frente.jpg",
    images: ["/imagens/produtos/personagens/Banguela lado.jpg", "/imagens/produtos/personagens/Banguela costas.jpg"],
    category: "personagens",
    size: "Grande",
  },
  {
    id: "4",
    name: "Pelúcia Fúria da Luz 30cm",
    price: 56.90,
    image: "/imagens/produtos/personagens/Furia da luz frente.jpg",
    images: ["/imagens/produtos/personagens/Furia da luz lado.jpg", "/imagens/produtos/personagens/Furia da luz costas.jpg"],
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
    image: "/imagens/produtos/personagens/Charmander frente.jpg",
    images: ["/imagens/produtos/personagens/Charmander lado.jpg", "/imagens/produtos/personagens/Charmander costas.jpg"],
    category: "personagens",
    size: "Grande",
  },
  {
    id: "6",
    name: "Pelúcia Mickey Mouse 30cm",
    price: 75.90,
    image: "/imagens/produtos/personagens/Mickey frente.jpg",
    images: ["/imagens/produtos/personagens/Mickey lado.jpg", "/imagens/produtos/personagens/Mickey costas.jpg"],
    category: "personagens",
    size: "Médio",
  },
  {
    id: "7",
    name: "Pelúcia Minnie Mouse 30cm",
    price: 85.90,
    image: "/imagens/produtos/personagens/Minnie frente.jpg",
    images: ["/imagens/produtos/personagens/Minnie lado.jpg", "/imagens/produtos/personagens/Minnie costas.jpg"],
    category: "personagens",
    size: "Pequeno",
  },
  {
    id: "8",
    name: "Pelúcia Kuromi 30cm",
    price: 69.90,
    image: "/imagens/produtos/personagens/Kuromi frente vestido rosa.jpg",
    images: ["/imagens/produtos/personagens/Kuromi lado vestido rosa.jpg", "/imagens/produtos/personagens/Kuromi costas vestido rosa.jpg"],
    category: "personagens",
    size: "Médio",
  },
];

// =====================================================
// LISTA DE PRODUTOS - SEÇÃO PROMOÇÕES
// =====================================================

/**
 * Produtos da seção "Promoções"
 * Mesma estrutura dos produtos acima
 */
export const productsPromocoes: Product[] = [
  {
    id: "9",
    name: "Pelúcia Pikachu 30cm",
    price: 49.90,
    image: "/imagens/produtos/personagens/Pikachu frente.jpg",
    images: ["/imagens/produtos/personagens/Pikachu lado.jpg", "/imagens/produtos/personagens/Pikachu costas.jpg"],
    category: "personagens",
    size: "Pequeno",
  },
  {
    id: "10",
    name: "Pelúcia Patrick 35cm",
    price: 39.90,
    image: "/imagens/produtos/personagens/Patrick frente 02.jpg",
    images: ["/imagens/produtos/personagens/Patrick lado.jpg", "/imagens/produtos/personagens/Patrick costas.jpg"],
    category: "personagens",
    size: "Médio",
  },
  {
    id: "11",
    name: "Pelúcia Bob Esponja 30cm",
    price: 44.90,
    image: "/imagens/produtos/personagens/Bob esponja frente 02.jpg",
    images: ["/imagens/produtos/personagens/bob esponja lado.jpg", "/imagens/produtos/personagens/Bob esponja costas.jpg"],
    category: "personagens",
    size: "Grande",
  },
  {
    id: "12",
    name: "Pelúcia Eevee 30cm",
    price: 35.90,
    image: "/imagens/produtos/personagens/Eevee frente.jpg",
    images: ["/imagens/produtos/personagens/Eevee frente orelha baixa.jpg", "/imagens/produtos/personagens/Eevee lado.jpg", "/imagens/produtos/personagens/Eevee costas.jpg"],
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
