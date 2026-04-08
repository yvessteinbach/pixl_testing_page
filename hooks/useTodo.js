import { useState } from 'react'

export const useTodo = () => {
	const initialState = [
		{
			id: 'vnode',
			text: 'TEST TODO',
			completed: false,
		},
		{
			id: 'vnode2',
			text: 'TEST HALLo Preview Test',
			completed: false,
		},
	]
	const [todos, setTodos] = useState(initialState)

	const addTodo = (text) => {
		const todo = {
			id: Math.random().toString(36).substring(2),
			text,
			completed: false,
		}
		setTodos([...todos, todo])
	}

	const removeTodo = (todo) => {
		const filteredTodos = todos.filter((v) => v !== todo)
		setTodos(filteredTodos)
	}

	const updateTodo = (todo) => {
		const updatedTodos = todos.map((v) => (v.id === todo.id ? todo : v))
		setTodos(updatedTodos)
	}

	const completedTodos = todos.filter((todo) => todo.completed)

	return {
		todos,
		addTodo,
		removeTodo,
		updateTodo,
		completedTodos,
	}
}
