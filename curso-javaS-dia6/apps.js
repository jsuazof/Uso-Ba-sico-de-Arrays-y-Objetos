document.write('<h1>Estadisticas centro medico ñuñoa</h1> <br>');

let radiologia = [
    {hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA'},
    {hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE'},
    {hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE'},
    {hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA'},
    {hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA'},
];

let traumatologia = [
    {hora: '8:00',  especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ',     rut: '15554774-5', prevision: 'FONASA'},
    {hora: '10:00', especialista: 'RAUL ARAYA',          paciente: 'ANGÉLICA NAVAS',    rut: '15444147-9', prevision: 'ISAPRE'},
    {hora: '10:30', especialista: 'MARIA ARRIAGADA',     paciente: 'ANA KLAPP',         rut: '17879423-9', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'ALEJANDRO BADILLA',   paciente: 'FELIPE MARDONES',   rut: '1547423-6', prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'CECILIA BUDNIK',      paciente: 'DIEGO MARRE',       rut: '16554741-K', prevision: 'FONASA'},
    {hora: '12:00', especialista: 'ARTURO CAVAGNARO',    paciente: 'CECILIA MENDEZ',    rut: '9747535-8', prevision: 'ISAPRE'},
    {hora: '12:30', especialista: 'ANDRES KANACRI',      paciente: 'MARCIAL SUAZO',     rut: '11254785-5', prevision: 'ISAPRE'},
];

let dental = [
    {hora: '8:30',  especialista: 'ANDREA ZUÑIGA',          paciente: 'MARCELA RETAMAL',rut: '11123425-6', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'MARIA PIA ZAÑARTU',      paciente: 'ANGEL MUÑOZ',    rut: '9878789-2',  prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'SCARLETT WITTING',       paciente: 'MARIO KAST',     rut: '7998789-5',  prevision: 'FONASA'},
    {hora: '13:00', especialista: 'FRANCISCO VON TEUBER',   paciente: 'KARIN FERNANDEZ',rut: '18887662-K', prevision: 'FONASA'},
    {hora: '13:30', especialista: 'EDUARDO VIÑUELA',        paciente: 'HUGO SANCHEZ',   rut: '17665461-4', prevision: 'FONASA'},
    {hora: '14:00', especialista: 'RAQUEL VILLASECA',       paciente: 'ANA SEPULVEDA',  rut: '14441281-0', prevision: 'ISAPRE'},
];

//Agregar código para el desafio 2 aquí

traumatologia.push(
    {hora: '9:00',  especialista: 'RENÉ POBLETE',        paciente: 'ANA GELLONA',       rut: '13123329-7', prevision: 'ISAPRE'},
    {hora: '9:30',  especialista: 'MARIA SOLAR',         paciente: 'RAMIRO ANDRADE',    rut: '12221451-K', prevision: 'FONASA'},
    {hora: '10:00', especialista: 'RAUL LOYOLA',         paciente: 'CARMEN ISLA',       rut: '10112348-3', prevision: 'ISAPRE'},
    {hora: '10:30', especialista: 'ANTONIO LARENAS',     paciente: 'PABLO LOAYZA',      rut: '13453234-1', prevision: 'ISAPRE'},
    {hora: '12:00', especialista: 'MATIAS ARAVENA',      paciente: 'SUSANA POBLETE',    rut: '14345656-6', prevision: 'FONASA'},);
    
console.log(traumatologia);

//Eliminar el primer y último objeto de radiología

radiologia.shift();
radiologia.pop();

console.log(radiologia);


//Imprimir todos los valores de los objetos del array Dental
document.write("<h2>Lista de consultas médicas - Dental</h2>");
dental.forEach(item =>{
    document.write(`
    <p>${item.hora} - ${item.especialista} - ${item.paciente} - ${item.rut} - ${item.prevision}</p> <br>
    `)
})

//Imprimir listado total de los pacientes del centro medico.
document.write("<h2>Listado de pacientes atendidos en el centro medico</h2>");

const filtrarPacientes = radiologia.concat(traumatologia, dental)

filtrarPacientes.forEach(item =>{
    document.write(`
    <p>${item.paciente}</p> 
    `)
});
console.log(filtrarPacientes);

//Imprimir pacientes con isapre array Dental

const filtrarIsapre = dental.filter (dental => dental.prevision === "ISAPRE")
document.write("<h2>Listado de pacientes Dental con ISAPRE</h2>");
filtrarIsapre.forEach(item =>{
    document.write(`
    <p>${item.paciente} - ${item.prevision}</p> `)
});

console.log(filtrarIsapre);

//Imprimir pacientes con fonasa array traumatologia

const filtrarIsapreT = traumatologia.filter (traumatologia => traumatologia.prevision === "FONASA")
document.write("<h2>Listado de pacientes Traumatología con FONASA</h2>");
filtrarIsapreT.forEach(item =>{
    document.write(`
    <p>${item.paciente} - ${item.prevision}</p> `)
});

console.log(filtrarIsapreT);



//Agregar código para el desafio 2 aquí
document.write(`<br>`);
document.write(`<p>Cantidad de atenciones para Radiología: ${radiologia.length}</p>`);
document.write(`<p>Cantidad de atenciones para Traumatología: ${traumatologia.length}</p>`);
document.write(`<p>Cantidad de atenciones para Dental: ${dental.length}</p>`);


document.write(`<p>Primera atencion: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atención: ${radiologia[radiologia.length -1].paciente} - ${radiologia[radiologia.length -1].prevision}.</p>`);
document.write(`<p>Primera atencion: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención: ${traumatologia[traumatologia.length -1].paciente} - ${traumatologia[traumatologia.length -1].prevision}.</p>`);
document.write(`<p>Primera atencion: ${dental[0].paciente} - ${dental[0].prevision} | Última atención: ${dental[dental.length -1].paciente} - ${dental[dental.length -1].prevision}.</p>`);
