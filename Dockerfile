FROM nginx:alpine
COPY dist/libreria/browser /usr/share/nginx/html
EXPOSE 80
