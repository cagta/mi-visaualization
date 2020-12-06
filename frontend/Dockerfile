# build React application
FROM node:alpine as build
WORKDIR /app
COPY . /app
COPY package.json /app/package.json
RUN yarn
RUN yarn build

# serve the built with nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]