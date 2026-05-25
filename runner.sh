#! /usr/bin/bash

# Turn on caption model
cd caption-model 
source venv/Scripts/activate
py app.py > caption-model.log 2>&1 &

# Turn on webapp server
cd ../website
npm run start > website.log 2>&1 &