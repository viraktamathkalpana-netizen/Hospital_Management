import psycopg2
import sys

DATABASE_URL = "postgresql://neondb_owner:npg_Rp0Sd2olYUui@ep-dawn-queen-amsi1h9g-pooler.c-5.us-east-1.aws.neon.tech/neondb?sslmode=require"

def apply_schema():
    try:
        conn = psycopg2.connect(DATABASE_URL)
        cur = conn.cursor()
        
        with open('schema.sql', 'r') as f:
            schema_sql = f.read()
            cur.execute(schema_sql)
            conn.commit()
            print("Schema applied successfully.")
            
        cur.close()
        conn.close()
    except Exception as e:
        print(f"Error applying schema: {e}")
        sys.exit(1)

if __name__ == "__main__":
    apply_schema()
