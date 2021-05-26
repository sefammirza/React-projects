import React from 'react';
import ReactDom from 'react-dom';
import Card from './components/Card';
import Collepse from './components/Collepse';


const App = () => {



    return (
        <div className="container">
            <div className="row">
                <div className="card-group w-100">
                    <div className="col">
                        <Collepse href="collapseExample1">

                            <Card 
                                cardText="Lorem Ipsum Text I"
                                updatedTime="Last Updated 1 min ago"
                                image="https://picsum.photos/id/1/200/300" />

                        </Collepse>
                    </div>
                    <div className="col">
                        <Collepse href="collapseExample2">

                            <Card cardTitle="Card Title I"
                                cardText="Lorem Ipsum Text II"
                                updatedTime="Last Updated 1 min ago"
                                image="https://picsum.photos/id/10/200/300" />

                        </Collepse>
                    </div>
                    <div className="col">
                        <Collepse href="collapseExample3">

                            <Card 
                                cardText="Lorem Ipsum Text III"
                                updatedTime="Last Updated 1 min ago"
                                image="https://picsum.photos/id/100/200/300" />

                        </Collepse>
                    </div>
                </div>
            </div>
        </div>
    );
}

ReactDom.render(
    <App />,
    document.getElementById('root')
);
