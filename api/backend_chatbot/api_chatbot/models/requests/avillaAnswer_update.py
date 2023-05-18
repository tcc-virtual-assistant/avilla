from typing import List, Optional
from pydantic import BaseModel, Field

class avillaAnswerUpdate(BaseModel):
    userQuestion: Optional[str] = Field(max_length=500)
    avillaAnswer: Optional[str] = Field(max_length=500)