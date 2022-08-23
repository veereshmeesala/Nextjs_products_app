import React from 'react';
// import 'reset-css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import { FaShoppingBag } from 'react-icons/fa';
import ShopNavBar from '../src/components/nav';

const Home = () => (
  <div>
    <ShopNavBar />
    <div style={{ display: 'flex', flexDirection: 'row', padding: '20px' }}>
      <Card
        bg="Light"
        key="info-card-1"
        text={'dark'}
        style={{ width: '18rem', marginRight: '20px' }}
        className="mb-2"
        id="deals">
        <Card.Body>
          <Card.Title>Browse Today’s Deals </Card.Title>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div>
              <FaShoppingBag size={40} />
            </div>
            <Card.Text style={{ paddingLeft: '5px' }}>
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </Card.Text>
          </div>
        </Card.Body>
      </Card>

      <Card
        bg="Light"
        key="info-card-1"
        text={'dark'}
        style={{ width: '18rem' }}
        className="mb-2"
        id="shoppingList">
        <Card.Body>
          <Card.Title>Shopping list </Card.Title>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div>
              <FaShoppingBag size={40} />
            </div>
            <Card.Text style={{ paddingLeft: '5px' }}>
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
    </div>
  </div>
);

export default Home;
