import requests
import json
from bs4 import BeautifulSoup
from pymongo import MongoClient
import urllib.request

# Connect to MongoDB
#client = MongoClient('mongodb://root:example@localhost:27017/')
client = MongoClient('mongodb://root:example@mongo:27017/')
db = client['test']
collection = db['products']

file="./products.json"

#Insert Data through JSON file
with open(file) as f:
    file_data = json.load(f)

for doc in file_data:
    if '_id' in doc and '$oid' in doc['_id']:
        doc['_id'] = doc['_id']['$oid']

# Insert the scraped data into MongoDB
collection.insert_many(file_data)


# Close the MongoDB connection
client.close()
