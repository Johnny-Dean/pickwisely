from sqlalchemy import create_engine, select
from sqlalchemy.orm import Session

from .models.models import Users


class DatabaseConnection:
    """Test DatabaseConnection object."""
    def __init__(self, connection_string: str = None):
        self._engine = create_engine(connection_string)
        self.session = Session(self._engine)

    def execute_dummy_query(self):
        """Test connection to database."""
        query = select(Users)
        result = []
        for user in self.session.scalars(query):
            print(user.username)
            result.append(user.username)

        return result