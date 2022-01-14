import React, { Component } from 'react';


class Button extends Component { 
    render() { 
        return ( 
            <React.Fragment>
                <button
                className={this.props.character === '='? 'button two-column-button' : 'button'}
                onClick={() => this.props.onClick(this.props.character)}
                >
                    {this.props.character}
                </button>
            </React.Fragment>
         );
    }
}
 
export default Button;