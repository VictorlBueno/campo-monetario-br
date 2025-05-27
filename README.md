# 🇧🇷 Input com Máscara Brasileira e Armazenamento Numérico

Este repositório contém uma **solução simples e funcional** para inputs numéricos no padrão **brasileiro** (`1.234,56`) com armazenamento do valor como `number` no state do React.

O componente permite com que o usuário digite valores numéricos livremente (ex: `123124521412`) e, **em tempo real**, e veja o valor sendo formatado automaticamente como `123.124.521.412,00` (ou com a quantidade de casas decimais desejada), **enquanto o estado interno (`state`) já contém o número corretamente convertido** (`123124521412.00`).

---

## 💡 Funcionalidades

- Formatação dinâmica no padrão brasileiro: `1.234,56`
- Valor armazenado como `number` no `useState`
- Configuração de **quantidade de casas decimais**
- Sem dependências externas
- Integração simples com projetos React/Next.js

---

## 🖥️ Preview

Link: [https://campo-monetario-br.vercel.app/](https://campo-monetario-br.vercel.app/)

![image](https://github.com/user-attachments/assets/473a3c62-99b2-451d-a930-f839d966bd1c)
