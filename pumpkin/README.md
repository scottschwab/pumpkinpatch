# pumpkin

## For Development

```
# cd /home/scott/src/pumpkinpatch
# cd docker
# docker build . -t pumpkin:version
# cd ..
# docker run -it -p 8080:8080 -v $PWD:/home/pumpkinpatch pumpkin:version /bin/bash
```

In docker container

```
# cd pumpkin/src
# yarn serve
```

## Project setup

```

yarn install

```

### Compiles and hot-reloads for development

```

yarn run serve

```

### Compiles and minifies for production

```

yarn run build

```

### Run your tests

```

yarn run test

```

### Lints and fixes files

```

yarn run lint

```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

```

```
