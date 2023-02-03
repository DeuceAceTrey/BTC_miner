from flask import *
from flask_cors import CORS
from Register import insertUser
from Register import checkUser
from Register import getAllUser
from Register import UpdatePermission
from Register import UpdateFunds
#from Register import sendverify
from Register import checkverify
import json
import shutil

app = Flask(__name__)
CORS(app)

# @app.before_request
# def before_request(response):
#   response.headers.add('Access-Control-Allow-Headers', '*')
#   response.headers.add('Access-Control-Allow-Methods', '*')
#   response.headers.add('Access-Control-Allow-Credentials', 'true')
#   response.headers.add('Access-Control-Allow-Origin', '*')
#   return response
temp_path = ''

# @app.route('/data/test' , methods = ['GET','POST'])
# def create():
#     if request.method == 'GET':
#         print('Server is working')
#         return jsonify({"success": True , "data" : 'server is working'}), 201



@app.route('/data/register' , methods = ['GET','POST'])
def register():
    if request.method == 'POST':
        user_data = json.loads(request.data)
        result = insertUser(user_data['email'],user_data['password'])       
        
        return jsonify({"success": True , "data" : result}), 201

@app.route('/data/verify' , methods = ['GET','POST'])
def verify():
    if request.method == 'POST':
        args = request.args
        email = args.get('email')
        token = args.get('token')
        result = checkverify(email,token)
        if(result == 'success'):
            print("Successfully verified")
            return jsonify({"success": True , "data" : "Successfully verified"}), 201
        else:
            print("Verification Failed. Please try again.")
            return jsonify({"success": True , "data" : "Verification Failed. Please try again."}), 201

@app.route('/data/login' , methods = ['GET','POST'])
def login():
    if request.method == 'POST':
        user_data = json.loads(request.data)
        result = checkUser(user_data['email'],user_data['password'])       
        return jsonify({"success": True , "data" : result}), 201

@app.route('/data/getUser' , methods = ['GET','POST'])
def getUser():
    if request.method == 'GET':
        result = getAllUser()
        return jsonify({"success": True , "data" : result}), 201

@app.route('/data/changePermission' , methods = ['GET','POST'])
def changePermission():
    if request.method == 'POST':
        user_data = json.loads(request.data)
        email = user_data['email']
        permission = user_data['permission']
        result = UpdatePermission(email,permission)
        return jsonify({"success": True , "data" : result}), 201

@app.route('/data/addFunds' , methods = ['GET','POST'])
def addFunds():
    if request.method == 'POST':
        user_data = json.loads(request.data)
        email = user_data['email']
        funds = user_data['funds']
        result = UpdateFunds(email,funds)
        return jsonify({"success": True , "data" : result}), 201