#!/bin/bash
set -e
node ./generate-custom.js
cp ./cottagecore-theme.css ./build/css/theme.css
echo "✨ Build completado con temática Cottagecore pulida"
