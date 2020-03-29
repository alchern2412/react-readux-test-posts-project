import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {hideAlert} from "../redux/actions";

export const Alert = () => {
    const dispatch = useDispatch()
    const alert = useSelector(state => state.app.alert)

    if (alert.status === 'show') {
        return (
            // <div className={`alert alert-${alert.type}`} role="alert">
            //     {alert.message}
            // </div>
            <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
                <strong>{alert.type}!</strong> {alert.message}
                <button onClick={() => dispatch(hideAlert())} type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        )
    }

    return <></>
}