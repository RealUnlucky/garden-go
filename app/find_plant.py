import requests
import json

class FindPlant():
    def __init__(self, api, files, data):
        self.api = api
        self.files = files
        self.data = data

    def get(self):
        req = requests.Request('POST', url=self.api, files=self.files, data=self.data)
        prepared = req.prepare()

        s = requests.Session()  
        response = s.send(prepared)
        flora_information = json.loads(response.text)
        
        return flora_information

    def name(self, json_file):
        plant_name = json_file['results'][0]['species']['commonNames'][0]
        
        return plant_name