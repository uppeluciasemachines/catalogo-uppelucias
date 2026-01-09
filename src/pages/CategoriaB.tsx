/*
  =====================================================
  PÁGINA: CATEGORIA B
  =====================================================
*/

import { Header } from "@/components/Header";
import { ProductSection } from "@/components/ProductSection";
import { CartSidebar } from "@/components/CartSidebar";
import { allProducts } from "@/data/products";

const CategoriaB = () => {
  const filteredProducts = allProducts.filter((p) => p.category === "categoria-b");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ProductSection
          id="categoria-b"
          title="Categoria B"
          products={filteredProducts}
          showViewAll={false}
          showBackButton={true}
        />
      </main>
      <CartSidebar />
    </div>
  );
};

export default CategoriaB;
