import errImg from '../assets/images/err-img.png';

const ErrorElement = () => {
    return (
        <div className='d-flex align-items-center justify-content-center vh-100'>
            <img src={errImg} />
        </div>
    )
}

export default ErrorElement