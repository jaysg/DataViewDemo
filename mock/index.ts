export default {
  'GET /getComponentDataType': {
    code: '0',
    data: [
      // 'utilization',// utilization 利用率曲线 /api/v2/xxxxxx
      // 'alert',
      'alert_type_statistics'
    ]
  },
  'GET /getComponents': {
    code: '0',
    data: [
      { id: 1, scale: '3:2', name: '曲线图1号', thumbnail: 'https://test20190911.blob.core.chinacloudapi.cn/img/曲线缩略图.png' },
      { id: 2, scale: '3:2', name: '曲线图2号', thumbnail: 'https://test20190911.blob.core.chinacloudapi.cn/img/曲线缩略图.png' },
      { id: 3, scale: '3:2', name: '表格', thumbnail: 'https://test20190911.blob.core.chinacloudapi.cn/img/表格缩略图.png' },
      { id: 4, scale: '2:1', name: '在线率仪表盘', thumbnail: 'https://test20190911.blob.core.chinacloudapi.cn/img/仪表盘缩略图1.png' },
      { id: 5, scale: '2:1', name: '处理率仪表盘', thumbnail: 'https://test20190911.blob.core.chinacloudapi.cn/img/仪表盘缩略图2.png' },
      // { id: 6, scale: '2:1', name: '统计值', thumbnail: null },
      // { id: 7, scale: '18:11', name: '地图', thumbnail: null },
      // { id: 8, scale: '18:11', name: '3D建模', thumbnail: null },
      // { id: 9, scale: '5:1', name: '报警统计', thumbnail: null },
      // { id: 10, scale: '-1', name: '天气', thumbnail: null },
      // { id: 11, scale: '-1', name: '日期', thumbnail: null }
    ]
  },
  'GET /getExamples': {
    code: '0',
    data: [
      {
        id: 1,
        templateId: 1,
        name: '智能大数据可视化分析平台',
        thumbnail: 'https://test20190911.blob.core.chinacloudapi.cn/img/药明康德-大屏.png',
        blocks: [
          { key: 1, scale: '3:2', componentId: -1 },
          { key: 2, scale: '3:2', componentId: -1 },
          { key: 3, scale: '3:2', componentId: -1 },
          { key: 4, scale: '3:2', componentId: -1 },
          { key: 5, scale: '3:2', componentId: -1 },
          { key: 6, scale: '3:2', componentId: -1 },
          { key: 7, scale: '2:1', componentId: -1 },
          { key: 8, scale: '2:1', componentId: -1 },
          { key: 9, scale: '2:1', componentId: -1 },
          { key: 10, scale: '18:11', componentId: -1 },
          { key: 11, scale: '5:1', componentId: -1 },
          { key: 12, scale: '-1', componentId: -1 },
          { key: 13, scale: '-1', componentId: -1 }
        ]
      },
      {
        id: 2,
        templateId: 2,
        name: '一个不长的大屏标题',
        thumbnail: 'https://test20190911.blob.core.chinacloudapi.cn/img/实例缩略图.png',
        blocks: [
          { key: 1, scale: '3:2', componentId: -1 },
          { key: 2, scale: '3:2', componentId: -1 },
          { key: 3, scale: '3:2', componentId: -1 },
          { key: 4, scale: '3:2', componentId: -1 },
          { key: 5, scale: '3:2', componentId: -1 },
          { key: 6, scale: '3:2', componentId: -1 },
          { key: 7, scale: '2:1', componentId: -1 },
          { key: 8, scale: '2:1', componentId: -1 },
          { key: 9, scale: '2:1', componentId: -1 },
          { key: 10, scale: '18:11', componentId: -1 },
          { key: 11, scale: '5:1', componentId: -1 },
          { key: 12, scale: '-1', componentId: -1 },
          { key: 13, scale: '-1', componentId: -1 }
        ]
      },
      {
        id: 3,
        templateId: 2,
        name: '大屏标题',
        thumbnail: 'https://test20190911.blob.core.chinacloudapi.cn/img/实例缩略图.png',
        blocks: [
          { key: 1, scale: '3:2', componentId: -1 },
          { key: 2, scale: '3:2', componentId: -1 },
          { key: 3, scale: '3:2', componentId: -1 },
          { key: 4, scale: '3:2', componentId: -1 },
          { key: 5, scale: '3:2', componentId: -1 },
          { key: 6, scale: '3:2', componentId: -1 },
          { key: 7, scale: '2:1', componentId: -1 },
          { key: 8, scale: '2:1', componentId: -1 },
          { key: 9, scale: '2:1', componentId: -1 },
          { key: 10, scale: '18:11', componentId: -1 },
          { key: 11, scale: '5:1', componentId: -1 },
          { key: 12, scale: '-1', componentId: -1 },
          { key: 13, scale: '-1', componentId: -1 }
        ]
      }
    ]
  },
  'GET /getExample': {
    code: '0',
    data: {
      id: 1,
      name: '药明康德',
      thumbnail: 'https://test20190911.blob.core.chinacloudapi.cn/img/药明康德-大屏.png',
      blocks: [
        { key: 1, scale: '3:2', componentId: 1, title: 'LT标题带修改', dataType: 'alert_type_statistics', params: null },
        { key: 2, scale: '3:2', componentId: -1, title: 'LM标题带修改' },
        { key: 3, scale: '3:2', componentId: -1, title: 'LB标题带修改' },
        { key: 4, scale: '3:2', componentId: -1, title: 'RT标题带修改' },
        { key: 5, scale: '3:2', componentId: -1, title: 'RM标题带修改' },
        { key: 6, scale: '3:2', componentId: -1, title: null },
        { key: 7, scale: '2:1', componentId: -1 },
        { key: 8, scale: '2:1', componentId: -1 },
        { key: 9, scale: '2:1', componentId: -1 },
        { key: 10, scale: '18:11', componentId: -1 },
        { key: 11, scale: '5:1', componentId: -1 },
        { key: 12, scale: '-1', componentId: -1 },
        { key: 13, scale: '-1', componentId: -1 }
      ],
    }
  },
  'GET /getTemplates': {
    code: '0',
    data: [
      {
        id: 1, name: '1号模板',
        thumbnail: 'https://test20190911.blob.core.chinacloudapi.cn/img/模板缩略图.png',
        blocks: [
          { key: 1, scale: '3:2' }, { key: 2, scale: '3:2' }, { key: 3, scale: '3:2' },
          { key: 4, scale: '3:2' }, { key: 5, scale: '3:2' }, { key: 6, scale: '3:2' },
          { key: 7, scale: '2:1' }, { key: 8, scale: '2:1' }, { key: 9, scale: '2:1' },
          { key: 10, scale: '18:11' }, { key: 11, scale: '5:1' }, { key: 12, scale: null },
          { key: 13, scale: null },]
      },
      {
        id: 2, name: '2号模板',
        thumbnail: 'https://test20190911.blob.core.chinacloudapi.cn/img/模板缩略图.png',
        blocks: [
          { key: 1, scale: '3:2' }, { key: 2, scale: '3:2' }, { key: 3, scale: '3:2' },
          { key: 4, scale: '3:2' }, { key: 5, scale: '3:2' }, { key: 6, scale: '3:2' },
          { key: 7, scale: '2:1' }, { key: 8, scale: '2:1' }, { key: 9, scale: '2:1' },
          { key: 10, scale: '18:11' }, { key: 11, scale: '5:1' }, { key: 12, scale: null },
          { key: 13, scale: null },]
      },
      {
        id: 3, name: '3号模板',
        thumbnail: null,
        blocks: [
          { key: 1, scale: '3:2' }, { key: 2, scale: '3:2' }, { key: 3, scale: '3:2' },
          { key: 4, scale: '3:2' }, { key: 5, scale: '3:2' }, { key: 6, scale: '3:2' },
          { key: 7, scale: '2:1' }, { key: 8, scale: '2:1' }, { key: 9, scale: '2:1' },
          { key: 10, scale: '18:11' }, { key: 11, scale: '5:1' }, { key: 12, scale: null },
          { key: 13, scale: null },]
      },
    ]
  },
  'GET /getScales': {
    code: '0',
    data: []
  },
}