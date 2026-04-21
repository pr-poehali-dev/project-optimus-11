CREATE TABLE course_registrations (
    id SERIAL PRIMARY KEY,
    course_id INTEGER NOT NULL REFERENCES courses(id),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    registered_at TIMESTAMP DEFAULT NOW()
);