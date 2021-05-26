import React from 'react';



const Collepse = (props) => {
    return (
        <div>
                <a class="btn btn-primary w-100"  data-bs-toggle="collapse" href={"#".concat(props.href)} role="button" aria-expanded="false" aria-controls="collapseExample">
                    Link with href
                </a>
            <div class="collapse show" id={props.href}>
                {props.children}
            </div>
        </div>
    );
};

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}


export default Collepse;


