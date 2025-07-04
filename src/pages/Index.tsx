import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                <Icon name="Code" className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                PythonPro
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#services"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                Что делаем
              </a>
              <a
                href="#process"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                Как работаем
              </a>
              <a
                href="#pricing"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                Стоимость
              </a>
              <a
                href="#contact"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                Контакты
              </a>
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
              Заказать проект
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <Badge
                variant="outline"
                className="px-4 py-2 text-sm font-medium bg-white/50"
              >
                🐍 Python Development Services
              </Badge>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent leading-tight">
              Автоматизация и
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                десктопные приложения
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Создаем боты для автоматизации рутинных задач и разрабатываем
              мощные десктопные приложения на Python. Освободите время для
              важных дел — доверьте рутину технологиям.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-lg px-8 py-4"
              >
                <Icon name="Rocket" className="w-5 h-5 mr-2" />
                Начать проект
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-300 text-slate-700 hover:bg-slate-50 text-lg px-8 py-4"
              >
                <Icon name="Play" className="w-5 h-5 mr-2" />
                Посмотреть примеры
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">
              Что мы делаем
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Специализируемся на создании решений для автоматизации
              бизнес-процессов и разработке desktop-приложений
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-8">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Bot" className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-slate-900 mb-2">
                  Автоматизация и боты
                </CardTitle>
                <CardDescription className="text-slate-600 text-base">
                  Создаем умные решения для автоматизации рутинных задач
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Icon
                      name="CheckCircle"
                      className="w-5 h-5 text-green-500"
                    />
                    <span className="text-slate-700">
                      Telegram и Discord боты
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon
                      name="CheckCircle"
                      className="w-5 h-5 text-green-500"
                    />
                    <span className="text-slate-700">
                      Парсинг данных с сайтов
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon
                      name="CheckCircle"
                      className="w-5 h-5 text-green-500"
                    />
                    <span className="text-slate-700">
                      Автоматизация Excel и документов
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon
                      name="CheckCircle"
                      className="w-5 h-5 text-green-500"
                    />
                    <span className="text-slate-700">
                      Интеграция с API сервисов
                    </span>
                  </div>
                </div>
                <div className="pt-4">
                  <Badge variant="secondary" className="mr-2">
                    Selenium
                  </Badge>
                  <Badge variant="secondary" className="mr-2">
                    BeautifulSoup
                  </Badge>
                  <Badge variant="secondary">Requests</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-8">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Monitor" className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-slate-900 mb-2">
                  Десктопные приложения
                </CardTitle>
                <CardDescription className="text-slate-600 text-base">
                  Разрабатываем кроссплатформенные приложения для Windows, Mac и
                  Linux
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Icon
                      name="CheckCircle"
                      className="w-5 h-5 text-green-500"
                    />
                    <span className="text-slate-700">
                      GUI приложения на Tkinter/PyQt
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon
                      name="CheckCircle"
                      className="w-5 h-5 text-green-500"
                    />
                    <span className="text-slate-700">
                      Приложения для работы с данными
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon
                      name="CheckCircle"
                      className="w-5 h-5 text-green-500"
                    />
                    <span className="text-slate-700">
                      Утилиты для системного администрирования
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon
                      name="CheckCircle"
                      className="w-5 h-5 text-green-500"
                    />
                    <span className="text-slate-700">
                      Кроссплатформенные решения
                    </span>
                  </div>
                </div>
                <div className="pt-4">
                  <Badge variant="secondary" className="mr-2">
                    PyQt6
                  </Badge>
                  <Badge variant="secondary" className="mr-2">
                    Tkinter
                  </Badge>
                  <Badge variant="secondary">Kivy</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">
              Как мы работаем
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Простой и понятный процесс от идеи до готового решения
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="MessageSquare" className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900">
                1. Обсуждение
              </h3>
              <p className="text-slate-600">
                Выясняем задачи, цели и требования к проекту
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="FileCode" className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900">
                2. Планирование
              </h3>
              <p className="text-slate-600">
                Создаем техническое задание и план разработки
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Code" className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900">
                3. Разработка
              </h3>
              <p className="text-slate-600">
                Пишем код, тестируем и показываем промежуточные результаты
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Rocket" className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900">
                4. Запуск
              </h3>
              <p className="text-slate-600">
                Передаем готовое решение и обучаем работе с ним
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">
              Стоимость
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Гибкие тарифы для проектов любой сложности
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-slate-200 hover:border-blue-300 transition-colors">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-slate-900 mb-2">
                  Базовый бот
                </CardTitle>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  от 15 000₽
                </div>
                <CardDescription className="text-slate-600">
                  Простой Telegram бот или автоматизация
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Icon name="Check" className="w-5 h-5 text-green-500" />
                    <span className="text-slate-700">До 10 команд</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Check" className="w-5 h-5 text-green-500" />
                    <span className="text-slate-700">Базовые функции</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Check" className="w-5 h-5 text-green-500" />
                    <span className="text-slate-700">Месяц поддержки</span>
                  </div>
                </div>
                <Button className="w-full mt-6" variant="outline">
                  Заказать
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-300 bg-green-50 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-green-600 text-white px-4 py-1">
                  Популярный
                </Badge>
              </div>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-slate-900 mb-2">
                  Продвинутое решение
                </CardTitle>
                <div className="text-4xl font-bold text-green-600 mb-2">
                  от 35 000₽
                </div>
                <CardDescription className="text-slate-600">
                  Комплексная автоматизация или desktop app
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Icon name="Check" className="w-5 h-5 text-green-500" />
                    <span className="text-slate-700">
                      Неограниченный функционал
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Check" className="w-5 h-5 text-green-500" />
                    <span className="text-slate-700">Интеграция с API</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Check" className="w-5 h-5 text-green-500" />
                    <span className="text-slate-700">3 месяца поддержки</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-green-600 hover:bg-green-700">
                  Заказать
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200 hover:border-purple-300 transition-colors">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-slate-900 mb-2">
                  Корпоративное
                </CardTitle>
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  от 80 000₽
                </div>
                <CardDescription className="text-slate-600">
                  Масштабируемые enterprise решения
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Icon name="Check" className="w-5 h-5 text-green-500" />
                    <span className="text-slate-700">
                      Архитектура под нагрузку
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Check" className="w-5 h-5 text-green-500" />
                    <span className="text-slate-700">Интеграция с CRM/ERP</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Check" className="w-5 h-5 text-green-500" />
                    <span className="text-slate-700">Год поддержки</span>
                  </div>
                </div>
                <Button className="w-full mt-6" variant="outline">
                  Обсудить
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4 text-slate-900">
            Готовы автоматизировать ваш бизнес?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Расскажите о своих задачах, и мы предложим оптимальное решение
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-lg px-8 py-4"
            >
              <Icon name="Send" className="w-5 h-5 mr-2" />
              Написать в Telegram
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-300 text-slate-700 hover:bg-slate-50 text-lg px-8 py-4"
            >
              <Icon name="Mail" className="w-5 h-5 mr-2" />
              Отправить email
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                <Icon name="Code" className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">PythonPro</span>
            </div>
            <p className="text-slate-400 mb-4">
              Автоматизация и десктопные приложения на Python
            </p>
            <div className="flex justify-center space-x-6">
              <Icon
                name="Github"
                className="w-6 h-6 text-slate-400 hover:text-white cursor-pointer transition-colors"
              />
              <Icon
                name="Mail"
                className="w-6 h-6 text-slate-400 hover:text-white cursor-pointer transition-colors"
              />
              <Icon
                name="MessageCircle"
                className="w-6 h-6 text-slate-400 hover:text-white cursor-pointer transition-colors"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
