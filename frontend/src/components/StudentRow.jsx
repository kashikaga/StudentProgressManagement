import React from 'react';

const StudentRow = ({ student, onEdit, onDelete }) => {
    return (
        <tr>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.grade}</td>
            <td>{student.status}</td>
            <td>
                <button onClick={() => onEdit(student)}>Edit</button>
                <button onClick={() => onDelete(student.id)}>Delete</button>
            </td>
        </tr>
    );
};

export default StudentRow;