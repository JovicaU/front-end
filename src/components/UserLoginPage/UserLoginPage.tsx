import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Alert, Button, Card, Col, Container, Form, FormControl, FormLabel } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import api, { ApiResponse, saveToken, saveRefreshToken } from '../../api/api';

interface UserLoginPageState{
    email: string;
    password: string;
    errorMessage: string;
    isLoggedIn: boolean;
}
export default class UserLoginPage extends React.Component{
     state: UserLoginPageState;

     constructor(props: {} | Readonly<{}>){
        super(props);

        this.state = {
                email: '',
                password: '',
                errorMessage: '',
                isLoggedIn: false,
        }
     }

     private formInputChanged(event: React.ChangeEvent<HTMLInputElement>){
        const newState = Object.assign(this.state, {
            [event.target.id]: event.target.value,
        });

        this.setState(newState);
     }

     private setLoggintState(isLoggedIn: boolean){
        const newState = Object.assign(this.state, {
            isLoggedIn: isLoggedIn,
        }); 

        this.setState(newState);

     }

     private setErrorMessage(message: string){
        const newState = Object.assign(this.state, {
            errorMesage: message,
        });
        this.setState(newState);

     }

     private doLogin(){
        api('auth/user/login', 'post', {
            email: this.state.email,
            password: this.state.password,
        })
        .then((res: ApiResponse) => {
             if(res.status === 'error'){
                console.log(res.data);
                return;
             }

             if(res.status === 'ok'){
                if(res.data.statusCode !== undefined){
                   let message = '';
                    switch(res.data.statusCode){
                        case -3001: message = 'Unknown e-mail!'; break;
                        case -3002: message = 'Bad password!'; break;
                    }
                    this.setErrorMessage(message);

                    return;
                }

                saveToken(res.data.token);
                saveRefreshToken(res.data.refreshToken);

                // Preusmjeriti korisnika... /#/
                this.setLoggintState(true);
             }

        });
     }

    render(){
        if(this.state.isLoggedIn === true){
            return(
                <Navigate to="/" />
            );
        }
        return (
        <Container>
            <Col md = {{span: 6 , offset: 3}}>
            <Card>
                <Card.Body>
                    <Card.Title>
                    <FontAwesomeIcon icon = {faSignInAlt}/> User Login
                    </Card.Title>
                        <Form>
                            <Form.Group>
                                <FormLabel htmlFor="email">E-mail:</FormLabel>
                                <FormControl type="email" id="email"
                                             value = {this.state.email}
                                             onChange={(event: any) => this.formInputChanged(event as any)  }/>
                            </Form.Group>
                            <Form.Group>
                                <FormLabel htmlFor="password">Password:</FormLabel>
                                <FormControl type="password" id="password"
                                            value = {this.state.password}
                                            onChange={(event: any) => this.formInputChanged(event as any)  }/>
                            </Form.Group>

                            <Form.Group >
                                <Button  variant ="primary"
                                         onClick = {() => this.doLogin()}>
                                    Log in
                                </Button>
                            </Form.Group>
                        </Form>
                        <Alert variant ="danger"
                               className = {this.state.errorMessage ? '' : 'd-none'}>
                            {this.state.errorMessage}
                        </Alert>
                </Card.Body>
            </Card>
            </Col>
        </Container>
      );
    }
}