import { useEffect, useMemo, useState } from "react";
import io from "socket.io-client";

export const useSocket = (serverPath: string) => {
	// use memo aqui va a mantener la misma conexion al server path
	// mientras este se mantenga igual

	const socket = useMemo(
		() => io("http://localhost:3001", {
      transports: ["websocket"],
    }),
		[serverPath]
	);
	const [online, setOnline] = useState(true);

	useEffect(() => {
		setOnline(socket.connected);
	}, [socket]);

	useEffect(() => {
		socket.on("connect", () => {
			setOnline(true);
		});
	}, [socket]);

	useEffect(() => {
		socket.on("disconnect", () => {
			setOnline(false);
		});
	}, [socket]);


	return {
		socket,
    online,
	};
};
