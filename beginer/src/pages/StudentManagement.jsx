import React, { Fragment, useState } from 'react'
import Input from '../components/Input'
import Student from '../components/Student'

export default function StudentManagement() {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [students, setStudens] = useState([])
    const [curStudent, setCurStudent] = useState(null)

    const handleChange = setFunc => value => setFunc(value)
    const handleAdd = () => {
        if (name !== '' && age !== '') {
            setStudens(pre => [
                ...pre,
                {
                    id: new Date().toISOString(),
                    name,
                    age
                }
            ])
            setName('')
            setAge('')
        }
    }
    const handleDelete = id => {
        const index = students.findIndex(student => student.id === id)
        const _students = [...students]
        _students.splice(index, 1)
        setStudens(_students)
    }

    const handleStartUpdate = id => {
        const student = students.find(student => student.id === id)
        setCurStudent(student)
        setAge(student.age)
        setName(student.name)
    }

    const handleUpdate = () => {
        if (name !== '' && age !== '') {
            const _students = students.map(student => {
                if (student.id === curStudent.id)
                    return {
                        name,
                        age,
                        id: student.id
                    }
                return student
            })
            setStudens(_students)
            handleBack()
        }
    }

    const handleBack = () => {
        setName('')
        setAge('')
        setCurStudent(null)
    }

    return (
        <div>
            <h1>Quản lý sinh viên</h1>
            <form className='mb-3'>
                <div className='mb-3'>
                    <label htmlFor='name' className='form-lable'>
                        Tên:
                    </label>
                    <Input
                        type='text'
                        className='form-control'
                        placeholder='Nhập tên...'
                        value={name}
                        onChange={handleChange(setName)}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='age' className='form-lable'>
                        Tuổi:
                    </label>
                    <Input
                        type='number'
                        className='form-control'
                        placeholder='Nhập tuổi...'
                        value={age}
                        onChange={handleChange(setAge)}
                    />
                </div>
                {curStudent && (
                    <Fragment>
                        <button className='btn btn-primary' type='button' onClick={handleUpdate}>
                            Sửa
                        </button>
                        <button className='btn btn-dark' type='button' onClick={handleBack}>
                            Trở về
                        </button>
                    </Fragment>
                )}
                {!curStudent && (
                    <button className='btn btn-primary' type='button' onClick={handleAdd}>
                        Thêm
                    </button>
                )}
            </form>
            <ul className='list-group'>
                {students.map(student => (
                    <Student
                        key={student.id}
                        student={student}
                        handleDelete={handleDelete}
                        handleStartUpdate={handleStartUpdate}
                    />
                ))}
            </ul>
        </div>
    )
}
