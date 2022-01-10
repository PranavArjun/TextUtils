import React from 'react'


function About(props) {
    let myStyle = {
        color: props.mode ==='dark'?'white':'black',
        backgroundColor: props.mode ==='dark'?'#042743':'white'
    }

    return (
        <>
        
            <div className="card mb-3" style={{ maxwidth: '540px' }}  >
                <div className="row g-0" style={myStyle}>
                    <div className="col-md-4" style={{ width: '19.333333%' }}>
                        <img src={require('../img/About.jpeg')} className="img-fluid rounded-start" alt="..." style={{ height: '20rem' }} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h3 className="card-title">Web Developer</h3>
                            <h5>Pranav Arjun</h5>
                            <p className="card-text">
                                I created this web app using Code with Harry React JS video tutorials .
                                Using this web app TextUtils you can manipulate your text in the way you want.</p>

                        </div>
                        <a href="https://github.com/PranavArjun/TextUtils" className="btn btn-primary" style={{marginleft:'20px',bordercolor: '#f0f0f0'}}>Github</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
