import  React,{ Component } from "react";


export default class Header extends Component {
    render(){
       
            return (
                
                                      
        <header id="header" class="header">
        <div class="header-content">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="text-container">
                            <h1><span class="turquoise">Welcome</span> In Nabeul Smart City</h1>
                            <p class="p-large"> Nabeul Smart City es une platforme qui intègre les technologies de l'information et de la
communication pour améliorer la qualité de vie de ses habitants et protéger l'environnement
urbain et naturel.</p>
                            <a class="btn-solid-lg page-scroll" href="#services">DISCOVER</a>
                        </div> 
                    </div> 
                    <div class="col-lg-6">
                        <div class="image-container">
                            <img class="img-fluid" src="images/header-teamwork.svg" alt="alternative" />
                        </div> 
                    </div> 
                </div> 
            </div> 
        </div> 
    </header>
            )
    
        }
}