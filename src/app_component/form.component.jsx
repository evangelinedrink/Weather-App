import React from "react";
import "./form.style.css"; //Link the form.style.css file to this Form Component

//This component will ask the user to place the names of the city and country they want to get the temperature of.
const Form= props => {
    return(
        <div className="container">
            {/*Determining if the Error() function will show up. If user types in the City and Country and hits the "Get Weather" button, then there will not be an error.  Otherwise, an error will occur. */}
            <div>
                if({props.error}) {
                    error() //If there is an error, the error function will start running
                } else {
                    null //No error will show up if the user types in the city and country to get the weather from.
                }
            </div>

            {/*{props.loadweather} is an event handler */}
            <form onSubmit={props.loadweather}> {/*onSubmit is an event that will take what the user typed in for City and Country and then use this input to search for the weather in that location by changing the api_call constant located in App.js file */}
                <div className="row">
                    <div className="col-md-3 offset-md-2">
                        <input type="text" className="form-control" name="city" placeholder="City" autoComplete="off"/>
                    </div>
                    <div className="col-md-3">
                    <input type="text" className="form-control" name="country" placeholder="Country" autoComplete="off"/>
                    </div>
                    <div className="col-md-3 mt-md-0 text-md-left">
                        <button className="btn btn-warning">Get Weather</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

//Creating the Error function if the user doesn't type in the City and Country to get the weather from when they click on the "Get Weather" button
function error(){
    return (
        <div className= "alert alert-danger mx-5" role="alert"> {/*mx corresponds to left and right margin */}
            Please Enter the City and Country.
        </div>
    )
}
//Exporting the Form component
export default Form;