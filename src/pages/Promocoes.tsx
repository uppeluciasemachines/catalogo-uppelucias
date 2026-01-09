/*
  =====================================================
  PÁGINA: PROMOÇÕES
  =====================================================
  
  Exibe todos os produtos da categoria Promoções.
*/

import { Header } from "@/components/Header";
import { CategoryFilter } from "@/components/CategoryFilter";
import { ProductSection } from "@/components/ProductSection";
import { CartSidebar } from "@/components/CartSidebar";
import { productsPromocoes } from "@/data/products";

const Promocoes = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CategoryFilter />
      <main>
        <ProductSection
          id="promocoes"
          title="Promoções"
          products={productsPromocoes}
          showViewAll={false}
          showBackButton={true}
        />
      </main>
      <CartSidebar />
    </div>
  );
};

export default Promocoes;
