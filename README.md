# Job Board API

This is a basic API for managing job postings. It supports CRUD operations for job data such as creating, retrieving, updating, and deleting job listings. The API is backed by a MySQL database.

## Features

- **Basic CRUD for Job Postings**
    - `POST /jobs`: Create a new job posting.
    - `GET /jobs`: Retrieve all job postings.
    - `GET /jobs/:id`: Retrieve a single job posting by its ID.
    - `PUT /jobs/:id`: Update a job posting by its ID.
    - `DELETE /jobs/:id`: Delete a job posting by its ID.

- **Database**: MySQL for storing job data.

## Setup

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/my-backend-project.git
    ```

2. **Install dependencies**:
    Navigate to the project directory and run:
    ```bash
    npm install
    ```

3. **Create a `.env` file**:
    Create a `.env` file in the root of your project and add the following environment variables:
    ```env
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=yourpassword
    DB_NAME=job_board
    PORT=5000
    ```

4. **Set up the MySQL database**:
    - Create a MySQL database `job_board` and set up a schema for the job postings.
    
    Here is a simple schema for the `jobs` table:
    
    ```sql
    CREATE DATABASE job_board;

    USE job_board;

    CREATE TABLE jobs (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        company VARCHAR(255) NOT NULL,
        location VARCHAR(255) NOT NULL,
        salary DECIMAL(10, 2) NOT NULL,
        description TEXT NOT NULL
    );
    ```

5. **Run the application**:
    After setting up the database, you can start your application with:
    ```bash
    npm start
    ```

    The application will be running on `http://localhost:5000`.

## Endpoints

### 1. **Create a Job Posting**

- **Endpoint**: `POST /jobs`
- **Description**: Create a new job posting.
- **Request body**:
    ```json
    {
        "title": "Software Engineer",
        "company": "Tech Co",
        "location": "New York, NY",
        "salary": 120000,
        "description": "We are looking for a talented software engineer."
    }
    ```
- **Response**:
    - **Success**: 
        ```json
        {
            "id": 1,
            "title": "Software Engineer",
            "company": "Tech Co",
            "location": "New York, NY",
            "salary": 120000,
            "description": "We are looking for a talented software engineer."
        }
        ```

### 2. **Retrieve All Job Postings**

- **Endpoint**: `GET /jobs`
- **Description**: Retrieve all job postings.
- **Response**:
    ```json
    [
        {
            "id": 1,
            "title": "Software Engineer",
            "company": "Tech Co",
            "location": "New York, NY",
            "salary": 120000,
            "description": "We are looking for a talented software engineer."
        },
        {
            "id": 2,
            "title": "Product Manager",
            "company": "Product Inc.",
            "location": "San Francisco, CA",
            "salary": 130000,
            "description": "We are looking for a product manager."
        }
    ]
    ```

### 3. **Retrieve a Single Job Posting by ID**

- **Endpoint**: `GET /jobs/:id`
- **Description**: Retrieve a job posting by its ID.
- **Response**:
    ```json
    {
        "id": 1,
        "title": "Software Engineer",
        "company": "Tech Co",
        "location": "New York, NY",
        "salary": 120000,
        "description": "We are looking for a talented software engineer."
    }
    ```

### 4. **Update a Job Posting by ID**

- **Endpoint**: `PUT /jobs/:id`
- **Description**: Update a job posting by its ID.
- **Request body**:
    ```json
    {
        "title": "Senior Software Engineer",
        "company": "Tech Co",
        "location": "New York, NY",
        "salary": 140000,
        "description": "We are looking for a senior software engineer."
    }
    ```
- **Response**:
    ```json
    {
        "id": 1,
        "title": "Senior Software Engineer",
        "company": "Tech Co",
        "location": "New York, NY",
        "salary": 140000,
        "description": "We are looking for a senior software engineer."
    }
    ```

### 5. **Delete a Job Posting by ID**

- **Endpoint**: `DELETE /jobs/:id`
- **Description**: Delete a job posting by its ID.
- **Response**:
    - **Success**:
        ```json
        {
            "message": "Job posting deleted successfully"
        }
        ```

## MySQL Database Schema

The following is a simple schema for the `jobs` table:

```sql
CREATE TABLE jobs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    company VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    salary DECIMAL(10, 2) NOT NULL,
    description TEXT NOT NULL
);
