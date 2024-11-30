import { useContext } from "react";
import { BandAdd } from "../components/BandAdd";
import { BandList } from "../components/BandList";
import { SocketContext } from "../context/SocketContext";
import { BandChart } from "../components/BandChart";

function HomePage() {
 const { online } = useContext(SocketContext);
  // const {socket, online} = useSocket("http://localhost:3001");
	// const [bands, setBands] = useState([]);

	// useEffect(() => {
	// 	socket.on("current-bands", (bands) => {
	// 		setBands(bands);
	// 	});
	// }, [socket]);

	// const votar = (id: string) => {
	// 	socket.emit("votar-banda", id);
	// };

  // const borrar = (id: string) => {
  //   socket.emit("borrar-banda", id);
  // }

  // const cambiarNombre = (id: string, nombre: string) => {
  //   socket.emit("cambiar-nombre-banda", {id, nombre});
  // }

  // const crearBanda = (nombre: string) => {
  //   socket.emit("nueva-banda", {nombre});
  // }

	return (
		<>
			<div className="container">
				<div>
					<p>
						Service Status:
						{online ? (
							<span className="text-success"> Online</span>
						) : (
							<span className="text-danger"> Offline</span>
						)}
					</p>
				</div>

				<h1>BandNames</h1>
				<hr />
				<div className="row">
					<div className="col">
						<BandChart />
					</div>
				</div>
				<div className="row">
					<div className="col-8">
						{/* <BandList data={bands} votar={votar} borrar={borrar} cambiarNombre={cambiarNombre}/> */}
						<BandList />
					</div>

					<div className="col-4">
						{/* <BandAdd crearBanda={crearBanda}/> */}
						<BandAdd />
					</div>
				</div>
			</div>
		</>
	);
}

export default HomePage;
