import React, { useEffect, useState } from 'react';

const StudentProfile = () => {
    const [student, setStudent] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Replace with actual API call
        const fetchStudent = async () => {
            setLoading(true);
            try {
                // Example: fetch('/api/student/123')
                const response = await fetch('/api/student/profile');
                const data = await response.json();
                setStudent(data);
            } catch (error) {
                setStudent(null);
            }
            setLoading(false);
        };

        fetchStudent();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (!student) return <div>Student profile not found.</div>;

    return (
        <div className="student-profile">
            <h2>Student Profile</h2>
            <div>
                <strong>Name:</strong> {student.name}
            </div>
            <div>
                <strong>Email:</strong> {student.email}
            </div>
            <div>
                <strong>Enrollment Number:</strong> {student.enrollmentNumber}
            </div>
            <div>
                <strong>Course:</strong> {student.course}
            </div>
            {/* Add more fields as needed */}
        </div>
    );
};

export default StudentProfile;