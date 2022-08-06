import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import musicBg from '../../img/music-bg.jpg';

const Header = () => {
  return(
    <div className="Header" style={{ 
      backgroundImage: `url(${musicBg})`,
      backgroundRepeat: 'repeat-x', 
      backgroundSize: 'contain'
    }}>
      <Navbar className="Navbar text-light" bg="dark" variant="dark">
        <Container>
          Music Therapy Log CRUD App
        </Container>
      </Navbar>
    </div>
  )
}

export default Header;