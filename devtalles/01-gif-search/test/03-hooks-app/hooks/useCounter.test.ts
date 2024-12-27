import { act, renderHook } from '@testing-library/react';
import { useCounter } from '../../../src/03-hooks-app/hooks/useCounter';
describe("useCounter", () => {
	it("should counter be 10 by default", () => {
    const { result } = renderHook(() => useCounter());
    const { increment, counter, decrement, reset } = result.current;

    // should be initial default value = 10
    expect(counter).toBe(10);

    // should be functions
    expect(increment).toEqual(expect.any(Function));
    expect(decrement).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test("should counter be 100 if its senden as initial value", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;

    expect(counter).toBe(100);
  })

  test("should increment, decrement and reset counter", async () => {
		const { result } = renderHook(() => useCounter(1));
		const { increment, decrement, reset } = result.current;

    // el valor en tiempo real debe ser tomado desde result
		expect(result.current.counter).toBe(1);
    act(() => increment())
    expect(result.current.counter).toBe(2);
    act(() => reset())
    expect(result.current.counter).toBe(1);
    act(() => decrement())
    expect(result.current.counter).toBe(0);
	});
});
