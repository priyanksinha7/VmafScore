FROM node:12-alpine
WORKDIR /VIDEOC
COPY . .
RUN npm install
COPY --from=mwader/static-ffmpeg:5.0.1-3 /ffmpeg /usr/local/bin/
COPY --from=mwader/static-ffmpeg:5.0.1-3 /ffprobe /usr/local/bin/
CMD ["npm", "run", "dev"]