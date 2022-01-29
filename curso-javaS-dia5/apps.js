const radiologia = [
    {
        hora: "11:00",
        especialista: "IGNACIO SCHULZ",
        paciente: "FRANCISCA ROJAS",
        rut: "9878782-1",
        prevision: "FONOSA",

    },
    {
        hora: "11:30",
        especialista: "FEDERICO SUBERCASEAUX",
        paciente: "PAMELA ESTRADA",
        rut: "15345241-3",
        prevision: "ISAPRE",
    },
    {
        hora: "15:00",
        especialista: "FERNANDO WURTHZ",
        paciente: "ARMANDO LUNA",
        rut: "16445345-9",
        prevision: "ISAPRE",
    },
    {
        hora: "15:30",
        especialista: "ANA MARIA GODOY",
        paciente: "MANUEL GODOY",
        rut: "17666419-0",
        prevision: "FONASA",
    },
    {
        hora: "16.00",
        especialista: "PATRICIA SUAZO",
        paciente: "RAMON ULLOA",
        rut: "14989389-K",
        prevision: "FONASA",
    },
];

const traumatologia = [
    {
        hora: "8:00",
        especialista: "MARIA PAZ ALTUZARRA",
        paciente: "PAULA SANCHEZ",
        rut: "15554774-5",
        prevision: "FONOSA",

    },
    {
        hora: "10:00",
        especialista: "RAUL ARAYA",
        paciente: "ANGÉLICA NAVAS",
        rut: "15444147-9",
        prevision: "ISAPRE",
    },
    {
        hora: "10:30",
        especialista: "MARIA ARRIAGADA",
        paciente: "ANA KLAPP",
        rut: "17879423-9",
        prevision: "ISAPRE",
    },
    {
        hora: "11:00",
        especialista: "ALEJANDRO BADILLA",
        paciente: "FELIPE MARDONES",
        rut: "1547423-6",
        prevision: "ISAPRE",
    },
    {
        hora: "11:30",
        especialista: "CECILIA BUDNIK",
        paciente: "DIEGO MARRE",
        rut: "16554741-K",
        prevision: "FONASA",
    },
    {
        hora: "12:00",
        especialista: "ARTURO CAVAGNARO",
        paciente: "CECILIA MENDEZ",
        rut: "9747535-8",
        prevision: "ISAPRE",
    },
    {
        hora: "12:30",
        especialista: "ANDRES KANACRI",
        paciente: "MARCIAL SUAZO",
        rut: "11254785-5",
        prevision: "ISAPRE",
    },

];

const dental = [
    {
        hora: "8:30",
        especialista: "ANDREA ZUÑIGA",
        paciente: "MARCELA RETAMAL",
        rut: "11123425-6",
        prevision: "ISAPRE",

    },
    {
        hora: "11:00",
        especialista: "MARIA PIA ZAÑARTU",
        paciente: "ANGEL MUÑOZ",
        rut: "9878789-2",
        prevision: "ISAPRE",
    },
    {
        hora: "11:30",
        especialista: "SCARLETT WITTING",
        paciente: "MARIO KAST",
        rut: "7998789-5",
        prevision: "FONASA",
    },
    {
        hora: "13:00",
        especialista: "FRANCISCO VON TEUBER",
        paciente: "KARIN FERNANDEZ",
        rut: "18887662-K",
        prevision: "FONASA",
    },
    {
        hora: "13:30",
        especialista: "EDUARDO VIÑUELA",
        paciente: "HUGO SANCHEZ",
        rut: "17665461-4",
        prevision: "FONASA",
    },
    {
        hora: "14:00",
        especialista: "RAQUEL VILLASECA",
        paciente: "ANA SEPULVEDA",
        rut: "14441281-0",
        prevision: "ISAPRE",
    },

];


document.write(`
<div class="container">
<h2>Tabla Radiología</h2>
<table class="table">
    <thead>
        <tr>
            <th scope="col">Paciente</th>
            <th scope="col">Previsión</th>
        </tr>
    </thead>
    <tbody>
`);
function firstAndLast(array) {

    const firstItem = array[0];
    const lastItem = array[array.length-1];
    
    const objOutput = {firstItem, lastItem};
    
    return objOutput;
    }
    
    const display1 = firstAndLast(radiologia);
    const display2 = firstAndLast(traumatologia)
    const display3 = firstAndLast(dental)
    
    console.log(display1);
    console.log(display2);
    console.log(display3);

    
    
    document.write(`
    <tr>
    <th scope="row">Primera Atención: ${display1.firstItem.paciente}</th>
    <td> - ${display1.firstItem.prevision}</td>
    
    </tr>
    <tr>
    <th scope="row">Última Atención: ${display1.lastItem.paciente}</th>
    <td> - ${display1.lastItem.prevision}</td>

    </tr>
`);


document.write(`
</tbody>
</table>
</div>
`);

document.write(`
<div class="container">
<h2>Tabla Traumatología</h2>
<table class="table">
    <thead>
        <tr>
            <th scope="col">Paciente</th>
            <th scope="col">Previsión<th>
        </tr>
    </thead>
    <tbody>
`);


    document.write(`
    <tr>
        <th scope="row">Primera Atención: ${display2.firstItem.paciente}</th>
        <td> - ${display2.firstItem.prevision}</td>
        
    </tr>
    <tr>
        <th scope="row">Última Atención: ${display2.lastItem.paciente}</th>
        <td> - ${display2.lastItem.prevision}</td>
    
    </tr>
    `);

document.write(`
</tbody>
</table>
</div>
`);

document.write(`
<div class="container">
<h2>Tabla Dental</h2>
<table class="table">
    <thead>
        <tr>
            
            <th scope="col">Paciente</th>
            
            <th scope="col">Previsión</th>
        </tr>
    </thead>
    <tbody>
`);

    document.write(`
    <tr>
    <th scope="row">Primera Atención: ${display3.firstItem.paciente}</th>
    <td> - ${display3.firstItem.prevision}</td>
    
    </tr>
    <tr>
    <th scope="row">Última Atención: ${display3.lastItem.paciente}</th>
    <td> - ${display3.lastItem.prevision}</td>

    </tr>
    `);

        
    document.write(`
    </tbody>
    </table>
    </div>
    `);


    document.write(`
    <div class="container">
    <h2>Tabla Radiología</h2>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">Hora</th>
                <th scope="col">Especialista</th>
                <th scope="col">Paciente</th>
                <th scope="col">RUT</th>
                <th scope="col">Previsión</th>
            </tr>
        </thead>
        <tbody>
    `);  
    radiologia.forEach((item) =>{
        document.write(`
        <tr>
            <th scope="row">${item.hora}</th>
            <td>${item.especialista}</td>
            <td>${item.paciente}</td>
            <td>${item.rut}</td>
            <td>${item.prevision}</td>
        </tr>
        `);
    });    
        
    document.write(`
    </tbody>
    </table>
    </div>
    `);


    document.write(`
    <div class="container">
    <h2>Tabla Traumatología</h2>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">Hora</th>
                <th scope="col">Especialista</th>
                <th scope="col">Paciente</th>
                <th scope="col">RUT</th>
                <th scope="col">Previsión</th>
            </tr>
        </thead>
        <tbody>
    `);  
    traumatologia.forEach((item) =>{
        document.write(`
        <tr>
            <th scope="row">${item.hora}</th>
            <td>${item.especialista}</td>
            <td>${item.paciente}</td>
            <td>${item.rut}</td>
            <td>${item.prevision}</td>
        </tr>
        `);
    });    
        
    document.write(`
    </tbody>
    </table>
    </div>
    `);


    document.write(`
    <div class="container">
    <h2>Tabla Dental</h2>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">Hora</th>
                <th scope="col">Especialista</th>
                <th scope="col">Paciente</th>
                <th scope="col">RUT</th>
                <th scope="col">Previsión</th>
            </tr>
        </thead>
        <tbody>
    `);  
    dental.map((item) =>{
        document.write(`
        <tr>
            <th scope="row">${item.hora}</th>
            <td>${item.especialista}</td>
            <td>${item.paciente}</td>
            <td>${item.rut}</td>
            <td>${item.prevision}</td>
        </tr>
        `);
    });    
        
    document.write(`
    </tbody>
    </table>
    </div>
    `);



