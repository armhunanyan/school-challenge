# School Challenge
## API

Database
| Method | Endpoint  | Description | 
| ------ | ------  | ------ |
| GET | /database/seed | Seed database

Statistics
| Method | Endpoint  | Description | 
| ------ | ------  | ------ |
| GET | / | Get statistical data about school

Students

| Method | Endpoint | Params | Description | 
| ------ | ------ | ------ | ------ |
| GET | /students | | Get list of students
| GET | /students/{id} |  | Get student by id
| POST | /students/store | name:STRING, class_id:INTEGER, subjects:ARRAY | Create student
| PUT | /students/{id} | name:STRING, class_id:INTEGER, subjects:ARRAY | Update  student by id
| DELETE | /students/{id} | | Delete student by id
 
 Grades
| Method | Endpoint | Params | Description | 
| ------ | ------ | ------ | ------ |
| GET | /grades | | Get list of grades
| GET | /grades/{id} |  | Get grade by id
| POST | /grades/store | grade:INTEGER, teacher_id,student_id,subject_id:INTEGER | Create grade
| PUT | /grades/{id} | grade:INTEGER, teacher_id,student_id,subject_id:INTEGER | Update grade by id
| DELETE | /grades/{id} | | Delete grade by id