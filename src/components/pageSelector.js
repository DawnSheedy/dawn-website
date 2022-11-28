import React, {useState} from 'react';
import Title from './title'
import Socials from './socials'
import { Col, Row, Container } from 'react-bootstrap';
import CornerElements from './cornerElements';
import LoadingCover from './loadingCover';

const PageSelector = (props) => {
    const [page, setPage] = useState("home");

    if (page === "loading") {
        return (
            <>
                <LoadingCover selector={setPage} />
            </>
        )
    }

    if (page === "home") {
        return (
            <>
                <div className="low-opacity"><LoadingCover selector={setPage} /></div>
                <CornerElements />
                <Container className="App-center">
                  <Row className="justify-content-md-left">
                    <Col sm={{ span: 12 }} md={{ span: 10, offset: 2 }} lg={{ span: 9, offset: 3 }}>
                      <Title />
                      <Socials />
                    </Col>
                  </Row>
                </Container>
            </>
            );
    }
}

export default PageSelector;