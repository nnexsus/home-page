import { useParams } from 'react-router-dom';
import Cookies from 'universal-cookie';

const TestCookie = () => {

    const id = useParams()

    return (
        <div style={{color: 'white'}}>
            {id.id}
        </div>
    )
}

export default TestCookie;