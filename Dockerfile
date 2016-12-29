FROM dottgonzo/nodealpine
RUN apk update && apk add docker
COPY ./bin /app/bin
COPY ./index.js /app/
COPY ./package.json /app/
COPY ./LICENSE /app/
RUN cd /app && npm i --production
CMD cd /app && node bin/exec
