# 🚀 Movimento.APP

![Angular](https://img.shields.io/badge/Angular-20.1.7-red?logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue?logo=typescript)
![Entity Framework](https://img.shields.io/badge/EFCore-8.0-green?logo=microsoft)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-purple?logo=bootstrap)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

Aplicação **Angular 20** para gerenciamento de **Movimentos Manuais**, utilizando **Entity Framework Core** para persistência de dados.  
O sistema segue **boas práticas de Orientação a Objetos**, **princípios SOLID**, **DRY** e padrões modernos de projeto.

---

## 🛠 Tecnologias

- 🔹 Angular 20
- 🔹 TypeScript
- 🔹 Bootstrap 5
- 🔹 RxJS
- 🔹 Ngx-Mask
- 🔹 ASP.NET Core (.NET 8+)
- 🔹 Entity Framework Core (última versão)
- 🔹 SQL Server / PostgreSQL
- 🔹 LINQ / Stored Procedures
- 🔹 Git / GitHub

---

## 📋 Funcionalidades

### Grid de Movimentos

- 📊 Lista todos os movimentos manuais para o mês e ano selecionados.
- ⚡ Preenchimento automático via **stored procedure**:
  - Mês
  - Ano
  - Código do produto
  - Descrição do produto
  - Número do lançamento
  - Descrição
  - Valor
- 🔹 Ordenação: mês → ano → número do lançamento.

### Inclusão de Movimento

- ➕ Botão para habilitar campos da tela.
- 🗓 Digitação de **mês** e **ano**.
- 📦 Seleção de produtos e códigos COSIF via combobox:
  - Produto: exibe `des_produto`
  - Cosif: exibe `cod_cosif - cod_classificacao`
- 🔢 Número do lançamento gerado automaticamente:
Ano 2012, Mês 05: lançamentos 1, 2, 3
Ano 2012, Mês 06: lançamentos 1, 2

- 💰 Campos `val_valor` e `des_descricao` preenchidos manualmente.
- 📅 `dt_movimento` preenchido automaticamente com data/hora.
- ✅ Após inclusão: grid atualizada e campos desabilitados.

---

## 📐 Boas Práticas e Padrões

- 🔹 **Orientação a Objetos**: classes separadas por responsabilidade.
- 🔹 **SOLID**: manutenção e extensibilidade.
- 🔹 **DRY**: serviços e utilitários reutilizáveis.
- 🔹 **Patterns**:
  - Repository Pattern para persistência.
  - Services para regras de negócio.
  - DTOs para comunicação entre camadas.
- 🔹 **Reactive Forms**: validação de dados no Angular.
- 🔹 **RxJS**: manipulação de streams e eventos.

---

## ⚙️ Estrutura do Projeto
Movimento.APP/
├─ src/
│ ├─ app/
│ │ ├─ components/ # Componentes Angular
│ │ ├─ services/ # Serviços para comunicação com API
│ │ ├─ models/ # DTOs e models
│ │ ├─ pages/ # Páginas do sistema
│ │ └─ shared/ # Componentes e utilitários compartilhados
├─ assets/ # CSS, imagens
├─ environments/ # Configurações de ambiente
├─ package.json
└─ angular.json


---

## ⚡ Como Executar

1. Instalar dependências:

```bash
npm install

2. Rodar a aplicação:
ng serve

3. Abrir no navegador: http://localhost:4200
