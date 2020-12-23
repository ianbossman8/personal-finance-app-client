FROM node:alpine
ARG USER_POOL_ID
ARG CLIENT_ID
ENV USER_POOL_ID=$USER_POOL_ID
ENV CLIENT_ID=$CLIENT_ID
WORKDIR /app
COPY package.json .
RUN npm i
COPY . .
RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=0 /app/build /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]
