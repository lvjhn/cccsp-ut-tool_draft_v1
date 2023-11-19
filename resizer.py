import os 
from PIL import Image

mode = "mobile"
base_path = "./public/images/ui-screenshots/" + mode
files = os.listdir(base_path) 


for file in files: 
    filename = base_path + "/" + file 
    
    print("Loading " + filename)

    image = Image.open(filename)

    if mode == "web": 
        image = image.resize((1024, 576))
        
    elif mode == "mobile": 
        image = image.resize((281, 500))
    
    image.save("./public/images/ui-screenshots-resized/" + mode + "/" + file)

