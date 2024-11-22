import { ChangeEvent, useEffect, useState } from "react";
import { ComponenteDesmontable } from "./ComponenteDesmontable";

export const UseEffect = () => {
  const [state, setState] = useState({
    username: 'Adrian',
    email: 'adrian@gmail.com',
  })
  const {username, email} = state
  const onInputChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    const {value, name} = target
    setState({...state, [name]: value})
  }
  useEffect(() => {
    // body: all that this does


    // return () => {
      // clean up: cleanning for unmount component
    //}
  }, []) // dependencies: watching variables
	return (
		<>
			<h1>SimpleForm</h1>
			<hr />
			<form>
				<input onChange={onInputChange} value={username} type="text" placeholder="Username" name="username" />
				<input onChange={onInputChange} value={email} type="email" placeholder="Email" name="email" />
			</form>
      {/* El monte y desmonte se genera desde el compoonente padre */}
      { username === 'Adrian' && <ComponenteDesmontable /> }
		</>
	);
};
