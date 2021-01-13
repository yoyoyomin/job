<template>
    <div id = "selecttable">
    <a-table :columns="columns" :data-source="zhiye"  >
    <a slot="name" slot-scope="text">{{ text }}</a>
    <span slot="customTitle"><a-icon type="smile-o" /> Name</span>
    <span slot="tags" slot-scope="tags">
      <a-tag
        v-for="tag in tags"
        :key="tag"
        :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
      >
        {{ tag.toUpperCase() }}
      </a-tag>
    </span>
    <span slot="action" slot-scope="text, record">
      <a>Invite 一 {{ record.name }}</a>
      <a-divider type="vertical" />
      <a>Delete</a>
      <a-divider type="vertical" />
      <a class="ant-dropdown-link"> More actions <a-icon type="down" /> </a>
    </span>
  </a-table>
</div>

</template>
<script>
const columns = [
  {
    title:'职位信息',
    dataIndex: 'name',
    key: 'name',
    slots: { title: 'customTitle' },
    scopedSlots: { customRender: 'name' },
  },
  {
    title: '发布日期',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: '发布人员',
    dataIndex: 'user',
    key: 'user',
  },
  {
    title: '发布状态',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: '职位类型',
    key: 'tags',
    dataIndex: 'tags',
    scopedSlots: { customRender: 'tags' },
  },
  {
    title: '操作',
    key: 'action',
    scopedSlots: { customRender: 'action' },
  },
];

const zhiye = [
  {
    key: '1',
    name: 'John Brown',
    date: '2020-3-4',
    user: '李雷',
    status:'审核通过',
    tags: ['会计', '审计'],
  },
  {
    key: '2',
    name: 'Jim Green',
    date: '2020-3-5',
    user: '蓝良',
    status:'审核通过',
    tags: ['前端工程师'],
  },
  {
    key: '3',
    name: 'Joe Black',
    date: '2020-3-5',
    user: '蓝良',
    status:'审核通过',
    tags: ['前端工程师'],
  },
  {
  key: '4',
  name: 'Joe Black',
  date: '2020-3-5',
  user: '蓝良',
  status:'审核通过',
  tags: ['前端工程师'],
},
{
  key: '5',
  name: 'Joe Black',
  date: '2020-3-5',
  user: '蓝良',
  status:'审核通过',
  tags: ['前端工程师'],
},
{
  key: '6',
  name: 'Joe Black',
  date: '2020-3-5',
  user: '蓝良',
  status:'审核通过',
  tags: ['前端工程师'],
},
{
  key: '7',
  name: 'Joe Black',
  date: '2020-3-5',
  user: '蓝良',
  status:'审核通过',
  tags: ['前端工程师'],
},
{
  key: '8',
  name: 'Joe Black',
  date: '2020-3-5',
  user: '蓝良',
  status:'审核通过',
  tags: ['前端工程师'],
},
{
  key: '9',
  name: 'Joe Black',
  date: '2020-3-5',
  user: '蓝良',
  status:'审核通过',
  tags: ['前端工程师'],
},
{
  key: '10',
  name: 'Joe Black',
  date: '2020-3-5',
  user: '蓝良',
  status:'审核通过',
  tags: ['前端工程师'],
},
{
  key: '11',
  name: 'Joe Black',
  date: '2020-3-5',
  user: '蓝良',
  status:'审核通过',
  tags: ['前端工程师'],
},
];
export default {
    name:"zhiweitable",
    data(){
        return{
             zhiye,
             columns
        }
    }
}
</script>