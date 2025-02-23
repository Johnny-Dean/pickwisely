from sqlalchemy import create_engine
from sqlalchemy.engine.url import URL
from sqlalchemy.orm import Session, sessionmaker

# See: https://shorturl.at/n242C # TODO: Fun side project - StackOverflow URL shortener
db_url = URL.create(
     drivername="postgresql",
     username="postgres",
     password="123",
     host="postgres_db",
     database="pickwisely_dev",
     port=5432
 )

engine = create_engine(db_url)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# See: https://fastapi.tiangolo.com/tutorial/dependencies/dependencies-with-yield/
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()