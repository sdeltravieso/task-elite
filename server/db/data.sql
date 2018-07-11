USE kzaiyjt83y6fckn2;

SET FOREIGN_KEY_CHECKS = 0;

-- INSERT INTO owners (owner) 
-- 	VALUES
--     (1);

INSERT INTO users (fullname, username, email, password)
	VALUES
    ('Josh Rowden', 'jkrowden', 'jkrowden@gmail.com', 'apassword'),
    ('Spencer Daniels', 'speencah', 'speencah@gmail.com', 'apassword'),
    ('Andrew Johnson', 'mrandrewson', 'andrewson@gmail.com', 'apassword');

INSERT INTO projects (project_name, description, owner_id)
VALUES
	('Project Undefined', 'First Project', 1),
    ('Project 2', 'Second Project', 2);
    
        
INSERT INTO departments (departmentName, description, project_id)
	VALUES
    ('Dept 1', 'Department1', 1),
    ('Dept2', 'Department 2ownersowners', 1);
    
    
INSERT INTO tasks (taskName, description, completed, department_id, assigned_user) 
	VALUES
    ('Task1', 'Do a thing', false, 1, 1),
	('Task2', 'Do another thing', false, 1, 1),
	('Task3', 'Do a thing', true, 1, 1),
    ('Task4', 'Do a thing', true, 1, 1),
    ('Task5', 'Do a thing', false, 1, 1),
    ('Task6', 'Do a thing', false, 1, 1);


SET FOREIGN_KEY_CHECKS = 1;