
// İlk Constructor ---> State initialization 
//render meyodu ilk defa çalıştı
//onClick iventi çalıştı
//setState state nesnesini güncelledi --> triggered render
//render metodu güncel JSX i Sayfada gösteriyor 

import React from 'react';

class Collepse extends React.Component {

    constructor(){
        super();
        this.state = {
            showContent:false
        }
     /*   this.showMore = () =>{

        }*/
        //this.showMore = this.showMore.bind(this)
    }

    /*showMore(){
        this.setState({showContent: true})
        //console.log(this)
        
    }*/

    showMore = () => {
    this.setState({showContent: !this.state.showContent}) 
    //this.state = {
    //showContent:true
    //}
    }

    render() {
        return (
            <div>
                <button className="btn btn-primary w-100" onClick={this.showMore }>
                    Link with href
                </button>
                
                {
                    this.state.showContent ? (
                        <div className="collapse show">
                        {this.props.children}
                    </div>
                    ) :null
                }


            </div>
        );
    }

};




export default Collepse;


