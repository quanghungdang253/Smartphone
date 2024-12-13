import React from 'react';
import styles from './CommunicationSettings.module.scss'
import ContactInformation from '../ContactInformation/ContactInformation';
function CommunicationSettings(props) {
    return (
        <div className={styles.Container}>
                    <ContactInformation/>
        </div>
    );
}

export default CommunicationSettings;