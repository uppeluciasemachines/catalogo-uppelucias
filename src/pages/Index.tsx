/*
  =====================================================
  PÁGINA PRINCIPAL - UP UNIVERSO DAS PELÚCIAS
  =====================================================
  
  Esta é a página inicial do catálogo.
  Contém:
  - Cabeçalho com logo e menu
  - Filtro de categorias
  - Seções de produtos (Pelúcias, Novidades, Promoções)
  - Sidebar do carrinho
  
  PARA PERSONALIZAR:
  - Produtos: edite src/data/products.ts
  - Categorias: edite src/components/CategoryFilter.tsx
  - Cores: edite src/index.css
  - WhatsApp: edite src/components/CartSidebar.tsx
*/

import { Header } from "@/components/Header";
import { CategoryFilter } from "@/components/CategoryFilter";
import { ProductSection } from "@/components/ProductSection";
import { CartSidebar } from "@/components/CartSidebar";
import { SearchBar } from "@/components/SearchBar";
import {
  productsPelucias,
  productsNovidades,
  productsPromocoes,
  allProducts,
} from "@/data/products";

// =====================================================
// COMPONENTE PRINCIPAL DA PÁGINA
// =====================================================

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* ============================================
          CABEÇALHO FIXO
          Contém: logo, menu e ícone do carrinho
      ============================================ */}
      <Header />

      {/* ============================================
          FILTRO DE CATEGORIAS
          Barra com botões para navegar entre categorias
      ============================================ */}
      <CategoryFilter />

      {/* ============================================
          BARRA DE BUSCA
          Permite buscar produtos no catálogo
      ============================================ */}
      <div className="bg-card border-b border-border py-4">
        <div className="container mx-auto px-3 sm:px-4">
          <SearchBar products={allProducts} />
        </div>
      </div>

      {/* ============================================
          CONTEÚDO PRINCIPAL
          Seções de produtos organizadas verticalmente
      ============================================ */}
      {/* ============================================
          CONTEÚDO PRINCIPAL
          Seções de produtos organizadas verticalmente
      ============================================ */}
      <main>
        {/* Seção: Pelúcias - Limite de 4 produtos na página principal */}
        <ProductSection
          id="pelucias"
          title="Pelúcias"
          products={productsPelucias}
          maxProducts={4}
        />

        {/* Seção: Novidades - Limite de 4 produtos na página principal */}
        <ProductSection
          id="novidades"
          title="Novidades"
          products={productsNovidades}
          maxProducts={4}
        />

        {/* Seção: Promoções - Limite de 4 produtos na página principal */}
        <ProductSection
          id="promocoes"
          title="Promoções"
          products={productsPromocoes}
          maxProducts={4}
        />
      </main>

      {/* ============================================
          BARRA LATERAL DO CARRINHO
          Aparece ao clicar no ícone do carrinho
      ============================================ */}
      <CartSidebar />
    </div>
  );
};

export default Index;
