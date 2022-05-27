import React from 'react'
import {Icon} from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire-alert';

const Header = () => {
    return (
        <header>
            <h1><Icon icon={locationIcon}/> WildFire Tracker</h1>
        </header>
    )
}

export default Header

