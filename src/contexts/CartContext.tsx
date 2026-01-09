/*
  =====================================================
  CONTEXTO DO CARRINHO DE COMPRAS
  =====================================================
  
  Este arquivo gerencia o estado do carrinho em toda a aplicação.
  
  FUNCIONALIDADES:
  - Adicionar produtos ao carrinho
  - Remover produtos do carrinho
  - Atualizar quantidade de produtos
  - Calcular total do pedido
  - Gerar mensagem para WhatsApp
  
  COMO USAR EM OUTROS COMPONENTES:
  import { useCart } from "@/contexts/CartContext";
  const { cart, addToCart, removeFromCart } = useCart();
*/

import React, { createContext, useContext, useState, ReactNode } from "react";

// =====================================================
// TIPOS DE DADOS
// =====================================================

/**
 * Estrutura de um produto
 * Modifique aqui se precisar adicionar mais campos
 */
export interface Product {
  id: string;           // Identificador único
  name: string;         // Nome da pelúcia
  price: number;        // Preço em reais (ex: 89.90)
  image: string;        // URL ou caminho da imagem principal
  images?: string[];    // URLs de imagens adicionais (para carrossel)
  category: string;     // Categoria do produto
  size?: string;        // Tamanho (opcional)
}

/**
 * Item no carrinho = produto + quantidade
 */
export interface CartItem extends Product {
  quantity: number;
}

/**
 * Funções disponíveis no contexto do carrinho
 */
interface CartContextType {
  cart: CartItem[];                                    // Lista de itens no carrinho
  addToCart: (product: Product) => void;               // Adicionar produto
  removeFromCart: (productId: string) => void;         // Remover produto
  updateQuantity: (productId: string, qty: number) => void; // Atualizar quantidade
  clearCart: () => void;                               // Limpar carrinho
  getTotalItems: () => number;                         // Total de itens
  getTotalPrice: () => number;                         // Valor total
  generateWhatsAppMessage: () => string;               // Gerar mensagem WhatsApp
  isCartOpen: boolean;                                 // Carrinho aberto?
  setIsCartOpen: (open: boolean) => void;              // Abrir/fechar carrinho
}

// =====================================================
// CRIAÇÃO DO CONTEXTO
// =====================================================

const CartContext = createContext<CartContextType | undefined>(undefined);

// =====================================================
// PROVEDOR DO CARRINHO
// =====================================================

export function CartProvider({ children }: { children: ReactNode }) {
  // Estado do carrinho (lista de itens)
  const [cart, setCart] = useState<CartItem[]>([]);
  
  // Estado para controlar se a barra lateral do carrinho está aberta
  const [isCartOpen, setIsCartOpen] = useState(false);

  /**
   * Adiciona um produto ao carrinho
   * Se o produto já existir, aumenta a quantidade
   */
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      // Verifica se o produto já está no carrinho
      const existingItem = prevCart.find((item) => item.id === product.id);
      
      if (existingItem) {
        // Produto já existe: aumenta quantidade
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      // Produto novo: adiciona com quantidade 1
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  /**
   * Remove um produto completamente do carrinho
   */
  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  /**
   * Atualiza a quantidade de um produto específico
   * Se quantidade for 0 ou menos, remove o produto
   */
  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  /**
   * Limpa todos os itens do carrinho
   */
  const clearCart = () => {
    setCart([]);
  };

  /**
   * Retorna o número total de itens no carrinho
   * (soma das quantidades de todos os produtos)
   */
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  /**
   * Retorna o valor total do carrinho em reais
   */
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  /**
   * Gera a mensagem formatada para enviar via WhatsApp
   * 
   * PERSONALIZE A MENSAGEM:
   * Altere o texto abaixo conforme necessário
   */
  const generateWhatsAppMessage = () => {
    // Cabeçalho da mensagem
    let message = "🧸 *PEDIDO - UP Universo das Pelúcias*\n\n";
    message += "━━━━━━━━━━━━━━━━━━━━━━\n\n";
    
    // Lista de produtos
    cart.forEach((item, index) => {
      message += `*${index + 1}. ${item.name}*\n`;
      if (item.size) {
        message += `   Tamanho: ${item.size}\n`;
      }
      message += `   Quantidade: ${item.quantity}\n`;
      message += `   Preço unitário: R$ ${item.price.toFixed(2).replace(".", ",")}\n`;
      message += `   Subtotal: R$ ${(item.price * item.quantity).toFixed(2).replace(".", ",")}\n\n`;
    });
    
    // Rodapé com total
    message += "━━━━━━━━━━━━━━━━━━━━━━\n";
    message += `\n💰 *TOTAL: R$ ${getTotalPrice().toFixed(2).replace(".", ",")}*\n\n`;
    message += "Por favor, confirme meu pedido! 😊";
    
    return message;
  };

  // Valor disponibilizado para os componentes filhos
  const value: CartContextType = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
    generateWhatsAppMessage,
    isCartOpen,
    setIsCartOpen,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// =====================================================
// HOOK PARA USAR O CARRINHO
// =====================================================

/**
 * Hook personalizado para acessar o carrinho
 * 
 * EXEMPLO DE USO:
 * const { cart, addToCart } = useCart();
 */
export function useCart() {
  const context = useContext(CartContext);
  
  if (context === undefined) {
    throw new Error("useCart deve ser usado dentro de um CartProvider");
  }
  
  return context;
}
