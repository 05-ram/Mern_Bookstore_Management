import { Link } from 'react-router-dom';
import errImg from '../assets/images/err-img.png';

const ErrorElement = () => {
    return (
        <div className='d-flex align-items-center justify-content-center vh-100 flex-column gap-3'>
            <img src={errImg} />
            <span>
                <Link to='/'>Back</Link>
            </span>
        </div>
    )
}

export default ErrorElement