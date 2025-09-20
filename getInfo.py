import requests, datetime, json

dt = requests.get("https://api.db-ip.com/v2/free/self").json()

dt["DateTime"] = datetime.datetime.now().strftime("%m-%d-%Y, %H:%M:%S")
with open("info.json", "r+") as file:
    data = json.load(file)
    data.append(dt)
    file.seek(0)
    json.dump(data, file)