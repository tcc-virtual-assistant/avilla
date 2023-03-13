import ormar
import re
from pydantic import validator
from sqlalchemy.sql.expression import table

from config import database, metadata

class Schedule(ormar.Model):
    class Meta:
        metadata = metadata
        database = database
        tablename = "agendas"

    id: int = ormar.Integer(primary_key = True)
    data: str = ormar.String(max_length=50)
    inicio: str = ormar.String(max_length=50)
    termino: str = ormar.String(max_length=50)
    aula: str = ormar.String(max_length=200)
    instrutor: str = ormar.String(max_length=100)
    curso: str = ormar.String(max_length=100)
    turma: str = ormar.String(max_length=100)
    sala: str = ormar.String(max_length=100)
    cor: str = ormar.String(max_length=50)
