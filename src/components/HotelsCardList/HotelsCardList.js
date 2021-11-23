import './HotelsCardList.css';
import HotelsCard from '../HotelsCard/HotelsCard';

function HotelsCardList ({  }) {

    return (
        <section className="hotels">
        <ul>
            <HotelsCard />
        </ul>
        </section>
    )
}

export default HotelsCardList;