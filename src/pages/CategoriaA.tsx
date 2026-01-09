/*
  =====================================================
  PÁGINA: CATEGORIA A
  =====================================================
*/

import { Header } from "@/components/Header";
import { ProductSection } from "@/components/ProductSection";
import { CartSidebar } from "@/components/CartSidebar";
import { allProducts } from "@/data/products";

const CategoriaA = () => {
  const filteredProducts = allProducts.filter((p) => p.category === "categoria-a");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ProductSection
          id="categoria-a"
          title="Categoria A"
          products={filteredProducts}
          showViewAll={false}
          showBackButton={true}
        />
      </main>
      <CartSidebar />
    </div>
  );
};

export default CategoriaA;
