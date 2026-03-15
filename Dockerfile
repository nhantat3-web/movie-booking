FROM nginx:alpine

COPY index.html /usr/share/nginx/html/
COPY payment.html /usr/share/nginx/html/
COPY confirm.html /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY images /usr/share/nginx/html/images
