import React, { Component } from 'react'

export default class Fetchapi extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading : false,
            data : []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=> res.json())
        .then(json => {
            this.setState({
                isLoading:true,
                data:json,
            })
        })
        
    }
    render() {
        const {isLoading , data } = this.state;
        if (!isLoading) {
            return <div> L O A D I N G . . .</div>
        } else {
            return (
            <ul>
             <h1>data : </h1>{data.map(data => (
                <li key={data.id}>
                    Name : {data.name} | Email: {data.email} | User : {data.username}
                </li>
             ))}
            </ul>
        )
    }
}
}