import React from 'react'

export default function About(props) {

    // const [constyle,setconstyle]=useState({
    //         color:'black',
    //         backgroundColor:'white'
    // })

    // const [btntext,setbtntext]=useState('Dark Mode')

    // const dark=()=>
    // {
    //     if(constyle.color==='black')
    //     {
    //         setconstyle({
    //             color:'white',
    //             backgroundColor:'black',
    //             border:'1px solid white'
    //         })
    //         setbtntext('Light Mode')
    //     }
    //     else
    //     {
    //         setconstyle({
    //             color:'black',
    //             backgroundColor:'white'
    //         })
    //         setbtntext('Dark Mode')
    //     }
    // }

    let constyle={
        color:props.mode==='light'?'black':'white',
        backgroundColor:props.mode==='light'?'white':'rgb(36 74 104)'
    }

  return (
    <>
        <div className="con">
            <h2 style={{color:props.mode==='light'?'black':'white'}}>About</h2>
            <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item" style={constyle}>
                <h2 class="accordion-header" id="flush-headingOne">
                    <button class="accordion-button collapsed" type="button" style={constyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Anlyze your Text
                    </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body" style={constyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ad tempore, inventore expedita eligendi voluptates in consectetur, placeat accusantium saepe aliquid delectus suscipit, illum sunt vero labore maxime iste at!</div>
                </div>
                </div>
                <div class="accordion-item" style={constyle}>
                <h2 class="accordion-header" id="flush-headingTwo">
                    <button class="accordion-button collapsed" type="button" style={constyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Free to Use
                    </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body" style={constyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum totam, exercitationem deserunt nesciunt velit ratione veritatis sequi id ab rerum possimus ex repellat iusto, animi incidunt dolor sed dolore commodi!</div>
                </div>
                </div>
                <div class="accordion-item" style={constyle}>
                <h2 class="accordion-header" id="flush-headingThree">
                    <button class="accordion-button collapsed" type="button" style={constyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Browser Compitable
                    </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body" style={constyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum harum nisi ea architecto impedit incidunt ad corporis explicabo et animi exercitationem ullam autem, possimus fugit aut veniam, dolorem dignissimos odit.</div>
                </div>
                </div>
            </div>
            {/* <button className="btn btn-primary my-3 mx-3" onClick={dark}>{btntext}</button> */}

        </div>
    </>
  )
}