import { Effect } from 'dva';
import { Reducer } from 'redux';
import { message } from 'antd';
import { getComponents, getExamples, getTemplates, getExample } from '@/services';

export interface IndexState {
  editting?: boolean;
  fullScreen?: boolean;
  scaleList?: string[];// 4-3、16-10
  componentList?: ComponentState[]
  template?: Template;
  example?: Example;
  scale?: string;
}

export interface IndexModelType {
  namespace: 'index';
  state: IndexState;
  effects: {
    fetchTemplates?: Effect;
    fetchExamples?: Effect;
    fetchComponents?: Effect;
    addExample?: Effect;
    putExample?: Effect;
    getExample?: Effect;
    changeFullScreen?: Effect;
    changeEditting?: Effect;
  };
  reducers: {
    updateToView: Reducer<IndexState>
  };
}
export interface Block {
  key: string | number;
  scale: string;
  componentId: number;
  title: string;
}
export interface Template {
  id: number;
  name: string;
  blocks: any[];
  thumbnail?: string;
}
export interface Example {
  id: number;
  templateId: number;
  name: string;
  blocks: Block[];
  thumbnail?: string;

}
export interface ComponentState {
  id: number;
  scale: string;
  name: string;
  thumbnail?: string;
}


const IndexModel: IndexModelType = {
  namespace: 'index',

  state: {
    fullScreen: false,
    scaleList: ['1920*1080', '1366*768', '1280*768', '1024*768']
  },

  effects: {
    *fetchTemplates({ payload, callback }, { call, put }) {
      console.log('获取模板列表:', payload)
      if (!payload) {
        if (callback) callback([])
        return;
      }
      const res = yield call(getTemplates, payload)
      if (callback) callback(res.data)
    },
    *fetchExamples({ payload, callback }, { call, put }) {
      console.log('获取实例列表:', payload)
      if (!payload) {
        if (callback) callback([])
        return;
      }
      const res = yield call(getExamples, payload)
      if (callback) callback(res.data)
    },
    *fetchComponents({ payload, callback }, { call, put }) {
      console.log('获取组件列表:', payload)
      const res = yield call(getComponents, payload)
      yield put({
        type: 'updateToView',
        payload: {
          componentList: res.data
        }
      })
      if (callback) callback()
    },
    *addExample({ payload, callback }, { call, put }) {
      console.log('添加实例:', payload)
      message.success('添加实例成功');
      if (callback) yield call(callback)
    },
    *putExample({ payload, callback }, { call, put }) {
      console.log('修改实例:', payload)
      message.success('修改实例成功');
      if (callback) yield call(callback)
    },
    *changeFullScreen({ payload, callback }, { call, put }) {
      console.log('fullScreen:', payload)
      yield put({
        type: 'updateToView',
        payload: {
          fullScreen: payload
        }
      })
      if (callback) callback()
    },
    *changeEditting({ payload, callback }, { call, put }) {
      console.log('editting:', payload)
      yield put({
        type: 'updateToView',
        payload: {
          editting: payload
        }
      })
      if (callback) callback()
    },
    *fetchExample({ payload, callback }, { call, put }) {
      console.log('fetchExample:', payload)
      const res = yield call(getExample, payload);
      yield put({ type: 'updateToView', payload: { example: res.data } });
      if (callback) callback(res.data)
    },
  },

  reducers: {
    updateToView(state, { payload }) {
      return {
        ...state,
        ...payload
      };
    }
  },
};

export default IndexModel;
