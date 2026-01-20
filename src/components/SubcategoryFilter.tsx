/*
  =====================================================
  COMPONENTE: FILTRO DE SUBCATEGORIAS
  =====================================================
*/

import { Link, useLocation } from "react-router-dom";

// =====================================================
// TIPOS
// =====================================================

interface SubcategoryFilterProps {
  subcategories: Array<{
    id: string;
    label: string;
    path: string;
  }>;
}

// =====================================================
// COMPONENTE PRINCIPAL
// =====================================================

export function SubcategoryFilter({ subcategories }: SubcategoryFilterProps) {
  const location = useLocation();
  
  return (
    <div className="bg-secondary/50 border-b border-border py-3 sm:py-4">
      <div className="container mx-auto">
        {/* Scroll horizontal nativo - permite deslizar para ver todas as opções */}
        <div className="flex flex-nowrap gap-2 sm:gap-3 overflow-x-auto scroll-smooth scrollbar-hide pb-2 px-3 sm:px-4">
          {subcategories.map((subcategory) => {
            // Verifica se esta subcategoria está ativa pela rota atual
            const isActive = location.pathname === subcategory.path;
            
            return (
              <Link
                key={subcategory.id}
                to={subcategory.path}
                className={`
                  px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-medium transition-all whitespace-nowrap flex-shrink-0 text-xs sm:text-sm
                  ${isActive
                    ? "bg-primary text-primary-foreground"  // Estado ativo: fundo laranja
                    : "bg-card text-foreground border border-border hover:border-primary" // Estado inativo
                  }
                `}
              >
                {subcategory.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
