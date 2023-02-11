import React from 'react'
import styles from '../styles/Layout.module.css';
import Navbar from './Navbar';

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <div>
                <main className={styles.main}>
                    {children}
                </main>
            </div>
        </>
    )
    // need to add a footer to this page => this component makes sure everything inside it
    // shows up on every page
}