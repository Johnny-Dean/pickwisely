from fastapi import FastAPI

from .db_connector import DatabaseConnection

app = FastAPI()
db_connector = DatabaseConnection(
    connection_string='postgresql://postgres:123@postgres_db:5432/pickwisely_dev'
    )

@app.get("/")
async def root():
    all_users = db_connector.execute_dummy_query()
    return all_users