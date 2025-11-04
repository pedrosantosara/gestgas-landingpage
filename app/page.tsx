import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Check,
  Truck,
  Package,
  DollarSign,
  BarChart3,
  FileText,
  MapPin,
  Clock,
  Users,
  TrendingUp,
  Zap,
  Receipt,
  Shield,
  CheckCircle2,
} from "lucide-react"
import Image from "next/image"
import { ParallaxIcon } from "@/components/parallax-icon"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 sticky top-0 z-50 bg-background/95">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden">
              <Image 
                src="/logo.png" 
                alt="GestGAS Logo" 
                width={40} 
                height={40}
                className="object-contain w-full h-full"
              />
            </div>
            <span 
              className="text-xl font-bold bg-gradient-to-r from-[rgb(25,118,210)] to-[rgb(100,181,246)] bg-clip-text text-transparent"
              style={{
                background: 'linear-gradient(120deg, rgb(25, 118, 210), rgb(100, 181, 246))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              GestGAS
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#funcionalidades"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Funcionalidades
            </a>
            <a href="#nota-fiscal" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Nota Fiscal
            </a>
            <a href="#app-mobile" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              App Mobile
            </a>
            <a href="#precos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Preços
            </a>
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Começar Agora
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
            Sistema Completo de Gestão
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance leading-tight">
            Transforme sua revendedora com gestão <span className="text-primary">inteligente</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
            Abandone as planilhas Excel e modernize sua revendedora de gás e água com controle total de estoque, vendas,
            entregas e finanças em tempo real.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6">
              Começar Teste Grátis
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 py-6 border-border hover:bg-accent bg-transparent"
            >
              Agendar Demonstração
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">Sem taxa de cancelamento • Configuração em minutos</p>
        </div>
      </section>

      <section id="excel-problemas" className="bg-[#0E2238] py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Badge className="bg-primary/10 text-primary border-primary/20">Sem Planilhas</Badge>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 text-balance">
              Você ainda usa planilhas do
              <span className="inline-flex items-center gap-2 mx-2 align-middle">
                <Image src="/excel.svg" alt="Excel" width={32} height={32} />
                <span>Excel</span>
              </span>
              para gerenciar sua revendedora?
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
              Se você controla estoque, vendas e entregas em planilhas, provavelmente enfrenta um destes problemas todos os dias:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-white/5 border-white/10 hover:border-primary/40 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-2">Perdeu vendas por falta de estoque?</h3>
              <p className="text-white/80 leading-relaxed">
                Cliente liga e você não sabe se tem botijas. Depois descobre que tinha estoque parado. Perdas por falta de visibilidade.
              </p>
            </Card>
            <Card className="p-6 bg-white/5 border-white/10 hover:border-primary/40 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-2">Gasta horas atualizando planilhas?</h3>
              <p className="text-white/80 leading-relaxed">
                2–3 horas por dia digitando vendas, ajustes de estoque e conferências. Tempo que poderia virar crescimento.
              </p>
            </Card>
            <Card className="p-6 bg-white/5 border-white/10 hover:border-primary/40 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-2">Erros de cálculo custam dinheiro?</h3>
              <p className="text-white/80 leading-relaxed">
                Uma fórmula errada e você vende no prejuízo por semanas. E as vendas fiadas? Somem em planilhas soltas.
              </p>
            </Card>
            <Card className="p-6 bg-white/5 border-white/10 hover:border-primary/40 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-2">Não sabe onde estão seus entregadores?</h3>
              <p className="text-white/80 leading-relaxed">
                O cliente espera há horas e você não sabe se o entregador já saiu ou quantas entregas faltam.
              </p>
            </Card>
            <Card className="p-6 bg-white/5 border-white/10 hover:border-primary/40 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-2">Vendas fiadas viraram um caos?</h3>
              <p className="text-white/80 leading-relaxed">
                Anotações em cadernos e planilhas diferentes. Quem deve, quanto deve e há quanto tempo?
              </p>
            </Card>
            <Card className="p-6 bg-white/5 border-white/10 hover:border-primary/40 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-2">Nota fiscal é um pesadelo?</h3>
              <p className="text-white/80 leading-relaxed">
                Emitir NF-e e NFC-e em sistemas separados, retrabalho e risco de ficar irregular.
              </p>
            </Card>
          </div>

          
        </div>
      </section>

      <section id="porque-gestgas" className="bg-muted/10 py-20 md:py-32">
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Foi exatamente por viver os mesmos problemas que você que decidimos criar o GestGAS
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Uma ferramenta pensada para revendedoras brasileiras que precisam controlar estoque, entregas, vendas e notas fiscais
              sem planilhas, sem retrabalho e sem sistemas caros que não foram feitos para o seu negócio.
            </p>
          </div>

          <div className="hidden md:block">
            <ParallaxIcon className="absolute left-0 top-[2px] rotate-15 w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 shadow-md flex items-center justify-center z-20 pointer-events-none" speed={0.09} sectionId="porque-gestgas">
              <Truck className="w-5 h-5 text-primary" />
            </ParallaxIcon>
            <ParallaxIcon className="absolute right-0 top-[22px] rotate-10 w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 shadow-md flex items-center justify-center z-20 pointer-events-none" speed={0.12} sectionId="porque-gestgas">
              <Package className="w-5 h-5 text-primary" />
            </ParallaxIcon>
            <ParallaxIcon className="absolute left-[2%] top-[58px] w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 shadow-md flex items-center justify-center z-20 pointer-events-none" speed={0.1} sectionId="porque-gestgas">
              <Shield className="w-5 h-5 text-primary" />
            </ParallaxIcon>
            <ParallaxIcon className="absolute right-[2%] top-[77px] w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 shadow-md flex items-center justify-center z-20 pointer-events-none" speed={0.13} sectionId="porque-gestgas">
              <Zap className="w-5 h-5 text-primary" />
            </ParallaxIcon>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="rounded-2xl border border-border bg-card shadow-xl overflow-hidden">
              <Image
                src="/sistema.png"
                alt="Captura de tela do GestGAS"
                width={1600}
                height={900}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                priority
              />
            </div>


            <div className="text-center mt-10">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Criar conta grátis
              </Button>
            </div>
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section id="funcionalidades" className="container mx-auto px-4 py-20 md:py-32">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Funcionalidades</Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Tudo que você precisa em um só lugar
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Sistema completo para gerenciar todos os aspectos da sua revendedora com eficiência e praticidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Package className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Gestão de Produtos</h3>
            <p className="text-muted-foreground leading-relaxed">
              Controle completo de botijas de gás, água mineral e acessórios com categorização inteligente.
            </p>
          </Card>

          <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Truck className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Pedidos e Entregas</h3>
            <p className="text-muted-foreground leading-relaxed">
              Gerencie pedidos e acompanhe entregas em tempo real com notificações automáticas.
            </p>
          </Card>

          <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Controle de Estoque</h3>
            <p className="text-muted-foreground leading-relaxed">
              Monitore botijas cheias e vazias com alertas de reposição e histórico completo.
            </p>
          </Card>

          <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <DollarSign className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Controle Financeiro</h3>
            <p className="text-muted-foreground leading-relaxed">
              Acompanhe vendas por forma de pagamento, vendas fiadas e antecipadas em um só lugar.
            </p>
          </Card>

          <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Relatórios e Análises</h3>
            <p className="text-muted-foreground leading-relaxed">
              Análise de canais de venda, relatórios detalhados e insights para crescer seu negócio.
            </p>
          </Card>

          <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">App Mobile Completo</h3>
            <p className="text-muted-foreground leading-relaxed">
              Aplicativo para entregadores com rastreamento GPS e confirmação de entregas em tempo real.
            </p>
          </Card>
        </div>
      </section>

      {/* Nota Fiscal Section */}
      <section id="nota-fiscal" className="bg-gradient-to-br from-primary/3 via-background to-muted/5 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-1 md:order-1">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Nota Fiscal Integrada</Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Emissão de nota fiscal automática e sem complicação
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Mantenha sua revendedora 100% regularizada com nosso módulo de nota fiscal integrado. Emita NF-e e NFC-e
                diretamente do sistema, sem precisar de softwares externos.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Emissão Automática</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Notas fiscais geradas automaticamente a cada venda, sem trabalho manual.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Conformidade Fiscal</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Sempre atualizado com as regras da Receita Federal e SEFAZ estaduais.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <BarChart3 className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Relatórios Fiscais</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Relatórios completos para sua contabilidade com apenas um clique.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <FileText className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Envio Automático</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Notas enviadas por email e WhatsApp automaticamente para seus clientes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <p className="text-sm text-muted-foreground mb-2">Disponível no</p>
                <p className="text-2xl font-bold text-primary mb-1">Plano Completo</p>
                <p className="text-sm text-muted-foreground">Adicione o módulo de nota fiscal por apenas R$ 100/mês</p>
              </div>
            </div>

            <div className="order-2 md:order-2 flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-primary/10 rounded-3xl"></div>
                <div className="relative bg-white rounded-2xl shadow-2xl p-8 border-2 border-primary/20">
                  <svg viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                    {/* Cabeçalho da nota */}
                    <rect x="20" y="20" width="260" height="60" rx="8" fill="oklch(0.55 0.2 265)" fillOpacity="0.1" />
                    <circle cx="50" cy="50" r="20" fill="oklch(0.55 0.2 265)" fillOpacity="0.2" />
                    <path
                      d="M45 50L48 53L55 46"
                      stroke="oklch(0.55 0.2 265)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <rect x="80" y="35" width="180" height="8" rx="4" fill="oklch(0.55 0.2 265)" fillOpacity="0.3" />
                    <rect x="80" y="50" width="120" height="6" rx="3" fill="oklch(0.55 0.2 265)" fillOpacity="0.2" />

                    {/* Informações da empresa */}
                    <rect x="20" y="100" width="260" height="50" rx="6" fill="oklch(0.95 0 0)" />
                    <rect x="30" y="110" width="100" height="6" rx="3" fill="oklch(0.88 0 0)" />
                    <rect x="30" y="122" width="140" height="6" rx="3" fill="oklch(0.88 0 0)" />
                    <rect x="30" y="134" width="80" height="6" rx="3" fill="oklch(0.88 0 0)" />

                    {/* Dados do cliente */}
                    <rect x="20" y="170" width="260" height="50" rx="6" fill="oklch(0.95 0 0)" />
                    <rect x="30" y="180" width="90" height="6" rx="3" fill="oklch(0.88 0 0)" />
                    <rect x="30" y="192" width="120" height="6" rx="3" fill="oklch(0.88 0 0)" />
                    <rect x="30" y="204" width="70" height="6" rx="3" fill="oklch(0.88 0 0)" />

                    {/* Itens da nota */}
                    <rect x="20" y="240" width="260" height="80" rx="6" fill="oklch(0.95 0 0)" />
                    <rect x="30" y="250" width="60" height="6" rx="3" fill="oklch(0.55 0.2 265)" fillOpacity="0.4" />
                    <rect x="100" y="250" width="80" height="6" rx="3" fill="oklch(0.55 0.2 265)" fillOpacity="0.4" />
                    <rect x="190" y="250" width="80" height="6" rx="3" fill="oklch(0.55 0.2 265)" fillOpacity="0.4" />

                    <rect x="30" y="265" width="50" height="5" rx="2.5" fill="oklch(0.88 0 0)" />
                    <rect x="100" y="265" width="70" height="5" rx="2.5" fill="oklch(0.88 0 0)" />
                    <rect x="190" y="265" width="60" height="5" rx="2.5" fill="oklch(0.88 0 0)" />

                    <rect x="30" y="278" width="50" height="5" rx="2.5" fill="oklch(0.88 0 0)" />
                    <rect x="100" y="278" width="70" height="5" rx="2.5" fill="oklch(0.88 0 0)" />
                    <rect x="190" y="278" width="60" height="5" rx="2.5" fill="oklch(0.88 0 0)" />

                    <line x1="20" y1="295" x2="280" y2="295" stroke="oklch(0.88 0 0)" strokeWidth="1" />

                    <rect x="30" y="302" width="40" height="6" rx="3" fill="oklch(0.88 0 0)" />
                    <rect x="190" y="300" width="80" height="10" rx="5" fill="oklch(0.55 0.2 265)" fillOpacity="0.2" />

                    {/* Rodapé com QR Code */}
                    <rect x="20" y="340" width="260" height="40" rx="6" fill="oklch(0.55 0.2 265)" fillOpacity="0.05" />
                    <rect x="30" y="350" width="20" height="20" rx="2" fill="oklch(0.55 0.2 265)" fillOpacity="0.3" />
                    <rect x="60" y="352" width="100" height="4" rx="2" fill="oklch(0.88 0 0)" />
                    <rect x="60" y="360" width="80" height="4" rx="2" fill="oklch(0.88 0 0)" />

                    {/* Selo de autenticidade */}
                    <circle cx="250" cy="360" r="15" fill="oklch(0.55 0.2 265)" fillOpacity="0.1" />
                    <path
                      d="M245 360L248 363L255 356"
                      stroke="oklch(0.55 0.2 265)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section id="app-mobile" className="bg-muted/10 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">App Mobile</Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Entregadores conectados em tempo real
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Aplicativo mobile completo para seus entregadores visualizarem e confirmarem entregas. Você acompanha
                tudo em tempo real.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Rastreamento GPS</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Veja a localização exata de cada entregador e qual entrega está realizando no momento.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Confirmação Instantânea</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Entregadores confirmam entregas pelo app e você recebe notificação imediata.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Gestão de Equipe</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Acompanhe performance, ranking e produtividade de cada entregador.
                    </p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Conhecer o App Mobile
              </Button>
            </div>

            <div className="relative">
              <div className="p-0">
                <Image
                  src="/Midnight-Black.svg"
                  alt="GestGAS - Telas do App"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precos" className="container mx-auto px-4 py-20 md:py-32">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Planos e Preços</Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Escolha o plano ideal para seu negócio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Comece hoje mesmo e transforme a gestão da sua revendedora. Sem taxas ocultas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Plano Essencial */}
          <Card className="p-8 bg-card border-border relative hover:shadow-lg transition-shadow">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">Plano Essencial</h3>
              <p className="text-muted-foreground">Perfeito para começar a digitalizar sua revendedora</p>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-2">
              <span className="text-5xl font-bold text-foreground">R$ 147</span>
                <span className="text-muted-foreground">/mês</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">Sem módulo de nota fiscal</p>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Gestão completa de produtos e estoque</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Controle de pedidos e entregas</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">App mobile para entregadores</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Rastreamento GPS em tempo real</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Controle financeiro completo</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Relatórios e análises</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Suporte por email e chat</span>
              </li>
            </ul>

            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="lg">
              Começar Agora
            </Button>
          </Card>

          {/* Plano Completo */}
          <Card className="p-8 bg-gradient-to-br from-primary/2 to-primary/5 border-primary relative hover:shadow-xl transition-shadow">
            <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
              Mais Popular
            </Badge>

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">Plano Completo</h3>
              <p className="text-muted-foreground">Solução completa com emissão de nota fiscal</p>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-2">
              <span className="text-5xl font-bold text-foreground">R$ 247</span>
                <span className="text-muted-foreground">/mês</span>
              </div>
              <p className="text-sm text-primary font-medium mt-2">Com módulo de nota fiscal integrado</p>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground font-medium">Tudo do Plano Essencial, mais:</span>
              </li>
              <li className="flex items-start gap-3">
                <Receipt className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Emissão de nota fiscal integrada (NF-e e NFC-e)</span>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Conformidade fiscal automática</span>
              </li>
              <li className="flex items-start gap-3">
                <BarChart3 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Relatórios fiscais completos</span>
              </li>
              <li className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Integração com contabilidade</span>
              </li>
              <li className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Suporte prioritário</span>
              </li>
              <li className="flex items-start gap-3">
                <Users className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Treinamento personalizado</span>
              </li>
            </ul>

            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="lg">
              Começar Agora
            </Button>
          </Card>
        </div>

        <p className="text-center text-muted-foreground mt-8">
          Todos os planos incluem 14 dias de teste grátis • Cancele quando quiser
        </p>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary/3 via-primary/2 to-primary/3 border-y border-primary/5 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Zap className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Pronto para modernizar sua revendedora?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
              Junte-se a centenas de revendedoras que já abandonaram as planilhas e aumentaram sua eficiência com o
              GestGAS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6">
                Começar Teste Grátis de 14 Dias
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 py-6 border-border hover:bg-accent bg-transparent"
              >
                Falar com Especialista
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/20 py-12 bg-muted/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden">
                  <Image 
                    src="/logo.png" 
                    alt="GestGAS Logo" 
                    width={24} 
                    height={24}
                    className="object-contain"
                  />
                </div>
                <span 
                  className="text-lg font-bold bg-gradient-to-r from-[rgb(25,118,210)] to-[rgb(100,181,246)] bg-clip-text text-transparent"
                  style={{
                    background: 'linear-gradient(120deg, rgb(25, 118, 210), rgb(100, 181, 246))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  GestGAS
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Sistema completo de gestão para revendedoras de gás e água.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Produto</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#funcionalidades" className="hover:text-foreground transition-colors">
                    Funcionalidades
                  </a>
                </li>
                <li>
                  <a href="#nota-fiscal" className="hover:text-foreground transition-colors">
                    Nota Fiscal
                  </a>
                </li>
                <li>
                  <a href="#app-mobile" className="hover:text-foreground transition-colors">
                    App Mobile
                  </a>
                </li>
                <li>
                  <a href="#precos" className="hover:text-foreground transition-colors">
                    Preços
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Suporte</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Central de Ajuda
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Documentação
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Status
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 GestGAS. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
