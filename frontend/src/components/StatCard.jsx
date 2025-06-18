import React from 'react';

const StatCard = ({ title, value, icon, color = '#4F46E5' }) => {
    return (
        <div
            style={{
                background: '#fff',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                padding: '24px',
                display: 'flex',
                alignItems: 'center',
                minWidth: '220px',
            }}
        >
            <div
                style={{
                    background: color + '22',
                    borderRadius: '50%',
                    width: 48,
                    height: 48,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 16,
                }}
            >
                {icon}
            </div>
            <div>
                <div style={{ fontSize: 14, color: '#6B7280', marginBottom: 4 }}>{title}</div>
                <div style={{ fontSize: 28, fontWeight: 700, color: color }}>{value}</div>
            </div>
        </div>
    );
};

export default StatCard;