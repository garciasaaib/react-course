// react query mock
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render } from "@testing-library/react";
import React from "react";

const queryClient = new QueryClient();

export const renderWithProviders = (ui: React.ReactNode) =>
	render(<QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>);
