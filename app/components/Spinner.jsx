import React from 'react';

const puff = require('!svg-inline?removeSVGTagAttrs=false!../svg/puff.svg');

export default class Spinner extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            src: ''
        };
    }

    componentDidMount() {
        var src = '';
        if (!this.props.src) {
            src = 'data:image/svg+xml;base64,'
                + btoa(puff)
            ;
        } else {
            src = this.props.src;
        }
        this.setState({src});
    }

    render() {
        return <img className='ril--spinner' src={this.state.src}/>;
    }
}
