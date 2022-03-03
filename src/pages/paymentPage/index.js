import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'

function PaymentPage() {
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin;
    const [amtParam, setAmtParam] = useSearchParams()
    const [pidParam, setpidParam] = useSearchParams()
    const [rid, setRid] = useSearchParams()
    const scd = "EPAYTEST"
    const url = "https://uat.esewa.com.np/epay/main"

    useEffect(() => {
        var path="https://uat.esewa.com.np/epay/transrec";
        var params= {
            amt: amtParam.get("amt"),
            rid: rid.get("refId"),
            pid: pidParam.get("oid"),
            scd: "EPAYTEST"
        }

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const res = axios.post('api/esewaPaymentSuccess/',params, config)
    },[])
        
    return (
        <div>PaymentPage</div>
    )
}

export default PaymentPage