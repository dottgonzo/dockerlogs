FROM dottgonzo/nodealpine
RUN apk add docker git
COPY ./index.js /app/
COPY ./package.json /app/
RUN cd /app && node bin/exec
