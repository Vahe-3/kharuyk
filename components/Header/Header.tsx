import { FacebookOutlined, InstagramOutlined, MailOutlined } from '@ant-design/icons'
import { Typography } from 'antd'
import React from 'react'
import styles from "./Header.module.scss"

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <div className={styles.content_item}>
                    <div className={styles.logo}>
                        <img src="/kharuyk.jpg" alt="kharuyk logo" />
                    </div>
                    <div className={styles.title}>
                        <Typography.Title level={2}>«Խարույկ» արշավական ակումբ</Typography.Title>
                    </div>
                </div>
                <div className={styles.links}>
                    <FacebookOutlined style={{ fontSize: '30px', color: '#fff' }} />
                    <InstagramOutlined style={{ fontSize: '30px', color: '#fff' }} />
                    <MailOutlined style={{ fontSize: '30px', color: '#fff' }} />
                </div>
            </div>
        </header>
    )
}

export default Header