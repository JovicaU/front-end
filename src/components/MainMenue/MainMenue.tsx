import React from "react";
import { Container, Nav } from "react-bootstrap";

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

export class MainMenue extends React.Component<MainMenueProperties>{
    render (){
        return (
            <Container>
            <Nav variant = "tabs">
                {this.props.items.map(this.makeNavLink)}

        </Nav>
        </Container>
        );
        
    }
    private makeNavLink(item: MainMenueItem){
        return(
            <Nav.Link href= {item.link}>
                {item.text}
            </Nav.Link>
            );

    }
}