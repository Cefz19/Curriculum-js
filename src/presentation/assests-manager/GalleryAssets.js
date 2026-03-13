import CesarImag from "../../assets/imgs/Cesar.webp";
import Patronaje from "../../assets/imgs/Patron.webp";

import Hhome from "../../assets/imgs/html-css-js_img/PortFolio_Home.png"

import FProject from "../../assets/imgs/proyecto.webp";
import FCronograma from "../../assets/imgs/cronograma.webp";
import FDesarrollo from "../../assets/imgs/desarrollo.webp";
import FFlujoApp from "../../assets/imgs/flujoApp.webp";
import FTipografia from "../../assets/imgs/tipografia.webp";
import FRetroalimentacion from "../../assets/imgs/retroalimentacion.webp";
import FBeneficios from "../../assets/imgs/beneficios.webp";





const PhotoGalleryView = {
  getPhotos: () => ({
    hHome: {src: Hhome,},
    
    cesar: { src: CesarImag, alt: "Presentation Cesar" },
    patron: { src: Patronaje, alt: "Patronaje" },

    fProject: { src: FProject, alt: "Just Project" },
    fCronograma: { src: FCronograma, alt: "conogram" },
    fDesarrollo: { src: FDesarrollo, alt: "desarrollo" },
    fFlujoApp: { src: FFlujoApp, alt: "flujo app" },
    fTipografia: { src: FTipografia, alt: "tipograf" },
    fRetro: { src: FRetroalimentacion, alt: "retroalim" },
    fBenef: { src: FBeneficios, alt: "benefic" },
  }),
};

export default PhotoGalleryView;
