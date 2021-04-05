import React from "react";
function Footer(){
    let d = new Date();
    let y = d.getFullYear();
    return <footer><p>
       copyright &copy; Rajat {y}
    </p>
    </footer>
}
export default Footer;