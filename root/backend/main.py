from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware # TODO: Toggle when prod
from routes.stories import router as stories_router
from routes.users import router as users_router

app = FastAPI()
app.include_router(users_router)
app.include_router(stories_router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



@app.get("/")
async def root():
    return {"message": "Hello World"}