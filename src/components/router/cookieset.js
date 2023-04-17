import { useParams } from 'react-router-dom';
import Cookies from 'universal-cookie';

const CookieSet = () => {

    const id = useParams()

    const cookies = new Cookies();
    cookies.set(`${id.id}`, true, { path: '/', sameSite: 'none', secure: true });

    return (
        <div style={{color: 'white'}}>
            georadio: {cookies.get('georadio')}
            nnserver: {cookies.get('nnserver')}
            fishgame: {cookies.get('fishgame')}
            weather2: {cookies.get('weather2')}
        </div>
    )
}

export default CookieSet;