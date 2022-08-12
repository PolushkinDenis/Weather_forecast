import React, {FC} from "react";
import './Header.css'

const Header: FC = () => {

    return (
        <div className="header">
            <div className="header-weather">Weather</div>
            <div className="header-forecast">forecast</div>
        </div>
    )
}

export default Header