/*
  =====================================================
  COMPONENTE: SEÇÃO DE PRODUTOS
  =====================================================
  
  Exibe uma seção com título e grid de produtos.
  Usado para criar as seções: Pelúcias, Novidades, Promoções.
  
  COMO USAR:
  <ProductSection
    id="pelucias"
    title="Pelúcias"
    products={listaDeProdutos}
  />
*/

import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { ProductCard } from "./ProductCard";
import { Product } from "@/contexts/CartContext";

// =====================================================
// TIPOS
// =====================================================

interface ProductSectionProps {
  id: string;               // ID para navegação (ex: "pelucias")
  title: string;            // Título da seção
  products: Product[];      // Lista de produtos para exibir
  showViewAll?: boolean;    // Mostrar link "Ver Todos"
  showBackButton?: boolean; // Mostrar botão "Voltar"
}

// =====================================================
// COMPONENTE PRINCIPAL
// =====================================================

export function ProductSection({
  id,
  title,
  products,
  showViewAll = true,
  showBackButton = false,
}: ProductSectionProps) {
  // Não renderiza se não houver produtos
  if (products.length === 0) {
    return null;
  }

  return (
    <section id={id} className="py-8">
      <div className="container mx-auto px-4">
        {/* ============================================
            BOTÃO VOLTAR (opcional)
        ============================================ */}
        {showBackButton && (
          <Link
            to="/"
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar
          </Link>
        )}

        {/* ============================================
            CABEÇALHO DA SEÇÃO
            Título à esquerda, link "Ver Todos" à direita
        ============================================ */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            {title}
          </h2>
          
          {showViewAll && (
            <Link
              to={`/${id}`}
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              Ver Todos
              <ArrowRight className="w-5 h-5" />
            </Link>
          )}
        </div>

        {/* ============================================
            GRID DE PRODUTOS
            
            Responsivo:
            - 1 coluna em telas pequenas
            - 2 colunas em tablets
            - 4 colunas em desktops
        ============================================ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              images={product.images}
              category={product.category}
              size={product.size}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
