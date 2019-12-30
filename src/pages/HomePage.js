import React, { Component } from 'react';

import styles from './HomePage.scss';


export default class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h1>主页</h1>
                <div className={styles.title}>BUG List</div>
            </div>
        );
    }

}
