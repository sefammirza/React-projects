
// İlk Constructor ---> State initialization 
//render meyodu ilk defa çalıştı
//onClick iventi çalıştı
//setState state nesnesini güncelledi --> triggered render
//render metodu güncel JSX i Sayfada gösteriyor 

import React from 'react';

class Collepse extends React.Component {

    state = {
            showContent: false
        }
    


    showMore = () => {
        this.setState({ showContent: !this.state.showContent })
    }

    /*componentDidMount(){
        console.log("Component oluşturuldu")
    }

    componentDidUpdate(){
        console.log("Component güncellendi")
    }*/


    render() {
        return (
            <div>
                <button className="btn btn-primary w-100" onClick={this.showMore}>
                    {React.Children.map(this.props.children, children => children.props.cardTitle)}
                </button>

                {
                    this.state.showContent ? (
                        <div className="collapse show">
                            
                            {React.Children.map(this.props.children, children => children)}
                        </div>
                    ) : null
                }


            </div>
        );
    }

};




export default Collepse;


