import React from 'react';

export default function SpreadOperator() {
    
    var student = {
        name: 'Om',
        branch: 'CSE'
    };

    var updatedStudent = { ...student, rollNo: 18, name: 'atharva' };
   
   
    return (
        <div >
            
            <h1>Initial Student values</h1>

            <h2>Student name: {student.name}</h2>
            <h2>Student branch: {student.branch}</h2>

            <h1>Updated Student values</h1>
            <h2>Student name: {updatedStudent.name}</h2>
            <h2>Student rollNo: {updatedStudent.rollNo}</h2>
            <h2>Student branch: {updatedStudent.branch}</h2>

        </div>
    );
}
