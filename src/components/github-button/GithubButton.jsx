
import styles from './GithubButton.module.css';


import React from 'react';

const GithubButton = () => {

    return (
        <button className={styles.btn}>
            <a  href='https://github.com/jjieunyun'>
                <i className="fa-brands fa-github"></i>GitHub
            </a>
        </button>


    );
};

export default GithubButton;