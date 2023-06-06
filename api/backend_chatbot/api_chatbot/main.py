from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from rotas import router
import uvicorn

app2 = FastAPI()

origins = [
    "*"
]

app2.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app2.get("/")
def get_root():
    return{"mensagem":"waiting for questions.."}

app2.include_router(router, prefix="")

if __name__ == "__main__":
    uvicorn.run("main:app2", port=7000, log_level="info")