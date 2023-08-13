import requests
import json
import plant_api

def lastWord(string):
    newstring = ""

    for i in range(len(string)-1, 0, -1):
        if(string[i] == " "):
            return newstring[::-1]
        else:
            newstring = newstring + string[i]

def get(api):
    req = requests.Request("GET", url = api)
    prepared = req.prepare()

    return prepared

def resp(prep):
    s = requests.Session()
    response = s.send(prep)
    plant_information = json.loads(response.text)

    return plant_information

API_KEY = "sk-N8rN64d7de088737b1863"
ID = plant_api.plant_name
api_endpoint = f"https://perenual.com/api/species-care-guide-list?q={ID}&key={API_KEY}"

query = get(api_endpoint)
file = resp(query)

if len(file["data"]) == 0:
    species_ID = lastWord(plant_api.plant_name)
    
    new_api_endpoint = f"https://perenual.com/api/species-care-guide-list?q={species_ID}&key={API_KEY}"
    query_2 = get(new_api_endpoint)
    file2 = resp(query_2)

    for i in range(len(file2["data"]) - 1):
        if(len(file2["data"][i]["common_name"].split())) == 1:
            print(file2["data"][i]["section"][0]["description"] + "\n")
            print(file2["data"][i]["section"][1]["description"] + "\n")
            print(file2["data"][i]["section"][2]["description"])
else:
    print(file["data"][0]["section"][0]["description"] + "\n") 
    print(file["data"][0]["section"][1]["description"])