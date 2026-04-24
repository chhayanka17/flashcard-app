import requests

url = "http://localhost:5000/api/generate"
data = {"notes": "Albert Einstein developed the theory of relativity. India gained independence in 1947."}

response = requests.post(url, json=data)
print("Status code:", response.status_code)
print("Response:")
print(response.json())