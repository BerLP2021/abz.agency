import { Component } from 'react';

import ErrorMsg from '../UI/ErrorMsg';
import Title from '../UI/Title';

export default class ErrorBoundary extends Component {
    state = {
        error: false
    }

    componentDidCatch(err, info) {
        this.setState({error: true})
    }

    render() {
        if(this.state.error) {
            return (
                <div className=''>
                    <Title 
                        text="Fuck it, Dude. Let's go bowling." 
                        component='h2'
                        className='heading1'/>
                    <ErrorMsg/>
                </div>    
            )
        }
        return this.props.children
    }
}