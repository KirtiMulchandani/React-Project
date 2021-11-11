import React from 'react'

export default function About(props) {

    //     const[myStyle, setmyStyle] = useState({
    //         color: 'black',
    //         backgroundColor: 'white',
    //         border: '2px solid white'
    //     })
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? '#212529' : 'white',
    }
    //     const [btntext, setBtnText] = useState("Enable Dark Mode")

    //     const toggleStyle = ()=>{
    //         if(myStyle.color === 'white'){
    //             setmyStyle({

    //                 color: 'black',
    //                 backgroundColor: 'white'
    //             })
    //             setBtnText("Enable Light Mode")
    //         }
    //         else{
    //             setmyStyle({

    //                 color: 'white',
    //                 backgroundColor: 'black'
    //             })
    //             setBtnText("Enable Dark Mode")

    //         }
    //     }

    return( 
        <>
        
        <div className="container" >
            <h1 className="my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>About Us</h1>
                <div className="accordion" id="accordionExample" style={myStyle}>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Analyze Your Text
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                            TextUtils gives you a way to analyze text quickly and effectively. Be it word count, character count, character count and also check for minutes read. 
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Free to use
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                            TextUtils is a free character counter that provides instant character count and word count statistics for a given text. TextUtils reports the number of word and characters. Thus it is suitable for writing text with word/character limit.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Browser Compatible
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                            This word counter software in any web Browser such as Chrome, Firefox, Opera, Microsoft Edge, Safari, Internet Explorer. It suits to count characters in Facebook, blog, books, excel document, pdf document, essays etc.

                            </div>
                        </div>
                    </div>

                </div>
          

            {/* <div className="container">
            <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>        
            </div>  */}
              </div>
        </>
        
    )
}
