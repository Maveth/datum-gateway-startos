FROM debian:bookworm-slim AS build

RUN apt update && \
    apt-get install -y build-essential cmake curl libmicrohttpd-dev libjansson-dev \
                       libcurl4-openssl-dev libgcrypt20-dev libsodium-dev \
                       netcat-traditional pkg-config git

ARG ARCH
ARG PLATFORM

# Include .git so UA reports real githash (e.g. 7491a50) instead of UNKNOWN.
COPY /.git /parent_dir/.git

ADD ./datum_gateway /parent_dir/datum_gateway
WORKDIR /parent_dir/datum_gateway
RUN git status || true
RUN cmake . && make -j"$(nproc)"

FROM debian:bookworm-slim AS final

RUN apt update && \
     apt-get install -y curl netcat-traditional libmicrohttpd12 libjansson4 libsodium23 jq

WORKDIR /root

COPY --from=build /parent_dir/datum_gateway/datum_gateway /usr/local/bin/datum_gateway

RUN chmod +x /usr/local/bin/datum_gateway

WORKDIR /root
