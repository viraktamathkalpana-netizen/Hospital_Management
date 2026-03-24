import os
from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy import create_engine, Column, String, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session
from pydantic import BaseModel
from datetime import datetime
import uuid
from dotenv import load_dotenv

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

class UserProfile(Base):
    __tablename__ = "user_profiles"
    id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    username = Column(String, unique=True, index=True)
    email = Column(String, unique=True, index=True)
    password_hash = Column(String)
    role = Column(String)
    phone_number = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow)

app = FastAPI(title="Hospital Management API")

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

class UserCreate(BaseModel):
    username: str
    email: str
    password: str
    role: str
    phone_number: str = None

@app.get("/")
def read_root():
    return {"message": "Welcome to Hospital Management API"}

@app.post("/users/")
def create_user(user: UserCreate, db: Session = Depends(get_db)):
    db_user = UserProfile(
        username=user.username,
        email=user.email,
        password_hash=user.password, # In a real app, use hashing!
        role=user.role,
        phone_number=user.phone_number
    )
    db.add(db_user)
    try:
        db.commit()
        db.refresh(db_user)
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=400, detail=str(e))
    return db_user

@app.get("/users/{username}")
def read_user(username: str, db: Session = Depends(get_db)):
    user = db.query(UserProfile).filter(UserProfile.username == username).first()
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return user
