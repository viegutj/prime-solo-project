import {useSelector} from "react-redux"


function ConfirmWorkout() { // import the created data from the API GET
    const workout = useSelector((store) => store.create);

    return (
    <>
        <h1>Workout bb!</h1>
        <pre>workout</pre>
    </>
    )
}

export default ConfirmWorkout;
