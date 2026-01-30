# 🏗️ GeoObras — Aplicação Web para Auditoria de Obras Públicas

![Demonstração da aplicação](./docs/demo.gif)

Frontend oficial da **GeoObras**, uma plataforma web interativa para visualização, organização e análise de dados públicos de obras no estado do Rio de Janeiro, com foco em clareza geográfica, experiência do usuário e desempenho. O projeto foi desenvolvido no contexto de um **Hackathon**, integrando visualização cartográfica, consumo de API própria e uma interface moderna construída com React.

---

## 🌐 Deploy

Aplicação disponível em produção:

👉 [https://geo-obras.vercel.app/](https://geo-obras.vercel.app/)

---

## 🧠 Visão Geral

A GeoObras tem como objetivo tornar mais acessível e inteligível a análise de obras públicas, exibindo-as diretamente em um mapa interativo. A aplicação permite visualizar obras georreferenciadas em um mapa navegável interativo com marcadores. Ela também conta com personalização de temas (claro/escuro) e um sistema de filtros para melhor exibir as informações contextuais da obra procurada.

---

## 🔗 Ecossistema do Projeto

* **Frontend (este repositório)**
  [https://github.com/GeoObras-Hackathon/GeoObras-React](https://github.com/GeoObras-Hackathon/GeoObras-React)

* **API / Pipeline ETL (fonte dos dados)**
  [https://github.com/GeoObras-Hackathon/GeoObras-Pipeline-ETL](https://github.com/GeoObras-Hackathon/GeoObras-Pipeline-ETL)

A API é responsável pela coleta, tratamento e disponibilização dos dados consumidos por esta aplicação.

---

## 🛠️ Tecnologias Utilizadas

### Core

* **React**
* **TypeScript**
* **Vite**

### Mapa e Geolocalização

* **Leaflet**
* **React-Leaflet**
* **GeoJSON oficial para mapeamento de municípios**

### Estilização

* **Tailwind CSS**
* CSS utilitário orientado a temas (light / dark)

### Estado Global

* **Zustand**

### Animações

* **Motion (motion/react)**

### Roteamento

* **React Router DOM**

### Ícones

* **React Icons**

---

## 📁 Estrutura de Diretórios

```text
src/
├── assets/
│   └── images/          # Imagens estáticas (logos, fotos, etc)
│
├── components/
│   ├── Header/          # Cabeçalho da aplicação
│   └── MapView/         # Componente principal do mapa
│
├── data/                # GeoJSON para mapeamento
│
├── routes/
│   ├── ErrorPage/      # Página de erros de rota
│   └── Home/           # Componente principal da aplicação
│
├── store/
│   ├── use-map-store.ts    # Estado relacionado ao mapa e obra selecionada
│   ├── use-theme-store.ts  # Tema da aplicação (light/dark)
│   └── use-obras-store.ts  # Fetch, loading e error das obras
│
├── types/             # Tipos personalizados typescript
│
├── App.tsx            # Componente raiz da aplicação
├── index.css          # Arquivo raiz do tailwind
├── main.tsx           # Bootstrap do React
└──...                 # Demais arquivos de configuração vite e typescript
```

---

## 🗺️ Mapa e Camadas

O mapa é o núcleo da aplicação e é renderizado através do **React-Leaflet**, com suporte a:

* Marcadores personalizados por situação da obra
* Interação com clique para seleção
* Camadas geográficas adicionais (ex: municípios)

A separação entre **MapView**, **Markers** e **Layers** mantém a lógica organizada e extensível.

---

## 🎨 Tema (Light / Dark)

O sistema de tema utiliza:

* **Zustand** para estado global
* Persistência em **localStorage**
* Detecção inicial da preferência do navegador

A classe de tema é aplicada diretamente ao `body`, garantindo consistência visual em toda a aplicação.

---

## ⚙️ Estados Globais

A aplicação utiliza **Zustand** para gerenciar estados que precisam ser compartilhados:

* Obra selecionada
* Estado do mapa
* Tema da aplicação
* Loading e error do fetch de dados das obras vindos da API

Essa abordagem evita prop drilling e mantém o código previsível.

---

## ▶️ Como Executar Localmente

### Pré-requisitos

* Node.js (versão compatível com Vite)
* npm/pnpm ou yarn

### Passos

```bash
# Clone o repositório
git clone https://github.com/GeoObras-Hackathon/GeoObras-React

# Acesse a pasta
cd GeoObras-React

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

A aplicação estará disponível em `http://localhost:5173` (porta padrão do Vite).

---

## 🧪 Observações de Desenvolvimento

* O projeto foi estruturado para facilitar manutenção e evolução
* Animações de entrada e saída são controladas via `AnimatePresence`
* Estados de loading e erro são tratados no nível do `App.tsx`
* Nenhuma suposição visual ou funcional é feita sem dados explícitos da API

---

## 👥 Equipe

Projeto desenvolvido por:

* **Felipe Ferrete**
  GitHub: [https://github.com/FelipeFerrete](https://github.com/FelipeFerrete)

* **Gustavo Bosak**
  GitHub: [https://github.com/Gustavo-Bosak](https://github.com/Gustavo-Bosak)

---

## 📄 Licença

MIT License associada.

---