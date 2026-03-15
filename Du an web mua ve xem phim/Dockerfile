# dùng nginx làm web server
FROM nginx:alpine

# xoá file web mặc định của nginx
RUN rm -rf /usr/share/nginx/html/*

# copy toàn bộ code web vào container
COPY . /usr/share/nginx/html

# mở port 80
EXPOSE 80

# chạy nginx
CMD ["nginx", "-g", "daemon off;"]