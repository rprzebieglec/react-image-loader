import React from 'react';
import Spinner from './Spinner';

class ImageLoader extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            src: ''
        }
    }

    componentDidMount() {
        const image = new Image();
        image.src = this.props.src;
        image.onload = () => {
                this.setState({
                    src: image.src,
                    isLoading: false
                });
        }
    }

    render() {
        if (this.state.isLoading) {
            return (
                <Spinner />
            );
        } else {
            return (
                <img src={this.state.src} alt={this.props.alt}/>
            );
        }
    }
}


module.exports = ImageLoader;
