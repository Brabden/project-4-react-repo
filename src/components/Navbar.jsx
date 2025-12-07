import { useState } from 'react';

const Navbar = () => {
    const [activeTab, setActiveTab] = useState('people');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        console.log(`Switched to ${tab} view`);
    };

    return (
        <nav style={styles.navbar}>
            <div style={styles.brand}>
                <h2>🎁 Gift Tracker</h2>
            </div>
            
            <ul style={styles.menu}>
                <li 
                    style={{
                        ...styles.menuItem,
                        ...(activeTab === 'people' ? styles.active : {})
                    }}
                    onClick={() => handleTabClick('people')}
                >
                    People
                </li>
                <li 
                    style={{
                        ...styles.menuItem,
                        ...(activeTab === 'gifts' ? styles.active : {})
                    }}
                    onClick={() => handleTabClick('gifts')}
                >
                    Gifts
                </li>
            </ul>

            <div>
                <button 
                    style={styles.userButton}
                    onClick={() => alert('Profile feature coming soon!')}
                >
                    👤 Profile
                </button>
            </div>
        </nav>
    );
};

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px 32px',
        backgroundColor: 'darkred',
        color: 'white'
    },
    brand: {
        margin: 0
    },
    menu: {
        display: 'flex',
        listStyle: 'none',
        gap: '32px',
        margin: 0,
        padding: 0
    },
    menuItem: {
        cursor: 'pointer',
        padding: '8px 16px',
        borderRadius: '5px',
        transition: 'background 0.3s'
    },
    active: {
        backgroundColor: 'maroon',
        fontWeight: 'bold'
    },
    userButton: {
        padding: '8px 16px',
        backgroundColor: 'green',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
    }
};

export default Navbar;