import { useState } from 'react'
import { Card } from '../components/ui/card'
import { Checkbox } from '../components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'
import { SearchableSelect } from '../components/ui/searchable-select'
import { Switch } from '../components/ui/switch'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'

export function FormExample() {
  const [checked, setChecked] = useState(false)
  const [notifications, setNotifications] = useState(true)
  const [selectedPlan, setSelectedPlan] = useState('free')
  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')

  const countries = [
    { value: 'br', label: 'Brasil' },
    { value: 'us', label: 'Estados Unidos' },
    { value: 'uk', label: 'Reino Unido' },
    { value: 'fr', label: 'França' },
    { value: 'de', label: 'Alemanha' },
  ]

  const cities = [
    { value: 'sp', label: 'São Paulo' },
    { value: 'rj', label: 'Rio de Janeiro' },
    { value: 'bh', label: 'Belo Horizonte' },
    { value: 'bsb', label: 'Brasília' },
    { value: 'salvador', label: 'Salvador' },
  ]

  return (
    <div className="space-y-8 max-w-2xl">
      {/* Checkbox */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Checkbox</h3>
        <Card className="p-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={checked}
                onCheckedChange={(value) => setChecked(value as boolean)}
              />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Aceito os termos e condições
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="marketing" />
              <label htmlFor="marketing" className="text-sm font-medium">
                Receber emails de marketing
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="disabled" disabled />
              <label htmlFor="disabled" className="text-sm font-medium text-muted-foreground">
                Opção desabilitada
              </label>
            </div>
          </div>
        </Card>
      </div>

      {/* Radio Group */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Radio Group</h3>
        <Card className="p-6">
          <label className="text-sm font-medium mb-3 block">Escolha seu plano</label>
          <RadioGroup value={selectedPlan} onValueChange={setSelectedPlan}>
            <div className="flex items-center space-x-2 mb-3">
              <RadioGroupItem value="free" id="free" />
              <label htmlFor="free" className="text-sm font-medium">
                Gratuito - R$ 0/mês
              </label>
            </div>
            <div className="flex items-center space-x-2 mb-3">
              <RadioGroupItem value="pro" id="pro" />
              <label htmlFor="pro" className="text-sm font-medium">
                Pro - R$ 29/mês
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="enterprise" id="enterprise" />
              <label htmlFor="enterprise" className="text-sm font-medium">
                Enterprise - R$ 99/mês
              </label>
            </div>
          </RadioGroup>
          <div className="mt-4 p-3 bg-muted rounded-md text-sm">
            Plano selecionado: <strong>{selectedPlan}</strong>
          </div>
        </Card>
      </div>

      {/* Select */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Select</h3>
        <Card className="p-6">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">País</label>
              <Select value={country} onValueChange={setCountry}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um país" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((c) => (
                    <SelectItem key={c.value} value={c.value}>
                      {c.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {country && (
              <div className="p-3 bg-muted rounded-md text-sm">
                País selecionado: <strong>{countries.find(c => c.value === country)?.label}</strong>
              </div>
            )}
          </div>
        </Card>
      </div>

      {/* Searchable Select */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Searchable Select</h3>
        <Card className="p-6">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Cidade</label>
              <SearchableSelect
                value={city}
                onValueChange={setCity}
                options={cities}
                placeholder="Buscar cidade..."
              />
            </div>

            {city && (
              <div className="p-3 bg-muted rounded-md text-sm">
                Cidade selecionada: <strong>{cities.find(c => c.value === city)?.label}</strong>
              </div>
            )}
          </div>
        </Card>
      </div>

      {/* Switch */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Switch</h3>
        <Card className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <label className="text-sm font-medium">Notificações</label>
                <p className="text-sm text-muted-foreground">
                  Receba notificações sobre atualizações
                </p>
              </div>
              <Switch
                checked={notifications}
                onCheckedChange={setNotifications}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <label className="text-sm font-medium">Modo escuro</label>
                <p className="text-sm text-muted-foreground">
                  Ativa o tema escuro da aplicação
                </p>
              </div>
              <Switch />
            </div>

            <div className="flex items-center justify-between opacity-50">
              <div className="space-y-0.5">
                <label className="text-sm font-medium">Desabilitado</label>
                <p className="text-sm text-muted-foreground">
                  Esta opção está desabilitada
                </p>
              </div>
              <Switch disabled />
            </div>
          </div>
        </Card>
      </div>

      {/* Formulário Completo */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Formulário Completo</h3>
        <Card className="p-6">
          <h4 className="text-xl font-bold mb-6">Criar nova conta</h4>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Nome completo</label>
              <Input placeholder="João Silva" />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Email</label>
              <Input type="email" placeholder="joao@exemplo.com" />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">País</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um país" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((c) => (
                    <SelectItem key={c.value} value={c.value}>
                      {c.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-3 block">Tipo de conta</label>
              <RadioGroup defaultValue="personal">
                <div className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem value="personal" id="personal" />
                  <label htmlFor="personal" className="text-sm font-medium">
                    Pessoal
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="business" id="business" />
                  <label htmlFor="business" className="text-sm font-medium">
                    Empresarial
                  </label>
                </div>
              </RadioGroup>
            </div>

            <div className="flex items-center space-x-2 pt-2">
              <Checkbox id="terms2" />
              <label htmlFor="terms2" className="text-sm font-medium">
                Aceito os termos e condições
              </label>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="space-y-0.5">
                <label className="text-sm font-medium">Receber newsletter</label>
                <p className="text-sm text-muted-foreground">
                  Novidades e atualizações
                </p>
              </div>
              <Switch />
            </div>

            <Button className="w-full mt-4">Criar conta</Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
