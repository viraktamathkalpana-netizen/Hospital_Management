---
description: Set up FastAPI Backend deployment for Render
---
## FastAPI Backend Setup Steps

This workflow outlines setting up the FastAPI REST backend intended for a Render deployment.

1. **Navigate:** Change directory into the `backend` folder.
2. **Virtual Environment:** 
   Initialize virtual environment.
   ```bash
   python -m venv venv
   venv\Scripts\activate
   ```
3. **Install Dependencies:**
   ```bash
   pip install fastapi uvicorn sqlalchemy psycopg2 pydantic python-dotenv
   ```
4. **Scaffolding:** Create the initial `main.py` entrypoint.
5. **Run Locally:** Run `uvicorn main:app --reload` to test endpoints.
6. **Requirements File:** Generate `requirements.txt` for Render.
7. **Render Configuration:** Expose standard 0.0.0.0 hostname and target Render's expected port variables for deployment.
