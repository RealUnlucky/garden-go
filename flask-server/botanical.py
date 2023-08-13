import requests
import json



class Garden():
    def __init__(self, botanical_name):
        self.botanical_name = botanical_name

    def lastWord(self, string):
        newstring = ""

        for i in range(len(string)-1, 0, -1):
            if(string[i] == " "):
                return newstring[::-1]
            else:
                newstring = newstring + string[i]

    def get(self, api):
        req = requests.Request("GET", url = api)
        prepared = req.prepare()
        s = requests.Session()
        response = s.send(prepared)
        plant_information = json.loads(response.text)

        return plant_information

    def has_info(self, plant_info):
        if len(plant_info["data"]) == 0:
            return False
        else:
            return plant_info["data"][0]["section"][0]["description"] + "\n" + plant_info["data"][0]["section"][1]["description"]

    def find_genus(self, api):

        instructions = []
        species_ID = self.lastWord(self.botanical_name)
        
        new_api_endpoint = f"https://perenual.com/api/species-care-guide-list?q={species_ID}&key={api}"
        file = self.get(new_api_endpoint)

        for i in range(len(file["data"]) - 1):
            if(len(file["data"][i]["common_name"].split())) == 1:
                #print(file["data"][i]["section"])
                for j in range(len(file["data"][i]["section"])):
                    instructions.append(file["data"][i]["section"][j]["description"])
            
        instructions.insert(0, 'water')
        instructions.insert(2, 'sun')
        instructions.insert(4, 'prune')
        return instructions

    def convert(self, lst):
        res_dct = {lst[i]: lst[i + 1] for i in range(0, len(lst), 2)}
        res_dct["Name"] = self.botanical_name
        return res_dct
