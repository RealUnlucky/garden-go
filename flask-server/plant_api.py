import requests
import json

API_KEY = "2b10HHrjqI3ymxakBO4g677O"
FLORA_COVERAGE = "all"
api_endpoint = f"https://my-api.plantnet.org/v2/identify/{FLORA_COVERAGE}?api-key={API_KEY}"

image_path_1 = "C:\Ryan\Hackathon\Garden-Go\TEST.jpeg"
image_data_1 = open(image_path_1, 'rb')

data = {
    'organs': {'auto'}
}

files = [('images', (image_path_1, image_data_1))]

req = requests.Request('POST', url=api_endpoint, files=files, data=data)
prepared = req.prepare()

s = requests.Session()  
response = s.send(prepared)
flora_information = json.loads(response.text)
plant_name = flora_information['results'][0]['species']['commonNames'][0]

if response.status_code == 200:
    print('Successfully identified species: ' + plant_name)
elif response.status_code == 400:
    print('Bad Request.')
elif response.status_code == 401:
    print('Unauthorized Request.')
elif response.status_code == 404:
    print('Species Not Found.')
elif response.status_code == 414:
    print('URL Too Long.')
elif response.status_code == 429:
    print('Too Many Requests.')
else:
    print('Internal Server Error.')