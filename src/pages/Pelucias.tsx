/*
  =====================================================
  PÁGINA: PELÚCIAS
  =====================================================
  
  Exibe todos os produtos da categoria Pelúcias.
*/

import { Header } from "@/components/Header";
import { CategoryFilter } from "@/components/CategoryFilter";
import { ProductSection } from "@/components/ProductSection";
import { CartSidebar } from "@/components/CartSidebar";
import { productsPelucias } from "@/data/products";

const Pelucias = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CategoryFilter />
      <main>
        <ProductSection
          id="pelucias"
          title="Pelúcias"
          products={productsPelucias}
          showViewAll={false}
          showBackButton={true}
        />
      </main>
      <CartSidebar />
    </div>
  );
};

export default Pelucias;
