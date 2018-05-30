#!/usr/bin/env bash

C_IMAGE_NAME='self-checking-app';
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )";

docker build . -t "${C_IMAGE_NAME}" --build-arg http_proxy=${http_proxy} --build-arg https_proxy=${https_proxy}

docker run -it --network="bridge" \
		-p3000:3000 \
		--rm \
		-u $( id -u ):$( id -g ) \
		-e http_proxy=${http_proxy} \
    	-e https_proxy=${http_proxy} \
		-v ${SCRIPT_DIR}/../:/app \
		${C_IMAGE_NAME}
