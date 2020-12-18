# Node.js + Docker + Heroku

## Free Docker Hosting on Heroku (with Node.js)

Step 1. Install Heroku CLI

```sh
sudo npm i -g heroku
```

Step 2. Login Heroku

```sh
heroku login
```

Step 3. Clone the repository

```sh
git clone https://github.com/tmvdl/node-docker-heroku.git
cd node-docker-heroku
```

Step 4. Crete a Heroku project

```sh
heroku create
heroku container:login
```

Step 5. Publish the project

```sh
heroku container:push web -a APP_NAME
heroku container:release web -a APP_NAME
```

THE END
