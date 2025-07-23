import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  Clock, 
  Infinity, 
  Brain, 
  Shield, 
  Star, 
  Check,
  ChevronDown,
  Phone,
  Mail,
  Instagram,
  Twitter,
  Globe
} from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import { useState } from "react";

type Language = 'en' | 'pt' | 'ru';

const translations = {
  en: {
    nav: {
      features: "Features",
      howItWorks: "How it Works", 
      pricing: "Pricing",
      faq: "FAQ",
      startTrial: "Start Trial"
    },
    hero: {
      badge: "Join over 5,000 users who trust MindMate daily",
      title: "Mental Wellness in Your Pocket",
      subtitle: "24/7 anonymous chat coaching for €4.99/month. Instant responses and support anytime.",
      cta: "Start 7-day free trial",
      disclaimer: "Free for 7 days, then €4.99/month. Cancel anytime.",
      friendMessage: "Like a knowledgeable friend who remembers everything, keeps secrets better than any diary, and has access to humanity's collective psychology knowledge."
    },
    problemSolution: {
      problemTitle: "When Traditional Therapy Is Inconvenient",
      problemPoints: [
        "Expensive & hard to find your own therapist",
        "No support at night or on weekends", 
        "Long waiting lists & inflexible schedules"
      ],
      solutionTitle: "Important benefits of our approach",
      solutionPoints: [
        "Instant responses anytime, day or night",
        "8x cheaper than traditional therapy",
        "Complete anonymity and confidentiality"
      ]
    },
    features: {
      title: "Platform Features",
      subtitle: "Everything you need for emotional support and mental wellness",
      response: "Response < 3s",
      responseDesc: "Instant replies to your messages anytime",
      unlimited: "Unlimited Chat",
      unlimitedDesc: "Write as much as you want, no time limits",
      memory: "Contextual Memory", 
      memoryDesc: "AI remembers your history and adapts to you",
      crisis: "Crisis Detection",
      crisisDesc: "Automatic detection of crisis situations"
    },
    socialProof: {
      title: "User Reviews"
    },
    pricing: {
      title: "Simple and Honest Pricing",
      subtitle: "Start free, continue with subscription",
      basic: "Basic Plan",
      basicPrice: "€4.99",
      premium: "Premium Plan", 
      premiumPrice: "€5.99",
      popular: "Popular",
      month: "per month",
      basicFeatures: [
        "Unlimited text chat",
        "Contextual memory", 
        "Mood tracking",
        "Crisis support"
      ],
      premiumFeatures: [
        "Everything in Basic",
        "Voice messages",
        "Priority support", 
        "Export history"
      ],
      startBasic: "7 days free",
      startPremium: "Start with Premium"
    },
    howItWorks: {
      title: "How It Works",
      step1: "Sign Up",
      step1Desc: "Quick registration via Telegram or email in 30 seconds",
      step2: "Start Chatting", 
      step2Desc: "Describe what's bothering you and get support immediately",
      step3: "Continue Growing",
      step3Desc: "Track your progress and build better mental health habits"
    },
    faq: {
      title: "Frequently Asked Questions",
      q1: "Is this therapy? Can you make a diagnosis?",
      a1: "No, we provide wellness support and coaching, but are not a replacement for professional therapy. We do not make diagnoses or prescribe treatment.",
      q2: "How is my data protected?",
      a2: "We use data encryption and comply with GDPR requirements. Your messages are pseudonymized and protected.",
      q3: "What if I'm in crisis?",
      a3: "Our system automatically detects crisis messages and provides hotline contacts for immediate professional help.",
      q4: "Can I cancel my subscription?",
      a4: "Yes, you can cancel your subscription at any time without penalties or hidden fees."
    },
    footer: {
      description: "AI-powered psychological support available 24/7. Your trusted companion for mental wellness.",
      contact: "Contact",
      legal: "Legal",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      compliance: "Compliance"
    }
  },
  pt: {
    nav: {
      features: "Recursos",
      howItWorks: "Como Funciona",
      pricing: "Preços", 
      faq: "FAQ",
      startTrial: "Iniciar Teste"
    },
    hero: {
      badge: "Junte-se a mais de 5.000 usuários que confiam no MindMate diariamente",
      title: "Bem-estar Mental no Seu Bolso",
      subtitle: "Coaching de chat anônimo 24/7 por €4,99/mês. Respostas instantâneas e suporte a qualquer momento.",
      cta: "Iniciar teste gratuito de 7 dias",
      disclaimer: "Grátis por 7 dias, depois €4,99/mês. Cancele a qualquer momento.",
      friendMessage: "Como um amigo conhecedor que lembra de tudo, guarda segredos melhor que qualquer diário, e tem acesso ao conhecimento coletivo de psicologia da humanidade."
    },
    problemSolution: {
      problemTitle: "Quando a Terapia Tradicional É Inconveniente",
      problemPoints: [
        "Caro e difícil de encontrar seu próprio terapeuta",
        "Sem apoio à noite ou nos fins de semana",
        "Longas listas de espera e horários inflexíveis"
      ],
      solutionTitle: "Benefícios importantes da nossa abordagem", 
      solutionPoints: [
        "Respostas instantâneas a qualquer hora",
        "8x mais barato que terapia tradicional",
        "Completo anonimato e confidencialidade"
      ]
    },
    features: {
      title: "Recursos da Plataforma",
      subtitle: "Tudo que você precisa para apoio emocional e bem-estar mental",
      response: "Resposta < 3s",
      responseDesc: "Respostas instantâneas às suas mensagens a qualquer hora",
      unlimited: "Chat Ilimitado",
      unlimitedDesc: "Escreva o quanto quiser, sem limites de tempo",
      memory: "Memória Contextual",
      memoryDesc: "IA lembra seu histórico e se adapta a você", 
      crisis: "Detecção de Crise",
      crisisDesc: "Detecção automática de situações de crise"
    },
    socialProof: {
      title: "Avaliações dos Usuários"
    },
    pricing: {
      title: "Preços Simples e Honestos",
      subtitle: "Comece grátis, continue com assinatura",
      basic: "Plano Básico",
      basicPrice: "€4,99",
      premium: "Plano Premium",
      premiumPrice: "€5,99", 
      popular: "Popular",
      month: "por mês",
      basicFeatures: [
        "Chat de texto ilimitado",
        "Memória contextual",
        "Acompanhamento de humor",
        "Suporte em crise"
      ],
      premiumFeatures: [
        "Tudo do Básico",
        "Mensagens de voz",
        "Suporte prioritário",
        "Exportar histórico"
      ],
      startBasic: "7 dias grátis",
      startPremium: "Começar com Premium"
    },
    howItWorks: {
      title: "Como Funciona",
      step1: "Cadastre-se",
      step1Desc: "Registro rápido via Telegram ou email em 30 segundos",
      step2: "Comece a Conversar",
      step2Desc: "Descreva o que está te incomodando e receba apoio imediatamente", 
      step3: "Continue Crescendo",
      step3Desc: "Acompanhe seu progresso e construa melhores hábitos de saúde mental"
    },
    faq: {
      title: "Perguntas Frequentes",
      q1: "É terapia? Podem fazer um diagnóstico?",
      a1: "Não, fornecemos apoio de bem-estar e coaching, mas não somos um substituto da terapia profissional. Não fazemos diagnósticos nem prescrevemos tratamento.",
      q2: "Como são protegidos os meus dados?",
      a2: "Utilizamos encriptação de dados e cumprimos os requisitos do RGPD. As suas mensagens são pseudonimizadas e protegidas.",
      q3: "E se estiver em crise?",
      a3: "O nosso sistema detecta automaticamente mensagens de crise e fornece contactos de linhas de apoio para ajuda profissional imediata.",
      q4: "Posso cancelar a minha subscrição?",
      a4: "Sim, pode cancelar a sua subscrição a qualquer momento sem penalizações ou taxas ocultas."
    },
    footer: {
      description: "Suporte psicológico alimentado por IA disponível 24/7. Seu companheiro confiável para bem-estar mental.",
      contact: "Contato",
      legal: "Legal", 
      privacy: "Política de Privacidade",
      terms: "Termos de Serviço",
      compliance: "Conformidade"
    }
  },
  ru: {
    nav: {
      features: "Возможности",
      howItWorks: "Как это работает",
      pricing: "Цены",
      faq: "FAQ", 
      startTrial: "Начать триал"
    },
    hero: {
      badge: "Присоединяйтесь к более чем 5 000 пользователей, которые доверяют MindMate ежедневно",
      title: "Психологическое благополучие в вашем кармане",
      subtitle: "24/7 анонимный чат-коучинг за ₽399/мес. Мгновенные ответы и поддержка в любой момент.",
      cta: "Начать 7-дневный триал",
      disclaimer: "Бесплатно 7 дней, затем ₽399/мес. Отмена в любое время.",
      friendMessage: "Как знающий друг, который помнит всё, хранит секреты лучше любого дневника или лучшего друга, и имеет доступ к коллективным знаниям человечества по психологии."
    },
    problemSolution: {
      problemTitle: "Когда традиционная терапия неудобна",
      problemPoints: [
        "Дорого и сложно найти подходящего терапевта",
        "Нет поддержки ночью и в выходные",
        "Долгие очереди на запись и неудобные графики"
      ],
      solutionTitle: "Важные преимущества нашего подхода",
      solutionPoints: [
        "Мгновенные ответы в любое время суток",
        "Цена в 8 раз ниже обычной терапии", 
        "Полная анонимность и конфиденциальность"
      ]
    },
    features: {
      title: "Возможности платформы",
      subtitle: "Всё что нужно для эмоциональной поддержки и психологического здоровья",
      response: "Ответ < 3 с",
      responseDesc: "Мгновенные ответы на ваши сообщения в любое время",
      unlimited: "Неограниченный чат",
      unlimitedDesc: "Пишите сколько угодно, без лимитов по времени",
      memory: "Контекстная память",
      memoryDesc: "AI помнит вашу историю и подстраивается под вас",
      crisis: "Антикризисные флаги", 
      crisisDesc: "Автоматическое определение кризисных состояний"
    },
    socialProof: {
      title: "Отзывы пользователей"
    },
    pricing: {
      title: "Простые и честные цены",
      subtitle: "Начните бесплатно, продолжайте по подписке",
      basic: "Базовый план",
      basicPrice: "₽399",
      premium: "Премиум план",
      premiumPrice: "₽498",
      popular: "Популярный",
      month: "в месяц",
      basicFeatures: [
        "Неограниченный текстовый чат",
        "Контекстная память",
        "Отслеживание настроения", 
        "Антикризисная поддержка"
      ],
      premiumFeatures: [
        "Всё из базового плана",
        "Голосовые сообщения",
        "Приоритетная поддержка",
        "Экспорт истории"
      ],
      startBasic: "7 дней бесплатно",
      startPremium: "Начать с премиум"
    },
    howItWorks: {
      title: "Как это работает",
      step1: "Авторизуйтесь",
      step1Desc: "Быстрая регистрация через Telegram или email за 30 секунд",
      step2: "Начните чат",
      step2Desc: "Опишите что вас беспокоит и получите поддержку сразу же",
      step3: "Продолжайте расти",
      step3Desc: "Отслеживайте прогресс и вырабатывайте лучшие привычки для психического здоровья"
    },
    faq: {
      title: "Часто задаваемые вопросы",
      q1: "Это терапия? Можете ли вы поставить диагноз?",
      a1: "Нет, мы предоставляем wellness-поддержку и коучинг, но не являемся заменой профессиональной терапии. Мы не ставим диагнозы и не назначаем лечение.",
      q2: "Как защищены мои данные?",
      a2: "Мы используем шифрование данных, соблюдаем требования 152-ФЗ и GDPR. Ваши сообщения псевдонимизированы и защищены.",
      q3: "Что если я в кризисе?",
      a3: "Наша система автоматически определяет кризисные сообщения и предоставляет контакты горячих линий для немедленной профессиональной помощи.",
      q4: "Можно ли отменить подписку?",
      a4: "Да, вы можете отменить подписку в любое время без штрафов и скрытых платежей."
    },
    footer: {
      description: "AI-поддержка психологического здоровья доступна 24/7. Ваш надёжный спутник для душевного благополучия.",
      contact: "Контакты",
      legal: "Правовая информация",
      privacy: "Политика конфиденциальности",
      terms: "Пользовательское соглашение",
      compliance: "Соответствие 152-ФЗ и GDPR"
    }
  }
};

const Landing = () => {
  const [language, setLanguage] = useState<Language>('en');
  const t = translations[language];

  return (
    <div className="min-h-screen bg-background font-inter">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <MessageCircle className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl text-foreground">MindMate</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">{t.nav.features}</a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">{t.nav.howItWorks}</a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">{t.nav.pricing}</a>
            <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">{t.nav.faq}</a>
          </nav>
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <select 
                value={language} 
                onChange={(e) => setLanguage(e.target.value as Language)}
                className="appearance-none bg-transparent border border-border rounded-md px-3 py-1 text-sm text-foreground cursor-pointer hover:border-primary transition-colors"
              >
                <option value="en">🇺🇸 EN</option>
                <option value="pt">🇵🇹 PT</option>
                <option value="ru">🇷🇺 RU</option>
              </select>
              <Globe className="absolute right-1 top-1/2 -translate-y-1/2 h-3 w-3 text-muted-foreground pointer-events-none" />
            </div>
            <Button variant="hero" className="text-white font-semibold">
              {t.nav.startTrial}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="secondary" className="inline-flex items-center gap-2">
                <Star className="h-4 w-4 fill-secondary text-secondary" />
                {t.hero.badge}
              </Badge>
              
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  {t.hero.title}
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  {t.hero.subtitle}
                </p>
                <p className="text-base text-muted-foreground max-w-lg italic">
                  {t.hero.friendMessage}
                </p>
              </div>

              <div className="space-y-4">
                <Button size="lg" variant="hero" className="text-lg px-8 py-4 h-auto">
                  {t.hero.cta}
                </Button>
                <p className="text-sm text-muted-foreground">
                  {t.hero.disclaimer}
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img 
                  src={heroImage} 
                  alt="AI-Психолог поддержка" 
                  className="w-full h-auto rounded-2xl shadow-xl"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-hero opacity-20 rounded-2xl blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem → Solution */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  {t.problemSolution.problemTitle}
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  {t.problemSolution.problemPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-3 flex-shrink-0"></div>
                      <p>{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  {t.problemSolution.solutionTitle}
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  {t.problemSolution.solutionPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-3 flex-shrink-0"></div>
                      <p>{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              {t.features.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.features.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center space-y-4 border-0 shadow-md hover:shadow-lg transition-shadow">
              <div className="mx-auto w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg text-foreground">{t.features.response}</h3>
              <p className="text-sm text-muted-foreground">
                {t.features.responseDesc}
              </p>
            </Card>

            <Card className="p-6 text-center space-y-4 border-0 shadow-md hover:shadow-lg transition-shadow">
              <div className="mx-auto w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center">
                <Infinity className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg text-foreground">{t.features.unlimited}</h3>
              <p className="text-sm text-muted-foreground">
                {t.features.unlimitedDesc}
              </p>
            </Card>

            <Card className="p-6 text-center space-y-4 border-0 shadow-md hover:shadow-lg transition-shadow">
              <div className="mx-auto w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg text-foreground">{t.features.memory}</h3>
              <p className="text-sm text-muted-foreground">
                {t.features.memoryDesc}
              </p>
            </Card>

            <Card className="p-6 text-center space-y-4 border-0 shadow-md hover:shadow-lg transition-shadow">
              <div className="mx-auto w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg text-foreground">{t.features.crisis}</h3>
              <p className="text-sm text-muted-foreground">
                {t.features.crisisDesc}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12">
            {t.socialProof.title}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 space-y-4 border-0 shadow-md">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-muted-foreground italic">
                "Наконец-то могу поговорить с кем-то в 2 ночи, когда не спится из-за тревоги"
              </p>
              <div className="pt-4 border-t">
                <p className="font-semibold text-foreground">Анна, 28</p>
                <p className="text-sm text-muted-foreground">Менеджер проектов</p>
              </div>
            </Card>

            <Card className="p-6 space-y-4 border-0 shadow-md">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-muted-foreground italic">
                "Цена в разы ниже психотерапевта, а помощь получаю круглосуточно"
              </p>
              <div className="pt-4 border-t">
                <p className="font-semibold text-foreground">Дмитрий, 35</p>
                <p className="text-sm text-muted-foreground">IT-специалист</p>
              </div>
            </Card>

            <Card className="p-6 space-y-4 border-0 shadow-md">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-muted-foreground italic">
                "Помог справиться с послеродовой депрессией, когда не к кому было обратиться"
              </p>
              <div className="pt-4 border-t">
                <p className="font-semibold text-foreground">Мария, 26</p>
                <p className="text-sm text-muted-foreground">Молодая мама</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t.pricing.title}
          </h2>
          <p className="text-xl text-muted-foreground mb-16">
            {t.pricing.subtitle}
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 space-y-6 border-2 border-border">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">{t.pricing.basic}</h3>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-foreground">{t.pricing.basicPrice}</div>
                  <div className="text-muted-foreground">{t.pricing.month}</div>
                </div>
              </div>
              
              <div className="space-y-4 text-left">
                {t.pricing.basicFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-secondary" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full" variant="outline">
                {t.pricing.startBasic}
              </Button>
            </Card>

            <Card className="p-8 space-y-6 border-2 border-primary bg-gradient-to-br from-primary/5 to-secondary/5 relative">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-hero text-white">
                {t.pricing.popular}
              </Badge>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">{t.pricing.premium}</h3>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-foreground">{t.pricing.premiumPrice}</div>
                  <div className="text-muted-foreground">{t.pricing.month}</div>
                </div>
              </div>
              
              <div className="space-y-4 text-left">
                {t.pricing.premiumFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-secondary" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full" variant="hero">
                {t.pricing.startPremium}
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-16">
            {t.howItWorks.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-foreground">{t.howItWorks.step1}</h3>
              <p className="text-muted-foreground">
                {t.howItWorks.step1Desc}
              </p>
            </div>

            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-foreground">{t.howItWorks.step2}</h3>
              <p className="text-muted-foreground">
                {t.howItWorks.step2Desc}
              </p>
            </div>

            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-foreground">{t.howItWorks.step3}</h3>
              <p className="text-muted-foreground">
                {t.howItWorks.step3Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-16">
            {t.faq.title}
          </h2>

          <div className="space-y-6">
            <Card className="p-6 border-0 shadow-md">
              <div className="flex items-center justify-between cursor-pointer">
                <h3 className="text-lg font-semibold text-foreground">
                  {t.faq.q1}
                </h3>
                <ChevronDown className="h-5 w-5 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground mt-4">
                {t.faq.a1}
              </p>
            </Card>

            <Card className="p-6 border-0 shadow-md">
              <div className="flex items-center justify-between cursor-pointer">
                <h3 className="text-lg font-semibold text-foreground">
                  {t.faq.q2}
                </h3>
                <ChevronDown className="h-5 w-5 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground mt-4">
                {t.faq.a2}
              </p>
            </Card>

            <Card className="p-6 border-0 shadow-md">
              <div className="flex items-center justify-between cursor-pointer">
                <h3 className="text-lg font-semibold text-foreground">
                  {t.faq.q3}
                </h3>
                <ChevronDown className="h-5 w-5 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground mt-4">
                {t.faq.a3}
              </p>
            </Card>

            <Card className="p-6 border-0 shadow-md">
              <div className="flex items-center justify-between cursor-pointer">
                <h3 className="text-lg font-semibold text-foreground">
                  {t.faq.q4}
                </h3>
                <ChevronDown className="h-5 w-5 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground mt-4">
                {t.faq.a4}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-gray-900 text-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-8 w-8 text-primary" />
                <span className="font-bold text-xl">MindMate</span>
              </div>
              <p className="text-gray-400">
                {t.footer.description}
              </p>
              <div className="flex space-x-4">
                <Instagram className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Twitter className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Продукт</h4>
              <div className="space-y-2 text-gray-400">
                <a href="#features" className="block hover:text-white transition-colors">Возможности</a>
                <a href="#pricing" className="block hover:text-white transition-colors">Цены</a>
                <a href="#how-it-works" className="block hover:text-white transition-colors">Как работает</a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">{t.footer.legal}</h4>
              <div className="space-y-2 text-gray-400">
                <a href="#faq" className="block hover:text-white transition-colors">FAQ</a>
                <a href="#" className="block hover:text-white transition-colors">{t.footer.privacy}</a>
                <a href="#" className="block hover:text-white transition-colors">{t.footer.terms}</a>
                {language === 'ru' && (
                  <a href="#" className="block hover:text-white transition-colors">{t.footer.compliance}</a>
                )}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">{t.footer.contact}</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>support@mindmate.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+7 (800) 123-45-67</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MindMate. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;