# Alexandra Bobrova React project for VK internship

### Информация о проекте

Добро пожаловать на мое практическое задание для VK стажировки, направление React - разработчик.

В данном проекте я реализовала сайт с различной информацией о фильмах и сериалах. Для написания данного проекта, была использована API сайта **kinopoisk**. 

Основной моей идеей при реализации проекта было сделать сайт, на котором можно было бы посмотреть популярные фильмы и сериалы за последнее время, в том числе детально ознакомиться с ними, кликнув на карточку.

### Детали реализации

Проект написан на библиотеке **React** с использованием языка программирования **JavaScript**, а так же были использованы следующие библиотеки:
1. **React Router** - использовалась для навигации и переходов на сайте между страницами
2. **react-slideshow-image** - использовалась для создания карусели фильмов на главной странице

Создавая проект, я делила его на компоненты, стараясь придерживаться DRY подхода.

Шапка сайта была описана компонентом Navigation.

Главная страница была описана в компоненте Main, внутри которого использовался дополнительный компонент Header. А так же компоненты ApiTopNew, ApiTopMovies, ApiMovies, ApiTopSeries, ApiSeries которые отвечали за интеграцию и вывод информации из API кинопоиска.

Другие страницы так же были вынесены в отдельные компоненты в папку pages.

Запросы к API были описаны в файле API.jsx, а компоненты использующие реализованные запросы в файлах Api*.jsx в папке api

Благодарю за интересный опыт и практику, полученную при выполнении данного проекта!


P.S. На всякий случай, оставляю автоматически сгенерированную документацию.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
