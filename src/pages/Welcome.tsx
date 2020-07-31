/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import styles from './Welcome.less';
import {
  FullscreenOutlined,
  FullscreenExitOutlined,
  FormOutlined,
  SaveOutlined,
} from '@ant-design/icons';
import { Input, Form, Typography, Modal, Empty, Col, Row, Steps, Select, Alert } from 'antd';
import { useSelector, useDispatch } from 'dva';
import { ConnectState } from '@/models/connect';
import tline from '@/assets/1.png';
import { IndexState } from '@/models';

const { Step } = Steps;
const DataPage = () => {
  const [form] = Form.useForm();
  const [form2] = Form.useForm();
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const index: IndexState = useSelector((state: ConnectState) => state.index);
  const { example, editting, componentList = [] } = index;
  const [dataType, setDataType] = useState<any>();
  const [step, setStep] = useState(0);
  const [currComponentId, setCurrCompId] = useState<any>();
  const [error, setError] = useState<string>();
  const BlockONE = (key: string) => (
    <div style={{ margin: '3vh 0' }}>
      <div style={{ position: 'relative' }}>
        {editting ? (
          <Form.Item name={key} noStyle>
            <Input
              placeholder="输入组件标题"
              style={{
                position: 'absolute',
                top: '-3vh',
                background: 'transparent',
                border: 'dashed 1px gray',
                width: '35%',
                color: 'white',
              }}
            />
          </Form.Item>
        ) : (
          <Typography.Text
            style={{
              position: 'absolute',
              top: '-3vh',
              color: '#00F2FD',
              width: '35%',
              lineHeight: '40px',
              fontSize: '1vw',
            }}
            ellipsis
          >
            {form.getFieldValue(key) || '暂无标题'}
          </Typography.Text>
        )}
        <img alt="" src={tline} style={{ width: '100%', marginBottom: '1vh' }} />
      </div>
      <div className={styles.blk} style={{ height: '23vh' }}>
        <span>
          {editting ? (
            <a
              onClick={() => {
                dispatch({
                  type: 'index/fetchComponents',
                  callback: () => {
                    setVisible(true);
                  },
                });
              }}
            >
              选择组件{key}
            </a>
          ) : (
            `无组件(${key})`
          )}
        </span>
      </div>
    </div>
  );
  const TitleONE = (key: string) =>
    editting ? (
      <Form.Item name={key} noStyle>
        <Input
          placeholder="输入大屏标题"
          style={{ background: 'transparent', border: 'dashed 1px gray', color: 'white' }}
        />
      </Form.Item>
    ) : (
      form.getFieldValue(key) || '暂无标题'
    );
  useEffect(() => {
    dispatch({
      type: 'index/getComponents',
    });
    window.onbeforeunload = (e: any) => {
      e.returnValue = '要重新加载该网站吗？系统可能不会保存您所做的修改';
    };
  }, []);
  const initField = () => {
    const vals: any = {};
    if (example) {
      example.blocks.forEach((o: any) => {
        vals[`block${o.key}`] = o.title;
      });
    }
    return vals;
  };
  return (
    <Form
      form={form}
      initialValues={{
        title1: example?.name,
        ...initField(),
      }}
    >
      <div style={{ height: '100vh', width: '100vw' }}>
        <div className={styles.header}>
          <Typography.Text style={{ color: '#00F2FD', width: '17%' }} ellipsis>
            {TitleONE('title1')}
          </Typography.Text>
        </div>
        <div style={{ height: '90vh', display: 'flex' }}>
          <div style={{ flex: '0 0 22%', padding: '0 1%' }}>
            {BlockONE('block1')}
            {BlockONE('block2')}
            {BlockONE('block3')}
          </div>
          <div style={{ flex: '0 0 56%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div
                className={styles.blk}
                style={{ height: '15vh', marginTop: '3vh', marginBottom: '2vh', flex: '0 0 32%' }}
              >
                <span>{editting ? '选择组件' : '无组件'}</span>
              </div>
              <div
                className={styles.blk}
                style={{ height: '15vh', marginTop: '3vh', marginBottom: '2vh', flex: '0 0 32%' }}
              >
                <span>{editting ? '选择组件' : '无组件'}</span>
              </div>
              <div
                className={styles.blk}
                style={{ height: '15vh', marginTop: '3vh', marginBottom: '2vh', flex: '0 0 32%' }}
              >
                <span>{editting ? '选择组件' : '无组件'}</span>
              </div>
            </div>
            <div className={styles.blk} style={{ height: '46vh', marginBottom: '2vh' }}>
              <span>{editting ? '选择组件' : '无组件'}</span>
            </div>
            <div className={styles.blk} style={{ height: '18vh' }}>
              <span>{editting ? '选择组件' : '无组件'}</span>
            </div>
          </div>
          <div style={{ flex: '0 0 22%', padding: '0 1%' }}>
            {BlockONE('block4')}
            {BlockONE('block5')}
            {BlockONE('block6')}
          </div>
        </div>
        <Modal
          visible={visible}
          title="选择组件"
          width="60vw"
          okText={step === 2 ? '确定' : '下一步'}
          cancelText={step === 0 ? '取消' : '上一步'}
          onCancel={() => {
            if (step === 0) {
              setVisible(false);
              form2.resetFields();
            } else {
              setStep(step - 1);
            }
            setError(undefined);
          }}
          onOk={() => {
            switch (step) {
              case 0:
                if (!currComponentId) {
                  setError('请选择一个组件');
                } else {
                  setStep(1);
                }
                break;
              case 1:
              case 2:
                form2.submit();
                break;
              default:
                break;
            }
          }}
        >
          {error ? <Alert message={error} type="error" /> : null}
          <Steps
            style={{ marginTop: '2vh' }}
            current={step}
            onChange={current => {
              setStep(current);
            }}
          >
            <Step title="选择组件" description="选择一个组件." disabled />
            <Step title="选择数据类型" description="选择数据类型." disabled />
            <Step title="填充参数" description="填写组件所需参数." disabled />
          </Steps>
          {step === 0 ? (
            <Row gutter={24}>
              {componentList.length ? (
                componentList.map(o => (
                  <Col span={8} style={{ marginBottom: '2vh' }}>
                    <img
                      src={o.thumbnail}
                      alt="组件缩略图"
                      style={{
                        height: '20vh',
                        width: '100%',
                        cursor: 'pointer',
                        border: `solid 5px ${currComponentId === o.id ? 'orange' : 'transparent'}`,
                      }}
                      onClick={() => {
                        setCurrCompId(o.id);
                        setError(undefined);
                      }}
                    />
                  </Col>
                ))
              ) : (
                <Empty style={{ margin: '0 auto' }} />
              )}
            </Row>
          ) : null}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: step === 0 ? 0 : '20vh',
            }}
          >
            <Form
              form={form2}
              onFinish={values => {
                if (step === 1) {
                  const datatype = form2.getFieldValue('dataType');
                  if (datatype) {
                    setStep(2);
                  }
                }
                if (step === 2) {
                  setVisible(false);
                }
                console.log(values);
                setError(undefined);
              }}
              onFinishFailed={() => {
                setError('请完善数据');
              }}
            >
              <Form.Item
                name="dataType"
                label="数据类型"
                style={{ display: step === 1 ? 'block' : 'none' }}
                rules={[{ required: step === 1, message: ' ' }]}
              >
                <Select
                  onChange={val => {
                    setDataType(val);
                  }}
                  style={{ minWidth: 160 }}
                >
                  <Select.Option value="alert_type_statistics">事件类型统计</Select.Option>
                  <Select.Option value="alert_type_statistics2">事件类型统计2</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                style={{ display: step === 2 ? 'block' : 'none' }}
                name="id"
                label="设备ID"
                rules={[{ required: step === 2, message: ' ' }]}
              >
                <Input placeholder="请输入设备ID" />
              </Form.Item>
            </Form>
          </div>
        </Modal>
      </div>
    </Form>
  );
};

export default (): React.ReactNode => {
  const dispatch = useDispatch();
  const index: IndexState = useSelector((state: ConnectState) => state.index);
  const { fullScreen = false, editting = false, template, example } = index;
  function setFullScreen() {
    if (!fullScreen) {
      // dispatch({
      //   type: 'index/getExample',
      //   callback: () => {
      dispatch({ type: 'index/changeFullScreen', payload: true });
      localStorage.setItem('fullScreen', 'true');
      //   }
      // })
    } else {
      dispatch({
        type: 'index/changeFullScreen',
        payload: false,
        callback: () => {
          dispatch({ type: 'index/changeEditting', payload: false });
        },
      });
      localStorage.setItem('fullScreen', 'false');
      localStorage.setItem('editting', 'false');
    }
  }
  function setEditting() {
    if (editting) {
      dispatch({ type: 'index/changeEditting', payload: false });
      localStorage.setItem('editting', 'false');
    } else {
      dispatch({
        type: 'index/changeEditting',
        payload: true,
        callback: () => {
          dispatch({ type: 'index/changeFullScreen', payload: true });
        },
      });
      localStorage.setItem('fullScreen', 'true');
      localStorage.setItem('editting', 'true');
    }
  }
  function renderThumbnail() {
    const tempThumbnail = template ? template.thumbnail : null;
    const url = example ? example.thumbnail : tempThumbnail;
    return url && !fullScreen ? (
      <img alt="" src={url} style={{ width: '100%', height: '100%' }} />
    ) : (
      <span>
        {template?.name || '未选择模板'} {example?.name || '未选择实例'}
      </span>
    );
  }

  return (
    <div
      style={{
        paddingTop: fullScreen ? 0 : '4%',
        background: '#171B22',
        height: '100%',
        width: '100%',
        position: 'relative',
      }}
    >
      <div
        style={{
          margin: '0 auto',
          color: '#4990CB',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#05355D',
          border: '#12B3FF',
          width: fullScreen ? '100vw' : 960,
          height: fullScreen ? '100vh' : 540,
        }}
      >
        {fullScreen ? <DataPage /> : renderThumbnail()}
      </div>
      <div
        style={{
          margin: '0 auto',
          color: '#4990CB',
          width: 960,
          display: fullScreen ? 'none' : 'block',
        }}
      >
        {template?.name || '未选择模板'} | {example?.name || '未选择实例'}
      </div>
      <div
        style={{ position: 'absolute', right: 20, bottom: 20, display: example ? 'block' : 'none' }}
      >
        {!fullScreen ? (
          <FullscreenOutlined
            className={styles.btn}
            onClick={setFullScreen}
            style={{ marginRight: 10 }}
          />
        ) : (
          <FullscreenExitOutlined
            className={styles.btn}
            onClick={setFullScreen}
            style={{ marginRight: 10 }}
          />
        )}
        {!editting ? (
          <FormOutlined className={styles.btn} onClick={setEditting} />
        ) : (
          <SaveOutlined className={styles.btn} onClick={setEditting} />
        )}
      </div>
    </div>
  );
};
