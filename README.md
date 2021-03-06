# TЗ

1. Доработать фронтенд по тем пунктам, которые описаны в CodeSandbox

2. Бэкенд отдает следующую информацию о слайдах в виде массива объектов:

type: 'text' | 'button' — тип слайда. text — обычный текстовый слайд, button — слайд с кнопкой.

content: string — контент слайда. Если слайд имеет тип text, то content — текст в слайде, если button — то текст внутри кнопки.
```
type Slide = {
   type: 'text' | 'button';
   content: string;
}

type Slides = Slide[]
```

Необходимо:

   1. Добавить в MongoDB коллекцию пользователей, которые имеют доступ к слайдам. Пользователи имеют логин и пароль.
   2. Добавить в MongoDB коллекцию слайдов, которые будут хранить слайды.
   3. Написать на express REST API со следующими маршрутами:

    POST /user — создать нового пользователя.
    POST /user/login — вход в систему.

    POST /slide — добавить новый слайд (защищенный маршрут)
    GET /slide — собрать весь список слайдов (защищенный маршрут)

   4. В качестве основного метода защиты нужно использовать аутентификацию с помощью JWT. https://www.section.io/engineering-education/how-to-build-authentication-api-with-jwt-token-in-nodejs/
   5. Протестировать API через Postman.

3. Интегрировать API во фронтенд:
   1. Добавить Стор редакса, который будет хранить в себе информацию о текущем пользователе и о слайдах.
   2. Реализовать с помощью redux-saga саги для входа в систему и получения списка слайдов через твой API. В базовой реализации можно просто автоматически входить по логину/паролю, которые хранятся в переменных на фронтенде.
   3. Доработать компонент Slide таким образом, чтобы он принимал в себя не JSX, а массив Slide[], описанный выше.

Весь код должен быть написан на Typescript. Делать production-сборки не нужно

4. (опционально) Очень круто, если ты сделаешь следующие вещи:
   1. Защитить API от внешнего воздействия. Изучение этого вопроса можно начать с CSRF Token (https://www.synopsys.com/glossary/what-is-csrf.html) и СORS settings (https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS). Реализации этих методов доступны в Express как Middleware (http://expressjs.com/en/resources/middleware.html). Если ты найдешь еще методы защиты, то будет круто!
   2. Добавить экран логина в систему.
   3. Реализовать возможность добавления новых слайдов через простую форму.
   3. Улучшить UX и визуальную составляющую приложения. Здесь можешь делать все, что хочешь :)

