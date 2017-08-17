import React from 'react';
require('./listitem.less');
let PubSub = require('pubsub-js');
import { Link } from 'react-router';


let ListItem = React.createClass({
	deleteHandler(item, event) {
		event.stopPropagation();
		PubSub.publish('DEL_MUSIC', item);
	},
	playMusic(item, e) {
		PubSub.publish('PLAY_MUSIC', item);
	},
    render() {
    	let item = this.props.data;
        return (
            <li className={`row components-listitem${this.props.focus ? ' focus' : ''}`} onClick={this.playMusic.bind(this, item)}>
            <Link to="/"><p><span className="bold">{item.title}</span>  -  {item.artist}</p></Link>
                <p className="-col-auto delete" onClick={this.deleteHandler.bind(this, item)}></p>
            </li>
        );
    }
});

export default ListItem;