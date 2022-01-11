import { Viaje } from "../Models/Viaje.js";
import { Testimonial } from "../Models/Testimoniales.js";

const paginaInicio = async (req, res)=> {

    const promiseBD = [];
    promiseBD.push(Viaje.findAll({limit: 3}));
    promiseBD.push(Testimonial.findAll({limit: 3}));

    try {
        const resultado = await Promise.all(promiseBD);
        

        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        });
    } catch (error) {
        console.log(error);
    }

    
}

const paginaNosotros = (req, res)=> {
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
}

const paginaViajes = async (req, res)=> {
    try {
        const viajes = await Viaje.findAll();
        res.render('viajes', {
            pagina: 'Próximos Viajes',
            viajes,
            
        });
    
    } catch (error) {
        console.log(error);
    }
    
    
}

const paginaTestimoniales = async (req, res)=> {

    try {

        const testimoniales = await Testimonial.findAll();

        res.render('testimoniales', {
            pagina: 'Opiniones',
            testimoniales
        });
    } catch (error) {
        console.log(error);
    }
    
}

const paginaDetalleViaje = async (req, res)=> {

    const {slug} = req.params;
    console.log(req.params);
    try {
        const viaje = await Viaje.findOne({where : {slug}});
        
        res.render('viaje', {
            pagina: 'Información Viaje',
            viaje
        })
    } catch (error) {
        console.log(error);
    }
    
}

export {
    paginaInicio, 
    paginaNosotros, 
    paginaViajes, 
    paginaTestimoniales,
    paginaDetalleViaje
    
}