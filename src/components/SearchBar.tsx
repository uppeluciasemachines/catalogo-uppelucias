/*
  =====================================================
  COMPONENTE: BARRA DE BUSCA
  =====================================================
*/

import { useState, useMemo } from "react";
import { Search, X } from "lucide-react";
import { Product } from "@/contexts/CartContext";
import { ProductCard } from "./ProductCard";

// =====================================================
// TIPOS
// =====================================================

interface SearchBarProps {
  products: Product[];  
  placeholder?: string; 
}

// =====================================================
// COMPONENTE PRINCIPAL
// =====================================================

export function SearchBar({ 
  products, 
  placeholder = "Digite aqui a pelúcia que você busca" 
}: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Filtra produtos baseado no termo de busca
  const filteredProducts = useMemo(() => {
    if (!searchTerm.trim()) {
      return [];
    }

    const term = searchTerm.toLowerCase().trim();
    return products.filter((product) =>
      product.name.toLowerCase().includes(term) ||
      product.category.toLowerCase().includes(term) ||
      (product.size && product.size.toLowerCase().includes(term))
    );
  }, [searchTerm, products]);

  const handleClear = () => {
    setSearchTerm("");
    setIsSearchOpen(false);
  };

  return (
    <div className="relative w-full">
      {/* ============================================
          BARRA DE BUSCA
      ============================================ */}
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
          <Search className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setIsSearchOpen(true);
          }}
          onFocus={() => setIsSearchOpen(true)}
          placeholder={placeholder}
          className="w-full pl-10 pr-10 py-2.5 sm:py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
        />
        {searchTerm && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Limpar busca"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        )}
      </div>

      {/* ============================================
          RESULTADOS DA BUSCA
          Aparece quando há termo de busca e resultados
      ============================================ */}
      {isSearchOpen && searchTerm.trim() && (
        <>
          {/* Overlay para fechar ao clicar fora */}
          <div
            className="fixed inset-0 z-40 bg-black/20"
            onClick={() => setIsSearchOpen(false)}
          />
          
          {/* Container dos resultados */}
          <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-lg shadow-lg z-50 max-h-[70vh] overflow-y-auto">
            {filteredProducts.length > 0 ? (
              <>
                <div className="p-3 sm:p-4 border-b border-border">
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {filteredProducts.length} {filteredProducts.length === 1 ? "resultado encontrado" : "resultados encontrados"}
                  </p>
                </div>
                <div className="p-3 sm:p-4">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                    {filteredProducts.map((product) => (
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
              </>
            ) : (
              <div className="p-6 text-center">
                <p className="text-muted-foreground text-sm sm:text-base">
                  Nenhum produto encontrado para "{searchTerm}"
                </p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
