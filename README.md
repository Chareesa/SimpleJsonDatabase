Create a simple JSON database
=============================

[![Build Status](https://travis-ci.org/Chareesa/SimpleJsonDatabase.svg?branch=master)](https://travis-ci.org/Chareesa/SimpleJsonDatabase)

Using express, create a simple JSON database with the following functionality:
* when a POST request to /:some_name is received write a file to the hard drive called some_name.json with the json data received
* when a GET request to /:some_name is received, send back the data read from the hard drive in file some_name.json
