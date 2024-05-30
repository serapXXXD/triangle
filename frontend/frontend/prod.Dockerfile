FROM huecker.io/library/node:18

WORKDIR /code

COPY . .

RUN npm install
RUN npm run build
CMD cp -r build result_build