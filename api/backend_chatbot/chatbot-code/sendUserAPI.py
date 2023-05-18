import requests

def sendAPI(answer, apiUserid):
    apiUseridPATCH = apiUserid+1
    print(f"API USER ID PATCH: {apiUseridPATCH}")
    info = {"avillaAnswer": f"{answer}"}
    print(info)
    url = (f'http://localhost:8000/question/{apiUseridPATCH}')
    response = requests.patch(url, json=info)
    if response.status_code == 200: 
        print("Patch realizado com sucesso!")
    else:
        print("Falha ao fazer o patch. Código de status:", response.status_code)