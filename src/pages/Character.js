import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Character = async () => {

    const id = getHash();
    const character = await getData(id);
    console.log(character);
    const view = `
        <div class="Characters-inner">
            <article class="Character-card">
                <img src="${character.links.patch.small}" alt="${character.name}">
                <h2>${character.name}</h2>
            </article>

            <article class="Characters-card">
                <h3>Failures:</h3>
                <ul>
                    ${character.failures.map(failure => `
                    <li>
                        Time: ${failure.time} segundos,
                        Altitude: ${failure.altitude !== null ? failure.altitude : 'N/A'},
                        Reason:${failure.reason}
                    </li> 
                    `).join('')}
                </ul>
                <h3>Details:<span>${character.details}</span></ </h3>
                <h3>Fligth number: <span>${character.flight_number}</span></</h3>
                <h3>takeoff date and time: <span>${character.date_utc}</span></</h3>
            </article>
        </div> 
    `
    return view
};
export default Character;