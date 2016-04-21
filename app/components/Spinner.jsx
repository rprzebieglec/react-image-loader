import React from 'react';

const puff = require('!svg-inline?removeSVGTagAttrs=false!../svg/puff.svg');

class Spinner extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        var base64 = 'data:image/svg+xml;base64,'
            + btoa(puff)
            ;
        return <img className='ril--spinner' src={base64}/>;
    }
}

module.exports = Spinner;
