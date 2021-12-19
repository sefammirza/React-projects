import React from 'react'
import MyCard from './MyCard'
import { Row, Col, Container } from 'react-bootstrap'

const Courses = ({data}) => {
    return (
        <div>
            <Container className='text-center mt-4'  style={{height:"500px"}}>
                <Row  className='mb-3 d-flex justify-content-center'>
                    {data.map((course) => {
                        return(
                            <Col  className='mb-3 d-flex justify-content-center' key={course.id} xs={12} md={6} lg={4}>
                                <MyCard course={course}/>
                    </Col>
                        )
                    })}
                    
                </Row>
            </Container>
        </div>
    )
}

export default Courses
