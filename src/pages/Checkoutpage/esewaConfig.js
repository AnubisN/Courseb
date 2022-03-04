export default function post(amt,tAmt,pid,su) {
    let path="https://uat.esewa.com.np/epay/main";
    let params= {
        amt: amt,
        psc: 0,
        pdc: 0,
        txAmt: 0,
        tAmt: tAmt,
        pid: pid,
        scd: "EPAYTEST",
        su: su,
        fu: "http://merchant.com.np/page/esewa_payment_failed"
    }
    var form = document.createElement("form");
    form.setAttribute("method", "POST");
    form.setAttribute("action", path);

    for(var key in params) {
        var hiddenField = document.createElement("input");
        hiddenField.setAttribute("type", "hidden");
        hiddenField.setAttribute("name", key);
        hiddenField.setAttribute("value", params[key]);
        form.appendChild(hiddenField);
    }

    document.body.appendChild(form);
    form.submit();
}