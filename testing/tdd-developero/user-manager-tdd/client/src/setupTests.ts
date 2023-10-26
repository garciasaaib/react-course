// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

import { queryClient } from './mocks/render-width-providers';
import {server} from './mocks/server'

// clean query cache, to make the request independent
// its important just to clean it before each test, and not after
beforeEach(() => { queryClient.clear() })

// listen to the server mocked
beforeAll(() => server.listen())

afterEach(() => server.resetHandlers())

afterAll(() => server.close())