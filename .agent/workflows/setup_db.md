---
description: Set up Neon PostgreSQL database
---
## Neon Database Setup Steps

This workflow defines the process of initializing the Postgres DB on Neon.

1. **Create the Project:** Log into the [Neon Console](https://console.neon.tech/) and create a new project called `Hospital_Management`.
2. **Setup Credentials:** Obtain the connection string from the Neon dashboard.
3. **Save Connection URL:** Create a `.env` file in the project appropriately and save the `DATABASE_URL`.
4. **Schema Initialization:** Write initial SQL scripts to create expected tables (e.g., Users, Roles, Patients, Doctors).
5. **Connect:** Ensure the backend ORM or SQL driver can query the DB successfully.
