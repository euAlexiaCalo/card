# 👤 Card de Usuário Dinâmico — Web Personalizável

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

---

## Descrição
Uma interface de **Card de Perfil Profissional** moderna e responsiva. O projeto foca na manipulação do DOM e gerenciamento de estados visuais (temas) utilizando JavaScript puro (Vanilla JS).

O app permite ao usuário:
- Visualizar informações profissionais e habilidades de forma organizada.
- Alternar entre **Modo Claro** e **Modo Escuro** com um único clique.
- Interagir com uma interface totalmente estilizada via **CSS Variables**.

> **Objetivo:** demonstrar o uso de Manipulação de Classes, Seletores de DOM e Estilização Dinâmica com CSS.

---

## Principais recursos
- **Dark Mode Nativo**: Alternância completa de cores do fundo, card, botões e textos.
- **Toggle de Texto**: O botão altera dinamicamente seu rótulo entre "Modo escuro" e "Modo claro".
- **Design Responsivo**: Layout centralizado com uso de **Flexbox** e `aspect-ratio`.
- **Variáveis CSS**: Facilidade de manutenção de cores através de `:root`.
- **Efeitos Hover**: Transições suaves e gradientes aplicados aos botões.

---

## Pré-requisitos
Para visualizar ou modificar este projeto, você só precisa de:
- Um navegador moderno (**Chrome, Firefox, Edge ou Safari**).
- Um editor de código (Ex: **VS Code**).
- Extensão **Live Server** (opcional, para atualizações em tempo real).

---

## Como obter o projeto

### Opção 1 — Git (recomendado)
```bash
git clone [https://github.com/seu-usuario/seu-repo.git](https://github.com/seu-usuario/seu-repo.git)
cd seu-repo

### Opção 2 — Download
- Baixe o arquivo .zip do repositório.
- Extraia em uma pasta local.
- Abra o arquivo index.html no seu navegador.

---

## 🔧 Executando o App
1. Navegue até a pasta do projeto.
2. Clique duas vezes no arquivo index.html.
3. Para desenvolvedores:
  - Abra a pasta no VS Code.
  - Clique com o botão direito no index.html e selecione "Open with Live Server".

---

## 📝 Como Usar
- Observe as informações do perfil (Nome, Profissão, Habilidades).
- Clique no botão "Modo escuro" no topo do card para mudar o tema.
- O tema será aplicado a toda a página (body) e aos elementos internos do card.
- Clique em "Entre em Contato" para simular uma ação de engajamento.

---

## 🏗️ Estrutura de Arquivos
- index.html → Estrutura semântica do card e elementos de interface.
- style.css → Gerenciamento de temas (Light/Dark), variáveis e layout.
- card.js → Lógica para alternância de classes e alteração de texto dinâmico.

---

## 📌 Variáveis de Cores (Exemplos)
| Tema  | Fundo (Gradient) | Card | Texto Principal |
| :--- | :--- | :--- | :--- |
| **Claro** | Soft Blue/Purple | White | #333 (Dark Gray) |
| **Escuro** | Deep Purple/Navy | Dark Navy | #FFFFFF (White) |

---

## 📁 Estrutura do Projeto
```text
/CardUsuario
├─ index.html
├─ style.css
└─ card.js

---

## 🚀 Roadmap
- [ ] Implementar salvamento do tema no `localStorage`
- [ ] Adicionar links reais para redes sociais (LinkedIn/GitHub)
- [ ] Criar função para carregar dados do usuário via JSON
- [ ] Implementar animação de entrada do card (Fade-in)

---

## 🤝 Contribuindo
- Faça um **Fork** do projeto
- Crie uma branch: `feat/sua-melhoria`
- Faça o **Commit** das suas alterações
- Abra um **Pull Request**

---

📜 **Licença**
- Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
