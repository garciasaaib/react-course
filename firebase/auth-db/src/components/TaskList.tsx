import React from "react";
import { Button, Col, Container, Row, Stack } from "react-bootstrap";
import { Task } from "../interfaces/Tasks";
interface Props {
	arrayTareas: Task[];
}
export const TaskList = ({ arrayTareas }: Props) => {
	return (
		<Container>
			<Stack>
				{arrayTareas?.map((objetoTarea) => {
					return (
						<>
							<Row>
								<Col>{objetoTarea.description}</Col>
								<Col>
									<Button>See file</Button>
								</Col>
								<Col>
									<Button>Delete</Button>
								</Col>
							</Row>
							<hr/>
						</>
					);
				})}
			</Stack>
		</Container>
	);
};
