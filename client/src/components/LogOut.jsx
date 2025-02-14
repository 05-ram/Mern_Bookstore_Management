import { useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UseContext from "../context/UseContext";

const LogOut = () => {
    const navigate = useNavigate();
    const { setSelectedRole } = useContext(UseContext)
    return (
        useEffect(() => {
            axios.get('http://localhost:6003/auth/logout')
                .then(res => {
                    if (res.data.logout) {
                        navigate('/')
                        setSelectedRole('')
                    }
                })
        })
    )
}

export default LogOut;