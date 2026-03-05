import CesarImag from "../../assets/imgs/Cesar.webp";
import Patronaje from "../../assets/imgs/Patron.webp";

import FProject from "../../assets/imgs/proyecto.webp";
import FCronograma from "../../assets/imgs/cronograma.webp";
import FDesarrollo from "../../assets/imgs/desarrollo.webp";
import FFlujoApp from "../../assets/imgs/flujoApp.webp";
import FTipografia from "../../assets/imgs/tipografia.webp";
import FRetroalimentacion from "../../assets/imgs/retroalimentacion.webp";
import FBeneficios from "../../assets/imgs/beneficios.webp";

const PhotoGalleryView = {
  getPhotos: () => ({
    cesar: { src: CesarImag, alt: "Presentation Cesar" },
    patron: { src: Patronaje, alt: "Patronaje" },

    fProject: { src: FProject, alt: "Just Project" },
    fCronograma: { src: FCronograma, alt: "Just Project" },
    fDesarrollo: { src: FDesarrollo, alt: "Just Project" },
    fFlujoApp: { src: FFlujoApp, alt: "Just Project" },
    fTipografia: { src: FTipografia, alt: "Just Project" },
    fRetro: { src: FRetroalimentacion, alt: "Just Project" },
    fBenef: { src: FBeneficios, alt: "Just Project" },
  }),
};

export default PhotoGalleryView;
