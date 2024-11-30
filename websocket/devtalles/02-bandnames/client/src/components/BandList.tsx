import { ChangeEvent, useContext, useEffect, useState } from "react";
import { SocketContext } from "../context/SocketContext";

interface Band {
	id: string;
	name: string;
	votes: number;
}


export const BandList = () => {
  const { socket } = useContext(SocketContext);

	const [bands, setBands] = useState<Band[]>([]);

		useEffect(() => {
		socket.on("current-bands", (bands) => {
			setBands(bands);
		});
	}, [socket]);

		const votar = (id: string) => {
		socket.emit("votar-banda", id);
	};

  const borrar = (id: string) => {
    socket.emit("borrar-banda", id);
  }

  const cambiarNombre = (id: string, nombre: string) => {
    socket.emit("cambiar-nombre-banda", {id, nombre});
  }


	const changeName = (event: ChangeEvent<HTMLInputElement>, id: string) => {
		const newName = event.target.value;
		setBands((bands) =>
			bands.map((band) => {
				if (band.id === id) {
					band.name = newName;
				}
				return band;
			})
		);
	};

	const perdioFoco = (event: ChangeEvent<HTMLInputElement>, id: string) => {
		console.log("perdio el foco");
		const newName = event.target.value;

		cambiarNombre(id, newName);

	};

	const createRows = () => {
		return bands.map((band) => (
			<tr key={band.id}>
				<td>
					<button
						className="btn btn-primary"
						onClick={() => {
							votar(band.id);
						}}
					>
						+1
					</button>
				</td>
				<td>
					<input
						type="text"
						className="form-control"
						value={band.name ?? ""}
						onChange={(event) => changeName(event, band.id)}
						onBlur={(event) => perdioFoco(event, band.id)}
					/>
				</td>
				<td>
					<h3>{band.votes}</h3>{" "}
				</td>
				<td>
					<button
						className="btn btn-danger"
						onClick={() => {
							borrar(band.id);
						}}
					>
						Borrar
					</button>
				</td>
			</tr>
		));
	};
	return (
		<div>
			<table className="table table-stripped">
				<thead>
					<tr>
						<th></th>
						<th>Nombre</th>
						<th>Votos</th>
						<th>Borrar</th>
					</tr>
				</thead>
				<tbody>{createRows()}</tbody>
			</table>
		</div>
	);
};
