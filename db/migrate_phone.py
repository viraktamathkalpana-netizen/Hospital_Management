import psycopg2
import sys

DATABASE_URL = "postgresql://neondb_owner:npg_Rp0Sd2olYUui@ep-dawn-queen-amsi1h9g-pooler.c-5.us-east-1.aws.neon.tech/neondb?sslmode=require"

def migrate():
    try:
        conn = psycopg2.connect(DATABASE_URL)
        cur = conn.cursor()
        
        # Add phone_number column if it doesn't exist
        cur.execute("ALTER TABLE user_profiles ADD COLUMN IF NOT EXISTS phone_number VARCHAR(20);")
        conn.commit()
        print("Migration: Added phone_number column successfully.")
            
        cur.close()
        conn.close()
    except Exception as e:
        print(f"Error during migration: {e}")
        sys.exit(1)

if __name__ == "__main__":
    migrate()
