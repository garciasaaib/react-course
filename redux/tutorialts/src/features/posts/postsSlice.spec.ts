import postsReducer, { PostsState } from "./postsSlice";

describe("posts reducer", () => {
	const initialState: PostsState[] = [
		{ id: "3", title: "First Post!", content: "Hello!" },
		{ id: "4", title: "Second Post", content: "More text" },
	];

	it("should handle initial state", () => {
    expect(postsReducer(undefined, { type: 'unknown' })).toEqual([
      { id: "1", title: "First Post!", content: "Hello!" },
      { id: "2", title: "Second Post", content: "More text" },
    ]);
  });
});
