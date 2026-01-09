/*
  =====================================================
  PÁGINA: CATEGORIA C
  =====================================================
*/

import { Header } from "@/components/Header";
import { ProductSection } from "@/components/ProductSection";
import { CartSidebar } from "@/components/CartSidebar";
import { allProducts } from "@/data/products";

const CategoriaC = () => {
  const filteredProducts = allProducts.filter((p) => p.category === "categoria-c");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ProductSection
          id="categoria-c"
          title="Categoria C"
          products={filteredProducts}
          showViewAll={false}
          showBackButton={true}
        />
      </main>
      <CartSidebar />
    </div>
  );
};

export default CategoriaC;
