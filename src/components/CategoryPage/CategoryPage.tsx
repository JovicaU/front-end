import { faListAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Card } from 'react-bootstrap';
import CategoryType from '../../Types/CategoryType';

interface CategoryPageProperties{
   match: {
    params:{
        id: number;
    }
   }
}

interface CtegoryPageState{
    category?: CategoryType;
}

export default class CategoryPage extends React.Component<CategoryPageProperties> {
    state: CtegoryPageState;

    constructor (props:  Readonly<CategoryPageProperties>){
        super(props);

        this.state = { };
    }

    render() {
        return(
            <Container>
            <Card>
                <Card.Body>
                    <Card.Title>
                     <FontAwesomeIcon icon = {faListAlt}/> {this.state.category?.name}
                    </Card.Title>
                    <Card.Text>
                          Here, we will have our articles ...
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>

        ); 
    }

    componentWillMount(){

        this.getCategoryData();

    }

    componentWillReceiveProps(newProperties: CategoryPageProperties){

        if(newProperties.match.params.id === this.props.match.params.id){
            return;
        }

        this.getCategoryData();
    }

    private getCategoryData() { setTimeout(() =>{
          
        const data: CategoryType = {
            name: 'Category' + this.props.match.params.id,
            categoryId: this.props.match.params.id,
            items: []
        };

        this.setState({
            category: data,
        })
    }, 750);
}
}