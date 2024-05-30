FROM node:18

WORKDIR /code

COPY entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

CMD ["sh", "-c", "entrypoint.sh"]