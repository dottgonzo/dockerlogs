FROM dottgonzo/nodealpine
RUN apk add docker git
COPY ./bin /app/bin
COPY ./index.js /app/
COPY ./package.json /app/
RUN cd /app && npm i --production
RUN cd /app && node bin/exec
