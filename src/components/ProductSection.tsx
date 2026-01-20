/*
  =====================================================
  COMPONENTE: SEÇÃO DE PRODUTOS
  =====================================================
  
*/

import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { ProductCard } from "./ProductCard";
import { Product } from "@/contexts/CartContext";

// =====================================================
// TIPOS
// =====================================================

interface ProductSectionProps {
  id: string;               
  title: string;            
  products: Product[];      
  showViewAll?: boolean;   
  showBackButton?: boolean; 
  maxProducts?: number;     
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
  maxProducts,
}: ProductSectionProps) {
  // Limita produtos se maxProducts for especificado
  const displayedProducts = maxProducts 
    ? products.slice(0, maxProducts)
    : products;
  
  // Não renderiza se não houver produtos
  if (displayedProducts.length === 0) {
    return null;
  }

  return (
    <section id={id} className="py-6 sm:py-8">
      <div className="container mx-auto px-3 sm:px-4">
        {/* ============================================
            BOTÃO VOLTAR (opcional)
        ============================================ */}
        {showBackButton && (
          <Link
            to="/"
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium mb-4 text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            Voltar
          </Link>
        )}

        {/* ============================================
            CABEÇALHO DA SEÇÃO
        ============================================ */}
        <div className="flex items-center justify-between mb-4 sm:mb-6 gap-2">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
            {title}
          </h2>
          
          {showViewAll && (
            <Link
              to={`/${id}`}
              className="flex items-center gap-1 sm:gap-2 text-foreground hover:text-primary transition-colors font-medium text-sm sm:text-base flex-shrink-0"
            >
              <span className="hidden sm:inline">Ver Todos</span>
              <span className="sm:hidden">Todos</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          )}
        </div>

        {/* ============================================
            GRID DE PRODUTOS.
            Responsivo (mobile-first)
        ============================================ */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {displayedProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              images={product.images}
              category={product.category}
              size={product.size}
              originalPrice={product.originalPrice}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
