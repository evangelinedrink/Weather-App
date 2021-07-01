import React from "react";

//This component will ask the user to place the names of the city and country they want to get the temperature of.
const Form= props => {
    return(
        <div className="container">
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
        </div>
    );
}

//Exporting the Form component
export default Form;