FROM node:12

WORKDIR /home/hakan/Masaüstü/docker

COPY Atiba /home/hakan/Masaüstü/docker

CMD npm run start

EXPOSE 3000