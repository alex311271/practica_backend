Структура данных приложения

Области хранения данных:

- база данных на json-server
- BFF
- redux-store

Сущности приложения:

- пользователь:
  - БД (список пользователей),
  - BFF (сессия текущего п-ля),
  - store (отображение в браузере)
- роль пользователя:
  - БД (список ролей),
  - BFF (сессия пользователя с ролью),
  - store (использование на клиенте)
- статья:
  - БД (список статей),
  - store (отображение в браузере)
- коментарий:
  - БД (список коментариев),
  - store (отображение в браузеоре)

Таблицы БД:

- пользователи users:
  - login
  - passvord
  - rigisted_at(дата регистрации)
  - role_id (роль пользователя)
  - id
- роли roles:
  - id
  - name
- стытьи posts:
  - id
  - title
  - image_url
  - content
    published_at
- коментарии coments:
  - id
  - author_id
  - post_id
  - content
  - published_at

Схема сосьояний на BFF: - сессия текущего пользователя: - login - password - role

Схема для store: - user:
-id
-login
-role_id - posts:
массив post: - id - title - imageUrl - publishedAt - commentCount

- post:
  - id
  - title
  - imageUrl
  - content
  - publishedAt
- comments:
  массив comment: - id - author - content - publishedAt
- users:
  массив user: - id - login - registeredAt - role
  Запрос погоды:
  fetch(https://api.openweathermap.org/data/2.5/weather?q=Saint-Petersbgiturg&units=metric&lang=ru&appid=dc2ce85b67d064cc364926426dfc72db).then((data)=>data.json()).then(console.log);
