import bootstrap from 'bootstrap';
import React from 'react';
const NavbarStyle={backgroundColor:'white',boxShadow:'10px 5px 5px gray',height:'60px'};
const btnstyleAcceuil={backgroundColor:'#FFDAE5',Color:'white',border:'none',font_weight:'bold',width:'60px',marginLeft:'20px'};
const secondbuttonstyle={...btnstyleAcceuil,backgroundColor:'#009dff',marginLeft:'1000px',marginRight:'-150px',marginTop:'15px'};
function CustomNavbar(){
    const user="Racha Ghariani";
    const tablename=user.split(' ');
    const onec=tablename[0][0];
    const secondcar=tablename[1][0];
    return(
<div style={NavbarStyle}>
    <button style={btnstyleAcceuil}>Acceuil</button>
    <button style={secondbuttonstyle}>{`${onec} ${secondcar}`}</button>
</div>
    );
}
export  default CustomNavbar