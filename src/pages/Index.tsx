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
import {
  productsPelucias,
  productsNovidades,
  productsPromocoes,
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
          CONTEÚDO PRINCIPAL
          Seções de produtos organizadas verticalmente
      ============================================ */}
      {/* ============================================
          CONTEÚDO PRINCIPAL
          Seções de produtos organizadas verticalmente
      ============================================ */}
      <main>
        {/* Seção: Pelúcias */}
        <ProductSection
          id="pelucias"
          title="Pelúcias"
          products={productsPelucias}
        />

        {/* Seção: Novidades */}
        <ProductSection
          id="novidades"
          title="Novidades"
          products={productsNovidades}
        />

        {/* Seção: Promoções */}
        <ProductSection
          id="promocoes"
          title="Promoções"
          products={productsPromocoes}
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
