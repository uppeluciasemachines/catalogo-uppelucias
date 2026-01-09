/*
  =====================================================
  PÁGINA: PERSONAGENS
  =====================================================
  
  Exibe todos os produtos da categoria Personagens.
*/

import { Header } from "@/components/Header";
import { CategoryFilter } from "@/components/CategoryFilter";
import { ProductSection } from "@/components/ProductSection";
import { CartSidebar } from "@/components/CartSidebar";
import { allProducts } from "@/data/products";

const Personagens = () => {
  const filteredProducts = allProducts.filter((p) => p.category === "personagens");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CategoryFilter />
      <main>
        <ProductSection
          id="personagens"
          title="Personagens"
          products={filteredProducts}
          showViewAll={false}
          showBackButton={true}
        />
      </main>
      <CartSidebar />
    </div>
  );
};

export default Personagens;
