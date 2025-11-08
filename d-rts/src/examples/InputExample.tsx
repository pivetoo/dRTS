import { useState } from 'react'
import { Input } from '../components/ui/input'
import { Card } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Search, Mail, Lock, Eye, EyeOff } from 'lucide-react'

export function InputExample() {
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [search, setSearch] = useState('')

  return (
    <div className="space-y-8 max-w-2xl">
      <div>
        <h3 className="text-lg font-semibold mb-4">Input Básico</h3>
        <div className="space-y-4">
          <Input placeholder="Digite algo..." />
          <Input placeholder="Input desabilitado" disabled />
          <Input placeholder="Input com valor" defaultValue="Texto pré-definido" />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Input com Label</h3>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Nome</label>
            <Input placeholder="Seu nome completo" />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Email</label>
            <Input type="email" placeholder="seu@email.com" />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Tipos de Input</h3>
        <div className="space-y-4">
          <Input type="text" placeholder="Texto" />
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Senha" />
          <Input type="number" placeholder="Número" />
          <Input type="date" />
          <Input type="search" placeholder="Buscar..." />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Input com Ícones (Simulado)</h3>
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar..."
              className="pl-10"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="email"
              placeholder="seu@email.com"
              className="pl-10"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Senha"
              className="pl-10 pr-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Formulário de Login</h3>
        <Card className="p-6">
          <h4 className="text-xl font-bold mb-6">Entrar na sua conta</h4>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Email</label>
              <Input type="email" placeholder="seu@email.com" />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Senha</label>
              <Input type="password" placeholder="••••••••" />
            </div>
            <Button className="w-full">Entrar</Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
