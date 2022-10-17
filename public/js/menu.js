const base= 
    [{
        orden:0,
        nombre:"Inicio", //nombre del item menu
        icono:'bi-house',
        flagsubmenu:false, //indica si tiene o no submenu
        hrefmenu:"/Crud", // si no posee submenu entonces href del item
        subs:[], // npmbre de cada submenu
        hrefsub:[], // destino del ancla de cada submenu
        perfil:"Admin" 

    },
    {
        orden:1,
        nombre:"Dashboard", //nombre del item menu
        icono:'bi-speedometer2',
        flagsubmenu:false, //indica si tiene o no submenu
        hrefmenu:"/Dashboard", // si no posee submenu entonces href del item
        subs:[], // npmbre de cada submenu
        hrefsub:[], // destino del ancla de cada submenu
        perfil:"Admin" 

    },
    {
        orden:2,
        nombre:"Productos", //nombre del item menu
        icono:'bi-bag-plus',
        flagsubmenu:true, //indica si tiene o no submenu
        hrefmenu:"", // si no posee submenu entonces href del item
        subs:["Comprar", "Ordenes", "Historial","Admin. Productos"], // npmbre de cada submenu
        hrefsub:["/ventas","/Ordenes","/ventaHistorial","/AdminProd"], // destino del ancla de cada submenu
        perfil:"Admin" 
    },
    {
        orden:3,
        nombre:"Dispositivos", //nombre del item menu
        icono:'bi-activity',
        flagsubmenu:true, //indica si tiene o no submenu
        hrefmenu:"", // si no posee submenu entonces href del item
        subs:["Mapa", "Equipo"], // npmbre de cada submenu
        hrefsub:["/network","/Devices"], // destino del ancla de cada submenu
        perfil:"Admin" 
    },
    {
        orden:4,
        nombre:"Usuarios", //nombre del item menu
        icono:'bi-gear-fill',
        flagsubmenu:true, //indica si tiene o no submenu
        hrefmenu:"", // si no posee submenu entonces href del item
        subs:["Perfiles", "Usuarios"], // npmbre de cada submenu
        hrefsub:["/Perfiles","/Usuarios"], // destino del ancla de cada submenu
        perfil:"Admin" 
    },

    ]

const MenuItems = document.querySelector('#menu'); //id que contiene al submenu

generarMenu(base); //genera el menu segun lo extraido de la base de datos 

/* Agregar item a menú sin subindice*/

function item(nombreM,iconoM,hrefM){ 

const miItem = document.createElement('li');
miItem.classList.add('nav-item');

const miitemAncla = document.createElement('a');
miitemAncla.classList.add('nav-link','align-middle','px-0');
miitemAncla.setAttribute('href', hrefM);

const miitemIcon = document.createElement('i');
miitemIcon.classList.add('fs-4', iconoM);

const miitemLabel =  document.createElement('span');
miitemLabel.classList.add('ms-1', 'd-none', 'd-sm-inline');
miitemLabel.textContent = nombreM;


miitemAncla.appendChild(miitemIcon);
miitemAncla.appendChild(miitemLabel);
miItem.appendChild(miitemAncla);
MenuItems.appendChild(miItem);
}

/* Agregar item con submenu */


function submenuItem (nomSubindice,hrefsubmenu){ // genera un subindice

    const itemSubmenu = document.createElement('li');
    itemSubmenu.classList.add('w-100');

    const anclaSubmenu = document.createElement('a');
    anclaSubmenu.classList.add('nav-link', 'px-0');
    anclaSubmenu.setAttribute('href', hrefsubmenu);
    anclaSubmenu.textContent = "- ";

    const labelSubmenu = document.createElement('span');
    labelSubmenu.textContent = nomSubindice; 
    
    anclaSubmenu.appendChild(labelSubmenu);
    itemSubmenu.appendChild(anclaSubmenu);
    
    return itemSubmenu;
}

function itemWsubmenu (nombre,iconoMS,cantSub,hrefsubM){ //genera el indice que va a contener subindices

    const miItem = document.createElement('li');
    miItem.classList.add('nav-item');

    const miitemAncla = document.createElement('a');
    miitemAncla.classList.add('nav-link','align-middle','px-0');
    miitemAncla.setAttribute('href', "#"+ nombre);
    miitemAncla.setAttribute('data-bs-toggle',"collapse");

    const miitemIcon = document.createElement('i');
    miitemIcon.classList.add('fs-4',iconoMS);

    const miitemLabel =  document.createElement('span');
    miitemLabel.classList.add('ms-1', 'd-none', 'd-sm-inline');
    miitemLabel.textContent = nombre;

    const submenu = document.createElement('ul');
    submenu.classList.add('collapse','nav','flex-column','ms-1');
    submenu.setAttribute('id',nombre);
    submenu.setAttribute('data-bs-parent',"#menu")
    
    for (let index = 0; index < cantSub.length; index++) {
        let newSebmenu = submenuItem(cantSub[index],hrefsubM[index]);
        submenu.appendChild(newSebmenu);
      }
    miitemAncla.appendChild(miitemIcon);
    miitemAncla.appendChild(miitemLabel);
    miItem.appendChild(miitemAncla);
    miItem.appendChild(submenu);

    MenuItems.appendChild(miItem);

}

function generarMenu(navMenu){

    navMenu.forEach((info) => {
        if(info.flagsubmenu){
            itemWsubmenu(info.nombre,info.icono, info.subs,info.hrefsub);
        }else{
            item(info.nombre,info.icono,info.hrefmenu)
        }
    })

}
