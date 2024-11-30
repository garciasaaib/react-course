import { createContext, ReactNode } from "react";
import { useSocket } from "../hooks/useSocket";
import { Socket } from 'socket.io-client';
// Define la interfaz para el contexto
interface SocketContextProps {
	socket: Socket; // Puedes reemplazar 'any' con el tipo específico de tu socket si lo conoces
	online: boolean;
}
export const SocketContext = createContext<SocketContextProps>({
	socket: {} as Socket,
	online: false,
});

export const SocketProvider = ({ children }: { children: ReactNode }) => {
	const { socket, online } = useSocket("http://localhost:3001");
	return (
		<SocketContext.Provider value={{ socket, online }}>
			{children}
		</SocketContext.Provider>
	);
};
