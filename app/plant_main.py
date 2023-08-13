from find_plant import FindPlant
from botanical import Garden

if __name__ == "__main__":
    PLANTNET_API_KEY = "2b10HHrjqI3ymxakBO4g677O"
    FLORA_COVERAGE = "all"
    plantnet_endpoint = f"https://my-api.plantnet.org/v2/identify/{FLORA_COVERAGE}?api-key={PLANTNET_API_KEY}"
    data = { 'organs': {'auto'}}

    image_path_1 = "C:\Ryan\Hackathon\Garden-Go\TEST.jpeg"
    image_data_1 = open(image_path_1, 'rb')

    files = [('images', (image_path_1, image_data_1))]

    plant_name = FindPlant(plantnet_endpoint,files,data)

    query1 = plant_name.get()
    plant = plant_name.name(query1)

    PERENUAL_API_KEY = "sk-N8rN64d7de088737b1863"
    ID = plant
    perenual_endpoint = f"https://perenual.com/api/species-care-guide-list?q={ID}&key={PERENUAL_API_KEY}"

    instructions = Garden(plant)
    query2 = instructions.get(perenual_endpoint)
    if instructions.has_info(query2) == False:
        genus = instructions.find_genus(PERENUAL_API_KEY)

    planting = instructions.convert(genus)