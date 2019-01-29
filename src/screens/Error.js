import React from 'react';


export default class CatchError extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {}

    render() {
        if(hasError) {
            return null;
        }

        return null;
    }
}
