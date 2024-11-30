import { useContext, useState } from "react";
import { SocketContext } from "../context/SocketContext";

export const BandAdd = () => {
	const [name, setName] = useState("");
  const { socket } = useContext(SocketContext);
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
    // console.log(event.target.value);
		// const formData = new FormData(event.target);
		// const name = formData.get("name");÷
		if (name && typeof name === 'string' && name.trim().length > 0) {
			// crearBanda(name);
      socket.emit?.("nueva-banda", {nombre: name});
      setName("");
		}
	};
	return (
		<div>
			<h3>Agregar Banda</h3>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					className="form-control"
					placeholder="Band Name"
					value={name}
					onChange={(ev) => setName(ev.target.value)}
				/>
        <button className="btn btn-info" type="submit">Add</button>
			</form>
		</div>
	);
};
