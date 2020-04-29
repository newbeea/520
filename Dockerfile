FROM daocloud.io/library/node:12.16.2-alpine as builder
WORKDIR /usr/src/app
ADD package.json /usr/src/app
RUN npm install --registry=https://registry.npm.taobao.org
ADD . /usr/src/app
RUN npm run build

FROM nginx:alpine
COPY --from=builder /usr/src/app/dist/* /usr/share/nginx/html/
