import React from 'react';
import Habit from './habit.jsx';
import HabitAddForm from './habitAddForm';

const Habits = ({
  onAdd,
  habits,
  onIncrement,
  onDecrement,
  onDelete,
  onReset,
}) => (
  <>
    <HabitAddForm onAdd={onAdd} />
    <ul>
      {habits.map((habit) => (
        <Habit
          key={habit.id}
          habit={habit}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onDelete={onDelete}
        />
      ))}
    </ul>
    <button className='habits-reset' onClick={onReset}>
      Reset All
    </button>
  </>
);

export default Habits;
