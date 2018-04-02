# Agenda-app

Simple RESTful agenda app, backend provided by Laravel and front-end by React/Redux

  - CRUD Contacts
  - CRUD Messages

### Tech

Agenda-app uses a number of open source projects to work properly:

* [react]
* [redux]
* [redux-form]
* [laravel]

And of course Dillinger itself is open source with a [public repository][dill]
 on GitHub.

### Installation
Requirements:
* Laravel 5.5 or above
* Node 8 or above
* Composer 1.5 or above
* Any requirements for the above stack

Clone the repo and run:

```sh
$ cd agenda-app
$ cd composer update
$ npm install
$ php artisan key:generate
$ php artisan migrate
```

After that, rename .env.example and adjust you settings.


### Todos

 - Write Tests (I know, I should've used TDD but time was of the essence for this project)
 - Optmize/Refactor similar code
 - Add authentication
 -- By usernam/password
 -- Google api
-- Facebook api
-- Twitter api
-- Linkedin api
-- Improve styles
-- Add some more features (maybe some social network api base info)

License
----

MIT

Author
----
[Jorge Andrade] -  [LinkedIn] - jacandrade@gmail.com

**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [react]: <https://reactjs.org>
   [redux]: <https://redux.js.org>
   [redux-form]: <https://redux-form.com>
   [laravel]: <https://laravel.com/>
   [Jorge Andrade]: <http://registry.jsonresume.org/jorge_andrade>
[LinkedIn]: <https://www.linkedin.com/in/jorge-andrade-fullstack/>


