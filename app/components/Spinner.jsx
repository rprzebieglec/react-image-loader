import React from 'react';

const puff = require('!svg-inline?removeSVGTagAttrs=false!../svg/puff.svg');

class Spinner extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <span dangerouslySetInnerHTML={{__html: puff}}/>;
    }
}

module.exports = Spinner;
