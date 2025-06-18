import React from 'react';

const StudentTable = ({ students }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Student ID</th>
                    <th>Name</th>
                    <th>Grade</th>
                    <th>Progress</th>
                </tr>
            </thead>
            <tbody>
                {students && students.length > 0 ? (
                    students.map((student) => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.grade}</td>
                            <td>{student.progress}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="4">No students found.</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default StudentTable;