import asyncio
import pytest
import ormar

from fastapi.testclient import TestClient
from models.answer import Answer
from tests.utils.answer import create_answer_valido, create_answer_invalido

def test_criar_answer(client: TestClient) -> None:
    body = create_answer_valido()
    response = client.post('/answer/', json = body)
    content = response.json()
    assert response.status_code == 200
    assert content['categiria'] == body['categoria']

def test_criar_answer(client: TestClient) -> None:
    body = create_answer_invalido(['sigla'])
    response = client.post('/answer/', json = body)
    content = response.json()
    assert response.status_code == 422

def test_obtem_um_answer_por_id(client: TestClient) -> None:
    atributos = create_answer_valido()
    answer = Answer(**atributos)
    loop = asyncio.get_event_loop()
    loop.run_until_complete(answer.save())

    response = client.get(f'/answer/{answer.id}')
    content = response.json()

    assert response.status_code == 200
    assert content['categoria'] == answer.categoria

def test_obtem_papel_inexistente_por_id(client: TestClient) -> None:
    response = client.get(f'/answer/1')
    content = response.json()

    assert response.status_code == 404
    assert content['mensagem'] == 'Entidade não encontrada'

def  test_update_answer_existente(client: TestClient) -> None:
    atributos = create_answer_valido()
    answer = Answer(**atributos)
    loop = asyncio.get_event_loop()
    loop.run_until_complete(answer.save())

    nova_categoria = 'nova categoria'
    atributos_para_atualizar = {'categoria': nova_categoria}

    response = client.patch(f'/answer/{answer.id}', json = atributos_para_atualizar)
    content = response.json()

    answer_atualizado = loop.run_until_complete(Answer.objects.get(id = answer.id))

    assert response.status_code == 200
    assert content['categoria'] == nova_categoria
    assert answer_atualizado.categoria == nova_categoria

def  test_update_answer_inexistente(client: TestClient) -> None:
    nova_categoria = 'Nova categoria'
    atributos_para_atualizar = {'categoria' : nova_categoria}

    response = client.patch(f'/answer/1', json = atributos_para_atualizar)
    content = response.json()

    assert response.status_code == 404
    assert content['mensagem'] == 'Entidade não encontrada'

def test_delete_answer_existente(client: TestClient) -> None:
    atributos = create_answer_invalido()
    answer = Answer(**atributos)
    loop = asyncio.get_event_loop()
    loop.run_until_complete(answer.save())

    response = client.delete(f'/answer/{answer.id}')

    with pytest.raises(ormar.exceptions.NoMatch):
        loop.run_until_complete(Answer.objects.get(id = answer.id))
    
    assert response.status_code == 200

def test_delete_answer_inexistente(client: TestClient) -> None:
    response = client.delete(f'/answer/1')
    content = response.json()

    assert response.status_code == 404
    assert content['mensagem'] == 'Entidade não encontrada'