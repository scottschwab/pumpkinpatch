FROM node:10.16.3-jessie
RUN apt update
RUN apt install -y vim-nox
RUN mkdir -p /home/pumpkinpatch
RUN npm install -g yarn 
RUN yarn global add vue @vue/cli @vue/cli-service-global vue-material webpack
EXPOSE 8080
WORKDIR /home/pumpkinpatch
CMD /bin/bash