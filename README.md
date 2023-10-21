## О проекте

Template-webpack - это набор NPM модулей для разработки фронтенда. Здесь настроена работа сборщика Webpack с Pug, Sass, JavaScript, React и Markdown. Проект был создан при написании статьи [Настройка Webpack 5](https://habr.com/ru/post/701724/) и полностью соответствует коду из этой статьи.

## Быстрый запуск

Чтобы использовать данный набор инструментов у вас на компьютере должен быть установлен [Node.js](https://nodejs.org/).

Откройте терминал и сделайте клон проекта к себе на компьютер:

```
git clone https://github.com/injashkin/npm-for-frontend.git new-project-name
```

вместо `new-project-name` вы можете указать любое другое имя проекта

Если у вас не установлен Git, то вы можете [здесь](https://github.com/injashkin/webpack-template/archive/refs/heads/master.zip) скачать ZIP архив. Распакуйте этот архив.

В окне терминала зайдите в каталог и установите проект. Для этого выполните следующие две команды:

```
cd new-project-name
npm i
```

Запустите проект с помощью следующей команды:

```
npm run serve
```

Должно открыться окно браузера со страницей, которая была сгенерирована. Теперь вы можете разрабатывать сайт.

После разработки делаем продакшн версию сайта

```
npm run build
```
