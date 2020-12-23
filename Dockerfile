FROM node:alpine
ARG COGNITO_USER_POOL_ID
ARG COGNITO_CLIENT_ID
ENV COGNITO_USER_POOL_ID=$COGNITO_USER_POOL_ID
RUN echo $COGNITO_USER_POOL_ID
ENV COGNITO_CLIENT_ID=$COGNITO_CLIENT_ID
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
