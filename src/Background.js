import React, { Component } from 'react';

class Background extends Component {

    constructor() {
        super();
        this.state = {
            pokemons: {}
        };
    }

    componentDidMount() {

        fetch('http://localhost:3001/api/v1/pokemons')
            .then(results => {
                return results.json();
            });

        // fetch('http://127.0.0.1:3001/api/v1/pokemons')
        //     .then(results => {
        //         return results.json();
        //     }).then(data => {
        //     let pokedata = data.results.map((pokemon) => {
        //
        //         return (
        //             <div id={pic.pokenumber}>
        //
        //
        //             </div>
        //
        //         )
        //     })
        //     this.setState({pokedata: pokedata});
        //     console.log("state", this.state.pokedata);
        // })
    }

    render() {

        return (
            <div className="pokemon">

            </div>
        )

    }

}
