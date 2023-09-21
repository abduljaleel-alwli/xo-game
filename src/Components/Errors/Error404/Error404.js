import { Content } from '../../../sections';
import { Link } from 'react-router-dom';
import './Error404.css'

const Error404 = () => {
  return (
    <>
      <Content>
        <div className='body-error-404'>
              <h1 className='title-error-404'>Page Not Found <span className='pt-2'> Error 404</span></h1>
              <Link to={'/'} className={'link-error-404'}><button className='button-error-404'>Home</button></Link>
        </div>
      </Content>
    </>
  )
}

export default Error404
