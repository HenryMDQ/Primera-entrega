//Creamos constantes y requerimos las libreríasa
const express = require('express');
const path = require('path');
const hbs = require('hbs');
const nodemailer = require('nodemailer');

//Ejecutamos express y guardamos el puerto
const PORT = process.env.PORT || 80;
const app = express(); /*  */

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, '/public')));

//Configuraciones
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views/partials'));
app.use(express.static(path.join(__dirname, 'public')));

//Rutas 



app.post('/', (req, res) => {

    const { nombre, email, mensaje } = req.body;

    if(nombre == '' && email == ''){
        res.render('emailSend',{ titulo:'Carga bien los datos que lo tiro'})    
    }else{
    console.log(`Tus datos han sido recibidos, ${nombre} - ${email} - ${mensaje}`);

    async function envioMail(){

        let transporter = nodemailer.createTransport({
            host:`smtp.gmail.com`,
            port: 465,
            secure: true,
            auth:{
                user:"************",
                pass: "**********",
            }
        });
        
        console.log('el let transponder esta ok');

        // mesnaje a cliente 

        let message = await transporter.sendMail({
            from: "*************",
            to: `${email}`, 
            subject: "Gracias por contactar a Deitres",
            html: `${email} Muchas gracias por su mensaje. En breve una persona de Deitres lo contactará.`
          });

          //Mensaje a ventas 
          
          let messageVentas = await transporter.sendMail({
            from: "thingol2000@gmail.com",
            to: `thingol2000@gmail.com`, 
            subject:  `Mail de ${nombre}`,
            html: `El cliente con mail ${email} y nombre ${nombre} consulta: <br> ${mensaje}`
          });
         
          res.render('emailSend',{ titulo:`${nombre} Recibimos su consulta y enviamos un mail al correo ${email}`});
     }
     envioMail().catch(console.error);
    }
    
});

app.get('/', (req, res) => {
    res.render('paginaweb');
});

app.get('/Crud', (req, res) => {
    res.render('inicio');
});
app.get('/ventas', (req, res) => {
    res.render('ventas');
});
app.get('/network', (req, res) => {
    res.render('network');
});
app.get('/Usuarios', (req, res) => {
    res.render('Usuarios');
});
app.get('/Perfiles',(req,res) =>{
    res.render('Perfiles')
})
app.get('/Devices',(req,res) =>{
    res.render('Devices')
})
app.get('/Dashboard',(req,res) =>{
    res.render('Dashboard')
})
app.get('/Ordenes',(req,res) =>{
    res.render('Ordenes')
})
app.get('/ventaHistorial',(req,res) =>{
    res.render('ventaHistorial')
})
app.get('/AdminProd',(req,res) =>{
    res.render('adminProd')
})

//Aplicación en escucha por el puerto asignado
app.listen(PORT, () => {
    console.log(`Aplicación activa y trabajando en el Puerto ${PORT}`);
});

//En caso de error, me avisa
app.on('Error', (err) => {
    console.log(`Tenemos un error en el Espacio`);
})