#!/bin/bash

set -e

until cd /code
do
    echo "Waiting for volume mount..."
done

USER_ID=${APPLICATION_RUN_ID:-33}
usermod -u "$USER_ID" node


npm install
npm run start
# pm2-runtime -i 3 start yarn --interpreter bash --name nuxt -- dev
# && yarn dev