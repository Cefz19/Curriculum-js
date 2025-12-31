import ServiceCard from "./components/molecules/ServiceCard";
import { ServiceData } from "../data/services/ServiceData";

const Services = () => {
    const view = `
        <section class="services__main">
                
            <div class="title">
                <h1 class="sub-title">My <span>Services</span></h1>
            </div>

            <div class="card__list">
                ${ServiceData.length > 0 
                    ? ServiceData.map(service => ServiceCard(
                    service.title,
                    service.description,
                    service.icon,
                    service.color
                )).join('') : '<p>No data loaded</p>'}
            </div>

        </section>
    `
    return view;
}

export default Services;