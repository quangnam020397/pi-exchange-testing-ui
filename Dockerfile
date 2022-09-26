# Stage 1 - Build Angular App inside temporary Node container
FROM node:16-alpine as builder

WORKDIR /usr/src/app
COPY ./dist/erp_admin_portal_ui ./
# RUN export NODE_OPTIONS=--max_old_space_size=6144
# RUN yarn install
# RUN yarn build

# Stage 2 - Deploy with NGNIX
FROM nginx:1.20.1-alpine

COPY --from=builder /usr/src/app /var/www
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 3030

ENTRYPOINT ["nginx","-g","daemon off;"]
