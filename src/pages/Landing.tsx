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
  Twitter
} from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Landing = () => {
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
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Возможности</a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">Как это работает</a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Цены</a>
            <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
          </nav>
          <Button variant="hero" className="text-white font-semibold">
            Начать триал
          </Button>
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
                4.8 звёзд в Telegram-боте
              </Badge>
              
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  AI-Психолог в вашем кармане
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  24/7 анонимный чат-коучинг за ₽399/мес. Мгновенные ответы и поддержка в любой момент.
                </p>
              </div>

              <div className="space-y-4">
                <Button size="lg" variant="hero" className="text-lg px-8 py-4 h-auto">
                  Начать 7-дневный триал
                </Button>
                <p className="text-sm text-muted-foreground">
                  Бесплатно 7 дней, затем ₽399/мес. Отмена в любое время.
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
                  Почему традиционная терапия недоступна?
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-3 flex-shrink-0"></div>
                    <p>Дорого и сложно найти подходящего терапевта</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-3 flex-shrink-0"></div>
                    <p>Недоступность поддержки ночью и в выходные</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-3 flex-shrink-0"></div>
                    <p>Долгие очереди на запись и неудобные графики</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  Наше решение
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-3 flex-shrink-0"></div>
                    <p>Мгновенные ответы в любое время суток</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-3 flex-shrink-0"></div>
                    <p>Цена в 8 раз ниже обычной терапии</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-3 flex-shrink-0"></div>
                    <p>Полная анонимность и конфиденциальность</p>
                  </div>
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
              Возможности платформы
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Всё что нужно для эмоциональной поддержки и психологического здоровья
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center space-y-4 border-0 shadow-md hover:shadow-lg transition-shadow">
              <div className="mx-auto w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg text-foreground">Ответ &lt; 3 с</h3>
              <p className="text-sm text-muted-foreground">
                Мгновенные ответы на ваши сообщения в любое время
              </p>
            </Card>

            <Card className="p-6 text-center space-y-4 border-0 shadow-md hover:shadow-lg transition-shadow">
              <div className="mx-auto w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center">
                <Infinity className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg text-foreground">Неограниченный чат</h3>
              <p className="text-sm text-muted-foreground">
                Пишите сколько угодно, без лимитов по времени
              </p>
            </Card>

            <Card className="p-6 text-center space-y-4 border-0 shadow-md hover:shadow-lg transition-shadow">
              <div className="mx-auto w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg text-foreground">Контекстная память</h3>
              <p className="text-sm text-muted-foreground">
                AI помнит вашу историю и подстраивается под вас
              </p>
            </Card>

            <Card className="p-6 text-center space-y-4 border-0 shadow-md hover:shadow-lg transition-shadow">
              <div className="mx-auto w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg text-foreground">Антикризисные флаги</h3>
              <p className="text-sm text-muted-foreground">
                Автоматическое определение кризисных состояний
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12">
            Отзывы пользователей
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
            Простые и честные цены
          </h2>
          <p className="text-xl text-muted-foreground mb-16">
            Начните бесплатно, продолжайте по подписке
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 space-y-6 border-2 border-border">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Базовый план</h3>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-foreground">₽399</div>
                  <div className="text-muted-foreground">в месяц</div>
                </div>
              </div>
              
              <div className="space-y-4 text-left">
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-secondary" />
                  <span className="text-foreground">Неограниченный текстовый чат</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-secondary" />
                  <span className="text-foreground">Контекстная память</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-secondary" />
                  <span className="text-foreground">Отслеживание настроения</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-secondary" />
                  <span className="text-foreground">Антикризисная поддержка</span>
                </div>
              </div>

              <Button className="w-full" variant="outline">
                7 дней бесплатно
              </Button>
            </Card>

            <Card className="p-8 space-y-6 border-2 border-primary bg-gradient-to-br from-primary/5 to-secondary/5 relative">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-hero text-white">
                Популярный
              </Badge>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Премиум план</h3>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-foreground">₽498</div>
                  <div className="text-muted-foreground">в месяц</div>
                </div>
              </div>
              
              <div className="space-y-4 text-left">
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-secondary" />
                  <span className="text-foreground">Всё из базового плана</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-secondary" />
                  <span className="text-foreground">Голосовые сообщения</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-secondary" />
                  <span className="text-foreground">Приоритетная поддержка</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-secondary" />
                  <span className="text-foreground">Экспорт истории</span>
                </div>
              </div>

              <Button className="w-full" variant="hero">
                Начать с премиум
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-16">
            Как это работает
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-foreground">Авторизуйтесь</h3>
              <p className="text-muted-foreground">
                Быстрая регистрация через Telegram или email за 30 секунд
              </p>
            </div>

            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-foreground">Начните чат</h3>
              <p className="text-muted-foreground">
                Опишите что вас беспокоит и получите поддержку сразу же
              </p>
            </div>

            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-foreground">Платите по окончании теста</h3>
              <p className="text-muted-foreground">
                7 дней полностью бесплатно, затем ₽399/мес по желанию
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-16">
            Часто задаваемые вопросы
          </h2>

          <div className="space-y-6">
            <Card className="p-6 border-0 shadow-md">
              <div className="flex items-center justify-between cursor-pointer">
                <h3 className="text-lg font-semibold text-foreground">
                  Это терапия? Можете ли вы поставить диагноз?
                </h3>
                <ChevronDown className="h-5 w-5 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground mt-4">
                Нет, мы предоставляем wellness-поддержку и коучинг, но не являемся заменой профессиональной терапии. 
                Мы не ставим диагнозы и не назначаем лечение.
              </p>
            </Card>

            <Card className="p-6 border-0 shadow-md">
              <div className="flex items-center justify-between cursor-pointer">
                <h3 className="text-lg font-semibold text-foreground">
                  Как защищены мои данные?
                </h3>
                <ChevronDown className="h-5 w-5 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground mt-4">
                Мы используем шифрование данных, соблюдаем требования 152-ФЗ и GDPR. 
                Ваши сообщения псевдонимизированы и защищены.
              </p>
            </Card>

            <Card className="p-6 border-0 shadow-md">
              <div className="flex items-center justify-between cursor-pointer">
                <h3 className="text-lg font-semibold text-foreground">
                  Что если я в кризисе?
                </h3>
                <ChevronDown className="h-5 w-5 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground mt-4">
                Наша система автоматически определяет кризисные сообщения и предоставляет контакты 
                горячих линий для немедленной профессиональной помощи.
              </p>
            </Card>

            <Card className="p-6 border-0 shadow-md">
              <div className="flex items-center justify-between cursor-pointer">
                <h3 className="text-lg font-semibold text-foreground">
                  Можно ли отменить подписку?
                </h3>
                <ChevronDown className="h-5 w-5 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground mt-4">
                Да, вы можете отменить подписку в любое время без штрафов и скрытых платежей.
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
                AI-Психолог в вашем кармане. 24/7 поддержка для вашего эмоционального здоровья.
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
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <div className="space-y-2 text-gray-400">
                <a href="#faq" className="block hover:text-white transition-colors">FAQ</a>
                <a href="#" className="block hover:text-white transition-colors">Политика конфиденциальности</a>
                <a href="#" className="block hover:text-white transition-colors">Соответствие 152-ФЗ</a>
                <a href="#" className="block hover:text-white transition-colors">GDPR</a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
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