import React from "react";
import { Container, Nav } from "react-bootstrap";
import {HashRouter, BrowserRouter} from 'react-router-dom';
import { Link } from "react-router-dom";


export class MainMenueItem{
    text: string='';
    link:string = '#';

    constructor(text: string, link:string){
        this.text = text;
        this.link = link;
    }
}

interface MainMenueProperties {
    items: MainMenueItem[];
}

interface MainMenueState {
    items: MainMenueItem[];
}



export class MainMenue extends React.Component<MainMenueProperties>{

    state: MainMenueState;


    constructor(props: MainMenueProperties | Readonly<MainMenueProperties>){


        super(props);

        this.state = {
            items: props.items,
        };

   
    }

    setItems (items: MainMenueItem[]){
        this.setState({
            items: items,
        });
    }

    render (){
        return (
            <Container>
            <Nav variant = "tabs">
                <BrowserRouter>
                {this.state.items.map(this.makeNavLink)}
                </BrowserRouter>
                        </Nav>
        </Container>
        );
        
    }
    private makeNavLink(item: MainMenueItem){
        return(
            <Link reloadDocument to= {item.link} className = "nav-link">
                {item.text}
            </Link>
            );

    }
}