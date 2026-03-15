FROM nginx:alpine

# Xóa trang mặc định của nginx
RUN rm -rf /usr/share/nginx/html/*

# Copy toàn bộ project vào thư mục web của nginx
COPY . /usr/share/nginx/html

EXPOSE 81
