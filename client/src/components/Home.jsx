import storeImg from "../assets/images/store-img.jpg";
import { motion } from 'framer-motion';
import axios from "axios";
import { useContext, useEffect } from "react";
import UseContext from "../context/UseContext";
const Home = () => {
    const { setSelectedRole } = useContext(UseContext)
    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.get('http://localhost:6003/auth/verify')
            .then(res => {
                if (res.data.login) {
                    setSelectedRole(res.data.role)
                }
                else {
                    setSelectedRole('')
                }
            })
    })
    return (
        <div className="d-flex justify-content-between calc-height align-items-center home-page">
            <motion.div
                initial={{ opacity: 0.5, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="home-left">
                <div className="home-title">Book Shop</div>
                <div className="desc mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur veritatis odit porro illo laboriosam, accusantium doloribus sapiente possimus excepturi quibusdam harum vero fugit suscipit sed mollitia iste, at magni est?</div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0.5, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
                className="home-right">
                <img src={storeImg} alt="store-img" />
            </motion.div>
        </div >
    )
}

export default Home