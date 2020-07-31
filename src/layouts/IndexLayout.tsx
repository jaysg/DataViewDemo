import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import { ConnectState } from '@/models/connect';
import { GlobalModelState } from '@/models/global';
import { Layout, Avatar, Typography } from 'antd';
import defaultSettings from '../../config/defaultSettings';
import styles from './index.less';
import { Dispatch } from 'redux';
import { UserModelState } from '@/models/user';
import { Link } from 'umi';
import { IndexState, Template, Example } from '@/models';
import { EditOutlined } from '@ant-design/icons';
const { Header, Footer, Sider, Content } = Layout;

export interface IndexLayoutProps {
    global: GlobalModelState;
    user: UserModelState;
    index: IndexState
    dispatch: Dispatch;
}
const IndexLayout: React.FC<IndexLayoutProps> = props => {
    const { dispatch, children,
        global: { collapsed },
        user: { currentUser },
        index: {
            scaleList = [], fullScreen = false
        }
    } = props;
    const [scale, setScale] = useState(localStorage.getItem('set_scale'));
    const [templateId, setTemplateId] = useState<any>(localStorage.getItem('set_templateId'));
    const [exampleId, setExampleId] = useState<any>(localStorage.getItem('set_exampleId'));
    const [exampleList, setExampleList] = useState<any[]>([]);
    const [templateList, setTemplateList] = useState<any[]>([]);
    const [example, setExample] = useState<any>();
    useEffect(() => {
        if (scale) {
            dispatch({ type: 'index/fetchTemplates', payload: scale, callback: (list: any[]) => { setTemplateList(list) } })
            localStorage.setItem('set_scale', scale)
        }
    }, [scale])
    useEffect(() => {
        dispatch({ type: 'index/fetchExamples', payload: templateId, callback: (list: any[]) => { setExampleList(list) } })
    }, [templateId])
    useEffect(() => {
        if (exampleId)
            dispatch({ type: 'index/fetchExample', payload: exampleId, callback: (data: any) => { setExample(data) } })
    }, [exampleId])

    function handleMenuCollapse(payload: boolean) {
        if (dispatch) {
            dispatch({ type: 'global/changeLayoutCollapsed', payload })
        }
    }

    return !fullScreen ? (
        <Layout style={{ height: '100vh' }}>
            <Header className={styles.header}>
                {
                    currentUser ? (
                        <div className={styles.avatar}>
                            <Avatar
                                src={currentUser.avatar || 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png'}
                                size={36}
                            // alt={avatar ? '' : name}
                            />
                            <Typography.Text className={styles.font} strong>
                                {currentUser.name}
                            </Typography.Text>
                            <Link to='/user/login'>退出</Link>
                        </div>
                    ) : <Link to='/user/login'>
                            <Typography.Text className={styles.font} strong>
                                用户信息异常，请重新登陆
                                </Typography.Text>
                        </Link>
                }
            </Header>
            <Layout style={{ height: 'calc(100vh - 64px)', minHeight: 'calc(100vh - 64px)' }}>
                <Sider
                    collapsed={collapsed}
                    collapsedWidth={0}
                    collapsible={true}
                    onCollapse={handleMenuCollapse}
                    theme='dark'
                    zeroWidthTriggerStyle={{
                        borderRadius: '0 6px 6px 0',
                        marginTop: '-53px',
                        marginLeft: '6px',
                        color: 'white',
                        background: defaultSettings.primaryColor
                    }}
                    width={300}
                    style={{ padding: 20, height: 'calc(100vh - 64px)', overflowY: 'auto', overflowX: 'hidden' }}
                >
                    <div className={styles.siderTitle}>选择屏幕比例</div>
                    <div className={styles.scaleBox}>
                        {
                            scaleList.map(o => {
                                return <span className={o !== scale ? styles.scaleBlock : styles.scaleBlockChk} onClick={() => {
                                    setScale(o)
                                    localStorage.setItem('set_scale', o)
                                }}> {o}</span>
                            })
                        }
                    </div>
                    <div className={styles.siderTitle} style={{ display: templateList.length ? 'block' : 'none' }}>选择大屏模板</div>
                    <div className={styles.thumbnailBox}>
                        {
                            templateList.map(o => {
                                return <div className={o.id.toString() !== templateId && o.id !== templateId ? styles.thumbnailBlock : styles.thumbnailBlockChk}
                                    onClick={() => {
                                        setTemplateId(o.id);
                                        localStorage.setItem('set_templateId', o.id)
                                    }}>
                                    <img className={styles.thumbnail} src={o.thumbnail || 'https://test20190911.blob.core.chinacloudapi.cn/img/模板缩略图.png'}></img>
                                    <div className={styles.blockName}>
                                        <Typography.Text className={styles.blockName} style={{ width: '90%' }} ellipsis>
                                            <span>{o.name}</span>
                                        </Typography.Text>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    <div className={styles.siderTitle} style={{ display: exampleList.length ? 'block' : 'none' }}>预览实例</div>
                    <div className={styles.thumbnailBox}>
                        {
                            exampleList.map(o => {
                                return <div className={o.id.toString() !== exampleId && o.id !== exampleId ? styles.thumbnailBlock : styles.thumbnailBlockChk}
                                    onClick={() => {
                                        setExampleId(o.id)
                                        localStorage.setItem('set_exampleId', o.id)
                                    }}>
                                    <img className={styles.thumbnail} src={o.thumbnail || 'https://test20190911.blob.core.chinacloudapi.cn/img/实例缩略图.png'}></img>
                                    <div className={styles.blockName}>
                                        <Typography.Text className={styles.blockName} style={{ width: '90%' }} ellipsis>
                                            <span>{o.name}</span>
                                        </Typography.Text>
                                        <EditOutlined style={{ float: 'right', display: o.id === example?.id ? 'block' : 'none' }} />
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </Sider>
                <Content className={styles.content}>
                    {children}
                </Content>
            </Layout>
            {/* <Footer>Footer</Footer> */}
        </Layout >
    ) : children
}

export default connect(({ global, user, index }: ConnectState) => ({
    global, user, index
}))(IndexLayout);