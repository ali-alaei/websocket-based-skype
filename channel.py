from flask import Flask
from flask import Blueprint
from flask import request
from flask_sse import sse

channel = Blueprint('channel', __name__)

# @channel.route("/", methods=['POST'])
# def hello():
#     print "Hello channel!"
#     print "req:  ", request.data
#     return "ressssponseeeee channel"




@channel.route("/send/<channel_name>/<massage_type>", methods=['POST'])
def send(channel_name, massage_type):
	print ("Hello channel send!")
	sse.publish({"message": request.data}, type=massage_type, channel=channel_name)
	return ("send", massage_type, "to", channel_name) 
