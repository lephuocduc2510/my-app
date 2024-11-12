import {  Fragment } from 'react/jsx-runtime';
import success from '../../image/verifySucess.webp'
import styles from './style.module.css'
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { isConstructorDeclaration } from 'typescript';


const  EmailVerify = () =>{

    const [validUrl, setValidUrl] = useState(false);
    const param = useParams();


    useEffect(() => {
        const verifyEmail = async () => {
            try
            {
                const url = `http://localhost:9000/auth/verify-email/${param.userId}/${param.unique_string}`;
                console.log(param)
                const data = await axios.get(url);
                console.log(data)
                setValidUrl(true)

            }
            catch (error) {
                console.log(error)
            }
        }
        verifyEmail()
    }
    ,[param])


    return (
        <Fragment>
            {validUrl ? (
                <div className={styles.container}>
                    <img src={success} alt="success_img" className={styles.success}/>
                    <h1> Email verified sucessfully</h1>
                    <Link  to="/login" >
                
                        <button className={styles.green_btn}>Login</button>
                        </Link>
                </div>
            ): (

                <h1>404 NOt Found</h1>
            )}

        </Fragment>
    )

}

export default EmailVerify;