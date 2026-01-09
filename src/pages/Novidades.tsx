/*
  =====================================================
  PÁGINA: NOVIDADES
  =====================================================
  
  Exibe todos os produtos da categoria Novidades.
*/

import { Header } from "@/components/Header";
import { CategoryFilter } from "@/components/CategoryFilter";
import { ProductSection } from "@/components/ProductSection";
import { CartSidebar } from "@/components/CartSidebar";
import { productsNovidades } from "@/data/products";

const Novidades = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CategoryFilter />
      <main>
        <ProductSection
          id="novidades"
          title="Novidades"
          products={productsNovidades}
          showViewAll={false}
          showBackButton={true}
        />
      </main>
      <CartSidebar />
    </div>
  );
};

export default Novidades;
