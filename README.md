# dRTS

> **d**esign **R**eact **T**ailwind **S**hadcn - Uma biblioteca moderna de componentes React construída com Tailwind CSS, padrões shadcn/ui e primitivos Radix UI.

[![npm version](https://img.shields.io/npm/v/d-rts.svg)](https://www.npmjs.com/package/d-rts)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Visão Geral

dRTS é uma biblioteca abrangente e pronta para produção que combina o poder do Tailwind CSS, padrões de design shadcn/ui e primitivos de acessibilidade Radix UI. Fornece mais de 30 componentes pré-construídos, hooks customizados, serviços e utilitários para construir aplicações web modernas.

## Características

- **30+ Componentes UI** - Componentes pré-construídos e customizáveis seguindo padrões shadcn/ui
- **Type-Safe** - Suporte completo a TypeScript com tipos exportados
- **Acessível** - Construído sobre primitivos Radix UI (compatível com WCAG)
- **Customizável** - Powered by Tailwind CSS e class-variance-authority
- **Stack Moderna** - React 19, TypeScript 5.9, Vite 7
- **Tree-Shakeable** - Tamanho de bundle otimizado com exportações ESM/CJS
- **Dark Mode** - Suporte nativo a temas
- **Developer Experience** - Hooks customizados e utilitários incluídos

## Instalação

```bash
npm install d-rts
```

### Dependências Peer

dRTS requer as seguintes peer dependencies:

```bash
npm install react@^18.0.0 react-dom@^18.0.0 react-router-dom@^6.0.0
```

### Configuração do Tailwind CSS

dRTS requer que o Tailwind CSS esteja configurado no seu projeto:

1. Instale o Tailwind CSS:
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

2. Configure o `tailwind.config.js`:
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/d-rts/dist/**/*.{js,ts,jsx,tsx}", // Inclui componentes dRTS
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

3. Importe os estilos do dRTS no seu arquivo principal:
```tsx
import 'd-rts/styles'
```

## Início Rápido

```tsx
import { Button, Card, DataTable, useToast } from 'd-rts'

function App() {
  const { toast } = useToast()

  return (
    <Card>
      <Button onClick={() => toast({ title: "Olá dRTS!" })}>
        Clique aqui
      </Button>
    </Card>
  )
}
```

## API Reference automática (TypeDoc)

Para gerar documentação técnica sempre atualizada (assinaturas, props e tipos) a partir de `dist/index.d.ts`:

```bash
cd d-rts
npm run docs:api
```

Saída gerada:

- `d-rts/docs/api/README.md`
- demais arquivos `.md` por módulo/tipo exportado

Comando rápido (sem rebuild):

```bash
cd d-rts
npm run docs:api:fast
```

## Componentes

### Componentes UI

dRTS fornece mais de 30 componentes prontos para uso:

#### Layout & Navegação
- **Navbar** - Barra de navegação da aplicação
- **Breadcrumb** - Navegação por breadcrumbs
- **Tabs** - Containers de conteúdo com abas

#### Exibição de Dados
- **Card** - Container de conteúdo com header/footer
- **DataTable** - Tabela de dados com ordenação e paginação
- **AreaChart** - Gráfico de área (Recharts)
- **BarChart** - Gráfico de barras (Recharts)
- **LineChart** - Gráfico de linhas (Recharts)
- **PieChart** - Gráfico de pizza (Recharts)
- **ChartContainer** - Wrapper reutilizável para gráficos

#### Componentes de Formulário
- **Button** - Botão com variantes (default, destructive, outline, ghost, link)
- **Input** - Campo de entrada de texto
- **Label** - Label de formulário
- **Checkbox** - Checkbox
- **Radio Group** - Grupo de radio buttons
- **Select** - Dropdown de seleção
- **SearchableSelect** - Select com funcionalidade de busca
- **Switch** - Toggle switch

#### Feedback
- **Toast** - Notificações toast
- **Toaster** - Provider do container de toasts
- **GlobalLoader** - Indicador de carregamento global
- **ConfirmModal** - Diálogo de confirmação

#### Overlays
- **Dialog** - Modal dialog
- **Dropdown** - Menu dropdown
- **Tooltip** - Tooltip overlay

### Componentes de Roteamento
- **ProtectedRoute** - Rota com guard de autenticação
- **PublicRoute** - Wrapper de rota pública

## Hooks

dRTS inclui hooks React customizados para padrões comuns:

### `useApi`
Hook customizado para chamadas de API com estados de loading e erro:

```tsx
import { useApi } from 'd-rts'

function MeuComponente() {
  const { data, loading, error, execute } = useApi(minhaFuncaoApi)

  useEffect(() => {
    execute()
  }, [])

  if (loading) return <div>Carregando...</div>
  if (error) return <div>Erro: {error}</div>
  return <div>{data}</div>
}
```

### `useAppNavigation`
Utilitários de navegação para React Router:

```tsx
import { useAppNavigation } from 'd-rts'

function MeuComponente() {
  const { navigate, goBack, goTo } = useAppNavigation()

  return (
    <Button onClick={() => goTo('/dashboard')}>
      Ir para Dashboard
    </Button>
  )
}
```

### `useFormErrors`
Gerenciamento de erros de formulário:

```tsx
import { useFormErrors } from 'd-rts'

function MeuFormulario() {
  const { errors, setError, clearError } = useFormErrors()

  return (
    <div>
      <Input error={errors.email} />
    </div>
  )
}
```

### `useToast`
Hook de notificação toast (re-exportado dos componentes):

```tsx
import { useToast } from 'd-rts'

function MeuComponente() {
  const { toast } = useToast()

  const mostrarNotificacao = () => {
    toast({
      title: "Sucesso!",
      description: "Operação concluída",
      variant: "success"
    })
  }

  return <Button onClick={mostrarNotificacao}>Mostrar Toast</Button>
}
```

### `useGlobalLoader`
Controle do estado de carregamento global:

```tsx
import { useGlobalLoader } from 'd-rts'

function MeuComponente() {
  const { showLoader, hideLoader } = useGlobalLoader()

  const handleOperacaoLonga = async () => {
    showLoader()
    await algumaOperacaoAssincrona()
    hideLoader()
  }

  return <Button onClick={handleOperacaoLonga}>Iniciar</Button>
}
```

## Serviços

### HTTP Service
Cliente Axios pré-configurado com interceptors:

```tsx
import { httpClient } from 'd-rts'

// Requisição GET
const usuarios = await httpClient.get('/usuarios')

// Requisição POST
const novoUsuario = await httpClient.post('/usuarios', { nome: 'João' })
```

### Auth Service
Utilitários de autenticação (configure baseado no seu backend):

```tsx
import { authService } from 'd-rts'

// Login
await authService.login(email, senha)

// Logout
authService.logout()

// Verificar autenticação
const isAuth = authService.isAuthenticated()
```

## Contextos

### AuthContext
Gerenciamento de estado global de autenticação:

```tsx
import { AuthProvider, useAuth } from 'd-rts'

// Envolva seu app
function App() {
  return (
    <AuthProvider>
      <SeuApp />
    </AuthProvider>
  )
}

// Use nos componentes
function Perfil() {
  const { user, isAuthenticated, logout } = useAuth()

  return (
    <div>
      {isAuthenticated && <p>Bem-vindo, {user.name}</p>}
      <Button onClick={logout}>Sair</Button>
    </div>
  )
}
```

## Utilitários

### `cn` - Utilitário de Class Name
Merge de classes Tailwind com resolução de conflitos:

```tsx
import { cn } from 'd-rts'

<div className={cn(
  "classe-base",
  isActive && "classe-ativa",
  className
)} />
```

## Tipos

dRTS exporta tipos TypeScript para todos os componentes e serviços:

```tsx
import type {
  User,
  ApiResponse,
  AuthContextType,
  ButtonProps,
  CardProps
} from 'd-rts'
```

## Estilização

dRTS usa Tailwind CSS com variáveis CSS customizadas para temas. A biblioteca inclui:

- Escalas de cores pré-configuradas
- Suporte a dark mode
- Utilitários responsivos
- Utilitários de animação

### Customizando o Tema

Sobrescreva as variáveis CSS no seu CSS global:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  /* ... mais variáveis */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... mais variáveis */
}
```

## Suporte de Navegadores

- Chrome (última versão)
- Firefox (última versão)
- Safari (última versão)
- Edge (última versão)

## Stack Tecnológica

- **React 19** - Biblioteca UI
- **TypeScript 5.9** - Type safety
- **Tailwind CSS 3.4** - CSS utility-first
- **Radix UI** - Primitivos acessíveis
- **Recharts 2.15** - Componentes de gráficos
- **Axios 1.13** - Cliente HTTP
- **Lucide React** - Biblioteca de ícones
- **class-variance-authority** - Variantes de componentes
- **Vite 7** - Build tool

## Desenvolvimento

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build da biblioteca
npm run build

# Lint do código
npm run lint

# Preview do build
npm run preview
```

## Build para Produção

```bash
npm run build
```

Outputs:
- `dist/index.js` - Bundle ESM
- `dist/index.umd.cjs` - Bundle UMD
- `dist/index.d.ts` - Declarações TypeScript
- `dist/style.css` - Estilos compilados

## Publicação

```bash
# Atualizar versão
npm version patch|minor|major

# Publicar no npm
npm publish
```

## Estrutura do Projeto

```
d-rts/
├── src/
│   ├── components/
│   │   ├── ui/              # 30+ componentes UI
│   │   └── routing/         # Componentes de rota
│   ├── hooks/               # Hooks React customizados
│   ├── services/            # Serviços de API e auth
│   ├── contexts/            # React contexts
│   ├── types/               # Tipos TypeScript
│   ├── lib/                 # Utilitários (cn, etc.)
│   ├── index.ts             # Arquivo de exportação principal
│   └── index.css            # Estilos globais
├── dist/                    # Output do build
├── vite.config.ts          # Configuração Vite
├── tailwind.config.js      # Configuração Tailwind
└── package.json
```

## Exemplos

Confira o diretório `src/examples/` para exemplos de uso dos componentes.

## Contribuindo

Esta é uma biblioteca privada para uso interno. Para issues ou solicitações de features, entre em contato com o mantenedor.

## Autor

**Rogerio Piveto**
- Email: pivetorogerio@gmail.com
- GitHub: [@pivetoo](https://github.com/pivetoo)

## Repositório

- GitHub: [pivetoo/d-tailwind-shadcn-lib](https://github.com/pivetoo/d-tailwind-shadcn-lib)
- Issues: [GitHub Issues](https://github.com/pivetoo/d-tailwind-shadcn-lib/issues)
