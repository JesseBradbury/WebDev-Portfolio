import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return (
        <Container>
            <Row>
                <Col xs={{ span: 2, offset: 3 }}>
                <p>linkedin</p>
                </Col>
                <Col xs={{ span: 2}}>
                <p>email</p>
                </Col>
                <Col>
                <p>artstation</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;


