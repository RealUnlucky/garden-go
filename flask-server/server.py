# Import flask and datetime module for showing date and time
from flask import Flask
import datetime

x = datetime.datetime.now()

# Initializing flask app
app = Flask(__name__)


# Route for seeing a data
@app.route('/data')

def get_time():

	# Returning an api for showing in reactjs
	return {"Date":x}

	
# Running app
if __name__ == '__main__':
	app.run(host = '192.168.0.100',port=3000,debug='True')
