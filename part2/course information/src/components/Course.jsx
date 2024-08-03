import React from 'react';
import Header from './Header';

const Content = ({ parts }) => {
    return parts.map((part) => <Part key={part.id} part={part} />);
};

const Part = ({ part }) => (
    <div>
        {part.name} {part.exercises}
    </div>
);

const Total = ({ parts }) => {
    const totalExercises = parts.reduce(
        (accum, current) => {
            return accum + current.exercises
        }, 0
    );

    console.log(totalExercises);

    return <h3>Total of {totalExercises} exercises</h3>;
};

const Course = ({ course }) => {
    return (
        <>
            <Header text={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </>
    );
};

export default Course;