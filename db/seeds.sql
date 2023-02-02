INSERT INTO departments (name)
VALUES  ("Sales"),
        ("Engineering"),
        ("Finance"),
        ("Legal");

INSERT INTO roles (title, salary, department_id)
VALUES  ("Sales Manager", 127000, 1),
        ("Salesperson", 80000, 1),
        ("Lead Engineer", 150000, 2),
        ("Software Engineer", 120000, 2),
        ("Account Manager", 160000, 3),
        ("Accountant", 125000, 3),
        ("Legal Team Lead", 250000, 4),
        ("Lawyer", 190000, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES  ("Mia", "Poure", 1, null),
        ("Beck", "Hurtz", 2, 1),
        ("Zoe", "Bahd", 3, null),
        ("Ima", "Begen", 4, 3),
        ("Fluer", "Anu", 5, null),
        ("Chare", "Ahnda", 6, 5),
        ("Mesia", "Je-ha", 7, null),
        ("Vemer", "Cy", 8, 7);