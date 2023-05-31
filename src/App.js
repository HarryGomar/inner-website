import React, {Component} from 'react';
import ReactModal from 'react-modal-resizable-draggable';
import Terminal from 'terminal-in-react';
import Essays from './Essays';


class App extends Component {

    constructor() {
        super();

        this.state = {
            modalIsOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }


    openModal() {
        this.setState({modalIsOpen: true});
        console.log("wto")
    }
    closeModal() {
        this.setState({modalIsOpen: false});
    }

    showMsg = () => 'Hello World'



    render() {
        return (
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh"
              }}>
                <Terminal
                    hideTopBar 
                    allowTabs = {false}
                    color='green'
                    startState = 'maximised'
                    backgroundColor='black'
                    barColor='black'
                    style={{ fontWeight: "bold", fontSize: "1em" }}
                    commands={{
                        'login': () => this.setState({modalIsOpen: true}),
                        showmsg: this.showMsg
                      }}
                    descriptions={{
                        'login': 'log into site',
                        showmsg: 'shows a message',
                        alert: 'alert', popup: 'alert'
                    }}
                    msg={`
                    ░█████╗░██╗░░██╗░█████╗░░█████╗░  ░█████╗░██╗░░██╗░█████╗░░█████╗░
                    ██╔══██╗██║░░██║██╔══██╗██╔══██╗  ██╔══██╗██║░░██║██╔══██╗██╔══██╗
                    ██║░░╚═╝███████║██║░░██║██║░░██║  ██║░░╚═╝███████║██║░░██║██║░░██║
                    ██║░░██╗██╔══██║██║░░██║██║░░██║  ██║░░██╗██╔══██║██║░░██║██║░░██║
                    ╚█████╔╝██║░░██║╚█████╔╝╚█████╔╝  ╚█████╔╝██║░░██║╚█████╔╝╚█████╔╝
                    ░╚════╝░╚═╝░░╚═╝░╚════╝░░╚════╝░  ░╚════╝░╚═╝░░╚═╝░╚════╝░░╚════╝░
                    
                    
                    Access terminal for CHOO CHOO Train
                    
                    `}
                />
                <ReactModal 
                    initWidth={800} 
                    initHeight={400} 
                    onFocus={() => console.log("Modal is clicked")}
                    className={"my-modal-custom-class"}
                    onRequestClose={this.closeModal} 
                    isOpen={this.state.modalIsOpen}>

                        <Essays/>
                        

                </ReactModal>
            </div>
        );
    }
}

export default App;