# PickWisely

PickWisely is a daily interactive story game where players compete to make it as far as possible through branching narratives, with a new adventure starting each day.

## Folder Structure
```
.
└── root/
    ├── backend/
    ├── database/
    │   └── {db_migrations}.sql
    ├── frontend/
    └── docker-compose.yaml
```

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* Install `uv` package manager:
```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

### Running the Application

The entire application stack can be started with a single command:

```bash
docker-compose up -d
```

## Built With

### Front End
* [React](https://react.dev/) - Web framework
* [Next.js](https://nextjs.org/) - React framework

### Backend
* [FastAPI](https://fastapi.tiangolo.com/) - Python web framework
* [UV](https://github.com/astral-sh/uv) - Python package installer and resolver

### Database 
* PostgreSQL - Relational database