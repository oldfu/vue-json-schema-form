module.exports = {
  name: '字符串',
  schema: {
    type: 'object',
    vjsf: {
      title: '字符串用例',
    },
    default: {
      simple: '123',
    },
    required: ['simple'],
    properties: {
      const: {
        type: 'string',
        const: 'jokcy',
        vjsf: {
          title: '固定值',
        },
      },
      simple: {
        type: 'string',
        minLength: 1,
        default: 'haha',
        vjsf: {
          placeholder: '请输入普通字符串',
          title: '普通字符串',
        },
      },
      image: {
        type: 'string',
        format: 'image',
        title: '图片',
      },
      color: {
        type: 'string',
        format: 'color',
        title: '颜色选择',
      },
      select: {
        type: 'string',
        vjsf: {
          title: '选择',
          placeholder: '选择框啦',
        },
        enumKeyValue: [
          {
            key: 'option1',
            value: '1',
          },
          {
            key: 'option2',
            value: '2',
          },
          {
            key: 'option3',
            value: '3',
          },
        ],
      },
    },
  },
}
