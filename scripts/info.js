function info(){
    document.getElementById("petsalon-info").innerHTML=`
    <p>Welcome to ${petSalon.name}</p>
    <p>Located at ${petSalon.address.street} ${petSalon.address.zip}</p>
    <p>Phone:${petSalon.address.number}</p>
    `;
}
function initInfo(){
    info();
}
window.onload=initInfo;