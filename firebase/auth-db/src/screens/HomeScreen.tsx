import React from "react";
import firebaseApp from "../../firebase";
import { getAuth, signOut } from "firebase/auth";
import { Button, Container } from "react-bootstrap";
import { AddTask } from "../components/AddTask";
import { TaskList } from "../components/TaskList";
import { ArrayTareas, Task } from "../interfaces/Tasks";
const auth = getAuth(firebaseApp);

export const HomeScreen = () => {
	const fakeData: Task[] = [
		{id: 1, description: 'tarea falsa 1', uri: 'http://picsum.photos/420'},
		{id: 2, description: 'tarea falsa 2', uri: 'http://picsum.photos/420'},
		{id: 3, description: 'tarea falsa 3', uri: 'http://picsum.photos/420'},
	]
	return (
		<>
			<Container>
				<div>HomeScreen</div>
				<Button onClick={() => signOut(auth)}>Logout</Button>
				<hr />
				<AddTask />
				<TaskList arrayTareas={fakeData}/>
			</Container>
		</>
	);
};
