FROM node:15.3.0-alpine3.10
WORKDIR /app
COPY package.json .
RUN npm i --legacy-peer-deps
COPY . .
RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=0 /app/build /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]
