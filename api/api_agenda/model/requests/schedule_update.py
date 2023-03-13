from typing import List, Optional
from pydantic import BaseModel

class ScheduleUpdate(BaseModel):
    data: Optional[str] = None
    inicio: Optional[str] = None
    termino: Optional[str] = None
    aula: Optional[str] = None
    instrutor: Optional[str] = None
    curso: Optional[str] = None
    turma: Optional[str] = None
    sala: Optional[str] = None
    cor: Optional[str] = None