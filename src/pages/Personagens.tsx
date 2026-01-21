/*
  =====================================================
  PÁGINA: PERSONAGENS
  =====================================================
  
*/

import { useState } from "react";
import { Header } from "@/components/Header";
import { CategoryFilter } from "@/components/CategoryFilter";
import { SubcategoryFilter } from "@/components/SubcategoryFilter";
import { ProductSection } from "@/components/ProductSection";
import { CartSidebar } from "@/components/CartSidebar";
import { allProducts } from "@/data/products";
import { useLocation } from "react-router-dom";

// =====================================================
// SUBCATEGORIAS DISPONÍVEIS
// =====================================================

const subcategories = [
  { id: "todos", label: "Todos", path: "/personagens" },
  { id: "stitch", label: "Stitch", path: "/personagens/stitch" },
  { id: "marvel", label: "Marvel", path: "/personagens/marvel" },
  { id: "animes", label: "Animes", path: "/personagens/animes" },
  { id: "mario", label: "Mario", path: "/personagens/mario" },
  { id: "grogo", label: "Grogo", path: "/personagens/grogo" },
  { id: "como-treinar-o-seu-dragão", label: "Como treinar o seu dragão", path: "/personagens/como-treinar-o-seu-dragao" },
  { id: "ursinho-pooh", label: "Ursinho Pooh", path: "/personagens/ursinho-pooh" },
  { id: "bob-esponja", label: "Bob Esponja", path: "/personagens/bob-esponja"},
  { id: "garfield", label: "Garfield", path: "/personagens/garfield"},
  { id: "hello-kitty", label: "Hello-Kitty/Kuromi", path:"/personagens/hello-kitty"},
  { id: "mickey", label: "Mickey", path: "/personagens/mickey"},
  { id: "looney-tunes", label: "Looney Tunes", path: "/personagens/looney-tunes"},
  { id: "minions", label: "Minions", path: "/personagens/minions"},
  { id: "monstros-sa", label: "Monstros S.A", path: "/personagens/monstros-sa"},
  { id: "popeye", label: "Popeye", path: "/personagens/popeye"},
  { id: "smurfs", label: "Os Smurfs", path: "/personagens/smurfs"},
  { id: "sonic", label: "Sonic", path: "/personagens/sonic"},
  { id: "toystory", label: "Toy Story", path: "/personagens/toystory"},
  { id: "tartaruga-ninja", label: "Tartarugas Ninjas", path: "/personagens/tartaruga-ninja"},
];

const Personagens = () => {
  const location = useLocation();
  
  // Obtém a subcategoria atual da URL
  const currentSubcategory = location.pathname.split("/").pop() || "todos";
  
  // Filtra produtos da categoria personagens
  let filteredProducts = allProducts.filter((p) => p.category === "personagens");
  
  // Se não for "todos", filtra pela subcategoria
  if (currentSubcategory !== "personagens" && currentSubcategory !== "todos") {
    filteredProducts = filteredProducts.filter(
      (p) => p.subcategory?.toLowerCase() === currentSubcategory.toLowerCase()
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CategoryFilter />
      
      {/* Filtro de subcategorias */}
      <SubcategoryFilter subcategories={subcategories} />
      
      <main>
        <ProductSection
          id="personagens"
          title={currentSubcategory === "todos" || currentSubcategory === "personagens" 
            ? "Personagens" 
            : subcategories.find(s => s.id === currentSubcategory)?.label || "Personagens"}
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
