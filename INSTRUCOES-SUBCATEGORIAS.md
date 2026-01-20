# 📚 INSTRUÇÕES: Como Criar Páginas de Subcategorias

Este documento explica como criar novas páginas de subcategorias e fazer as ligações de rotas correspondentes.

---

## 📋 ÍNDICE

1. [Visão Geral](#visão-geral)
2. [Passo a Passo](#passo-a-passo)
3. [Exemplo Completo](#exemplo-completo)
4. [Dicas Importantes](#dicas-importantes)

---

## 🎯 VISÃO GERAL

As subcategorias são filtros dentro de uma categoria principal. Por exemplo:
- **Categoria**: Personagens
- **Subcategorias**: Stitch, Marvel, Animes, Mario, Ursinho Pooh

Cada subcategoria tem sua própria página que mostra apenas os produtos daquela subcategoria.

---

## 📝 PASSO A PASSO

### **PASSO 1: Adicionar Subcategoria aos Produtos**

Edite o arquivo `src/data/products.ts` e adicione o campo `subcategory` aos produtos:

```typescript
{
  id: "14",
  name: "Pelúcia Goku 30cm",
  price: 89.90,
  image: "/imagens/produtos/personagens/goku-frente.jpg",
  images: ["/imagens/produtos/personagens/goku-lado.jpg"],
  category: "personagens",
  subcategory: "animes",  // ← Adicione aqui
  size: "Médio",
}
```

**IMPORTANTE:**
- Use letras minúsculas e hífens (ex: `"ursinho-pooh"`, não `"Ursinho Pooh"`)
- O valor deve corresponder ao `id` da subcategoria no filtro

---

### **PASSO 2: Adicionar Subcategoria ao Filtro**

Edite o arquivo `src/pages/Personagens.tsx` e adicione a nova subcategoria no array `subcategories`:

```typescript
const subcategories = [
  { id: "todos", label: "Todos", path: "/personagens" },
  { id: "stitch", label: "Stitch", path: "/personagens/stitch" },
  { id: "marvel", label: "Marvel", path: "/personagens/marvel" },
  { id: "animes", label: "Animes", path: "/personagens/animes" },
  { id: "mario", label: "Mario", path: "/personagens/mario" },
  { id: "ursinho-pooh", label: "Ursinho Pooh", path: "/personagens/ursinho-pooh" },
  // ← Adicione sua nova subcategoria aqui:
  { id: "nova-subcategoria", label: "Nova Subcategoria", path: "/personagens/nova-subcategoria" },
];
```

**Onde:**
- `id`: identificador único (minúsculas, com hífens)
- `label`: texto que aparece no botão do filtro
- `path`: rota da página (sempre começa com `/personagens/`)

---

### **PASSO 3: Adicionar Rota no App.tsx**

Edite o arquivo `src/App.tsx` e adicione a rota da nova subcategoria:

```typescript
{/* Rotas de subcategorias de Personagens */}
<Route path="/personagens/stitch" element={<Personagens />} />
<Route path="/personagens/marvel" element={<Personagens />} />
<Route path="/personagens/animes" element={<Personagens />} />
<Route path="/personagens/mario" element={<Personagens />} />
<Route path="/personagens/ursinho-pooh" element={<Personagens />} />
{/* ← Adicione sua nova rota aqui: */}
<Route path="/personagens/nova-subcategoria" element={<Personagens />} />
```

**IMPORTANTE:**
- A rota deve corresponder ao `path` definido no array `subcategories`
- Use o mesmo componente `<Personagens />` para todas as subcategorias

---

## 💡 EXEMPLO COMPLETO

Vamos criar uma subcategoria chamada "Disney":

### **1. Adicionar produtos com subcategoria "disney":**

```typescript
// Em src/data/products.ts
{
  id: "15",
  name: "Pelúcia Mickey Mouse 30cm",
  price: 75.90,
  image: "/imagens/produtos/personagens/mickey-frente.jpg",
  images: ["/imagens/produtos/personagens/mickey-lado.jpg"],
  category: "personagens",
  subcategory: "disney",  // ← Nova subcategoria
  size: "Médio",
},
{
  id: "16",
  name: "Pelúcia Minnie Mouse 30cm",
  price: 85.90,
  image: "/imagens/produtos/personagens/minnie-frente.jpg",
  images: ["/imagens/produtos/personagens/minnie-lado.jpg"],
  category: "personagens",
  subcategory: "disney",  // ← Mesma subcategoria
  size: "Pequeno",
},
```

### **2. Adicionar ao filtro:**

```typescript
// Em src/pages/Personagens.tsx
const subcategories = [
  // ... outras subcategorias
  { id: "disney", label: "Disney", path: "/personagens/disney" },
];
```

### **3. Adicionar rota:**

```typescript
// Em src/App.tsx
<Route path="/personagens/disney" element={<Personagens />} />
```

**Pronto!** Agora quando o usuário clicar em "Disney" no filtro, verá apenas os produtos com `subcategory: "disney"`.

---

## ⚠️ DICAS IMPORTANTES

### ✅ **FAÇA:**
- Use IDs em minúsculas com hífens: `"ursinho-pooh"`, `"mario-bros"`
- Mantenha consistência entre o `id` no filtro e o `subcategory` nos produtos
- Teste sempre após adicionar uma nova subcategoria

### ❌ **NÃO FAÇA:**
- Não use espaços ou caracteres especiais nos IDs
- Não esqueça de adicionar a rota no `App.tsx`
- Não use IDs duplicados

### 🔍 **VERIFICAÇÃO:**
Após criar uma subcategoria, verifique:
1. ✅ Produtos têm `subcategory` definida
2. ✅ Subcategoria está no array `subcategories`
3. ✅ Rota está adicionada no `App.tsx`
4. ✅ O filtro aparece na página Personagens
5. ✅ Ao clicar, mostra apenas produtos da subcategoria

---

## 📂 ESTRUTURA DE ARQUIVOS

```
src/
├── pages/
│   └── Personagens.tsx          ← Filtro e lógica de subcategorias
├── components/
│   └── SubcategoryFilter.tsx   ← Componente do filtro
├── data/
│   └── products.ts             ← Produtos com subcategorias
└── App.tsx                      ← Rotas das subcategorias
```

---

## 🆘 PROBLEMAS COMUNS

### **Problema: Subcategoria não aparece no filtro**
- ✅ Verifique se adicionou no array `subcategories` em `Personagens.tsx`

### **Problema: Página mostra "Nenhum produto encontrado"**
- ✅ Verifique se os produtos têm `subcategory` definida
- ✅ Verifique se o `subcategory` corresponde ao `id` no filtro (case-sensitive)

### **Problema: Rota não funciona (404)**
- ✅ Verifique se adicionou a rota no `App.tsx`
- ✅ Verifique se o `path` está correto (sem espaços, com hífens)

---

## 📞 PRECISA DE AJUDA?

Se tiver dúvidas ou problemas:
1. Verifique os exemplos existentes (Stitch, Marvel, Animes)
2. Compare com o código que já funciona
3. Revise este documento passo a passo

---

**Última atualização:** 2024
