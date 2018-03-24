/*
 *
 *
 */

var AddPokemonForm = React.createClass({

    propTypes: {
        value: React.PropTypes.object.isRequired
        onChange: React.PropTypes.func.isRequired,
    },

    render: function() {

        return (

            React.createElement('form', {className: 'AddPokemonForm'},
                React.createElement('input', {
                    type: 'number', 
                    placeholder: '000',
                    value: this.props.value.number,
                }),
                React.createElement('input', {
                    type: 'text', 
                    placeholer: 'Pokemon Name', 
                    value: this.props.value.title,
                }),
                React.createElement('input', {
                    type: 'text', 
                    placeholer: 'Pokemon Type', 
                    value: this.props.value.poketype,
                }),
                React.createElement('input', {
                    type: 'text', 
                    placeholer: 'image url', 
                    value: this.props.value.image,
                }),
                React.createElement('input', {
                    type: 'text', 
                    placeholer: 'gender', 
                    value: this.props.value.gender,
                }),
                React.createElement('input', {
                    type: 'text', 
                    placeholer: 'slug', 
                    value: this.props.value.slug,
                }),
                React.createElemtn('button', {type: 'submit'}, "Add Pokemon to Pokedex")
            )
        )
    },
});

            
