import React from 'react'
import PropTypes from 'prop-types'
export default function Student({ student, handleDelete, handleStartUpdate }) {
    return (
        <li className='list-group-item'>
            <span className='me-3'>
                {student.name}: {student.age}
            </span>
            <div className='btn-group'>
                <button type='button' className='btn btn-info' onClick={() => handleStartUpdate(student.id)}>
                    Sửa
                </button>
                <button type='button' className='btn btn-danger' onClick={() => handleDelete(student.id)}>
                    Xóa
                </button>
            </div>
        </li>
    )
}
Student.prototype = {
    student: PropTypes.object.isRequired,
    handleDelete: PropTypes.func.isRequired
}
