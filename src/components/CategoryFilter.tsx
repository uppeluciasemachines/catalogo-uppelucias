/*
  =====================================================
  COMPONENTE: FILTRO DE CATEGORIAS
  =====================================================
  
  Barra de botões para navegar entre categorias.
  Fica logo abaixo do cabeçalho.
  
  PARA PERSONALIZAR AS CATEGORIAS:
  Modifique o array "categories" abaixo
*/

import { Link, useLocation } from "react-router-dom";

// =====================================================
// LISTA DE CATEGORIAS DISPONÍVEIS
// =====================================================

/**
 * Categorias para navegação
 * 
 * COMO EDITAR:
 * - id: identificador único (usar em minúsculas, sem espaços)
 * - label: texto que aparece no botão
 * - path: caminho da página
 * 
 * EXEMPLO:
 * { id: "personagens", label: "Personagens", path: "/personagens" }
 */
const categories = [
  { id: "todos", label: "Todos", path: "/" },
  { id: "personagens", label: "Personagens", path: "/personagens" },
  { id: "categoria-b", label: "Categoria B", path: "/categoria-b" },
  { id: "categoria-c", label: "Categoria C", path: "/categoria-c" },
  { id: "categoria-c", label: "Categoria C", path: "/categoria-c" },
];

// =====================================================
// COMPONENTE PRINCIPAL
// =====================================================

export function CategoryFilter() {
  const location = useLocation();
  
  return (
    <div className="bg-card border-b border-border py-3 sm:py-4">
      <div className="container mx-auto">
        {/* Scroll horizontal nativo - permite deslizar para ver todas as opções */}
        <div className="flex flex-nowrap gap-3 overflow-x-auto scroll-smooth scrollbar-hide pb-2 px-3 sm:px-4">
          {categories.map((category) => {
            // Verifica se esta categoria está ativa pela rota atual
            const isActive = location.pathname === category.path;
            
            return (
              <Link
                key={category.id}
                to={category.path}
                className={`
                  px-4 py-2 rounded-full font-medium transition-all whitespace-nowrap flex-shrink-0 text-sm sm:text-base
                  ${isActive
                    ? "bg-primary text-primary-foreground"  // Estado ativo: fundo laranja
                    : "bg-secondary text-foreground border border-border hover:border-primary" // Estado inativo
                  }
                `}
              >
                {category.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// =====================================================
// EXPORTA A LISTA DE CATEGORIAS PARA USO EM OUTROS ARQUIVOS
// =====================================================

export { categories };
