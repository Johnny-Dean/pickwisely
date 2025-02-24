from fastapi import FastAPI
from routes.stories import router as stories_router
from routes.users import router as users_router

app = FastAPI()
app.include_router(users_router)
app.include_router(stories_router)

@app.get("/")
async def root():
    return {"message": "Hello World"}