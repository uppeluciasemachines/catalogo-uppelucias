/*
  =====================================================
  COMPONENTE: CARD DE PRODUTO
  =====================================================
  
  Card individual para exibir uma pelúcia.
  Contém: imagem, nome, preço e botão de adicionar ao carrinho.
  
  COMO USAR:
  <ProductCard
    id="1"
    name="Pelúcia Stitch"
    price={89.90}
    image="/images/produtos/stitch.jpg"
    category="personagens"
  />
  
  PERSONALIZANDO IMAGENS:
  1. Crie a pasta: public/images/produtos/
  2. Salve suas fotos lá (ex: stitch.jpg, grogu.jpg)
  3. Use o caminho: /images/produtos/nome-da-imagem.jpg
*/

import { useState } from "react";
import { ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
import { useCart, Product } from "@/contexts/CartContext";

// =====================================================
// TIPOS
// =====================================================

interface ProductCardProps {
  id: string;           // ID único do produto
  name: string;         // Nome da pelúcia
  price: number;        // Preço (ex: 89.90)
  image: string;        // Caminho da imagem principal
  images?: string[];    // Imagens adicionais (para carrossel)
  category: string;     // Categoria do produto
  size?: string;        // Tamanho (opcional)
}

// =====================================================
// COMPONENTE PRINCIPAL
// =====================================================

export function ProductCard({
  id,
  name,
  price,
  image,
  images = [],
  category,
  size,
}: ProductCardProps) {
  // Acessa a função de adicionar ao carrinho
  const { addToCart } = useCart();
  
  // Estado para controlar a imagem atual no carrossel
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Combina a imagem principal com as imagens adicionais
  // Filtra strings vazias e valores falsy
  const allImages = [image, ...(images || [])].filter((img) => img && img.trim() !== "");
  const hasMultipleImages = allImages.length > 1;
  
  // Navegar para a próxima imagem
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };
  
  // Navegar para a imagem anterior
  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  /**
   * Função chamada ao clicar em "Adicionar ao Carrinho"
   */
  const handleAddToCart = () => {
    const product: Product = {
      id,
      name,
      price,
      image,
      category,
      size,
    };
    addToCart(product);
  };

  /**
   * Formata o preço no padrão brasileiro (R$ XX,XX)
   */
  const formatPrice = (value: number) => {
    return `R$ ${value.toFixed(2).replace(".", ",")}`;
  };

  return (
    <div className="bg-card rounded-lg overflow-hidden card-shadow hover:card-shadow-hover transition-shadow">
      {/* ============================================
          ÁREA DA IMAGEM COM CARROSSEL
          
          INSTRUÇÕES PARA ADICIONAR IMAGENS:
          1. Salve as fotos em: public/images/produtos/
          2. Use image para a foto principal
          3. Use images[] para fotos adicionais
          
          Se não houver imagem, mostra uma área cinza
      ============================================ */}
      <div className="relative aspect-square bg-muted group">
        {allImages.length > 0 ? (
          <img
            src={allImages[currentImageIndex]}
            alt={`${name} - Foto ${currentImageIndex + 1}`}
            className="w-full h-full object-cover transition-opacity duration-300"
          />
        ) : (
          /* Placeholder quando não há imagem */
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            <span className="text-sm">Adicione uma foto</span>
          </div>
        )}
        
        {/* Setas de navegação - aparecem apenas se houver múltiplas imagens */}
        {hasMultipleImages && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white text-gray-900 rounded-full p-2 shadow-lg z-20 transition-all hover:scale-110"
              aria-label="Imagem anterior"
              type="button"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white text-gray-900 rounded-full p-2 shadow-lg z-20 transition-all hover:scale-110"
              aria-label="Próxima imagem"
              type="button"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            
            {/* Indicadores de posição */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
              {allImages.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImageIndex 
                      ? "bg-primary" 
                      : "bg-background/60 hover:bg-background/80"
                  }`}
                  aria-label={`Ver imagem ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* ============================================
          INFORMAÇÕES DO PRODUTO
      ============================================ */}
      <div className="p-4">
        {/* Nome do produto */}
        <h3 className="text-foreground font-semibold text-lg mb-2 line-clamp-2">
          {name}
        </h3>
        
        {/* Preço em destaque (cor laranja) */}
        <p className="text-primary font-bold text-xl mb-4">
          {formatPrice(price)}
        </p>
        
        {/* ============================================
            BOTÃO DE ADICIONAR AO CARRINHO
        ============================================ */}
        <button
          onClick={handleAddToCart}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
        >
          <ShoppingCart className="w-5 h-5" />
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
}
