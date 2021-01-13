<template>
    <div id = "user">
      <a-table :columns="columns" :data-source="data">
    <a slot="action"  href="javascript:;">同意面试</a>

    <a> slot="action"  href="javascript:;">  驳回</a>

    <p slot="expandedRowRender" slot-scope="record" style="margin: 0">
      专业：{{record.description.zhuanye}}
      学历：{{record.description.school}}
      毕业学校：{{record.description.schoolname}}
      技能：{{record.description.skill}}
      就业经历:{{record.description.jingli}}
      兴趣爱好:{{record.description.hobby}}

    </p>
  </a-table>
    </div>
</template>
<script>
const columns = [
  { title: '姓名', dataIndex: 'name', key: 'name' },
  { title: '年龄', dataIndex: 'age', key: 'age' },
  { title: '性别', dataIndex: 'sex', key: 'sex' },
  { title: '操作', dataIndex: '', key: 'x', scopedSlots: { customRender: 'action' } },
];

const data = [
  {
    key: 1,
    name: 'John Brown',
    age: 32,
    sex: '男',
    description: {
              school:"本科",
              zhuanye:'信息管理与信息系统',
              skill:'英语四级，熟悉使用office',
              schoolname:'北大',
              jingli:'无',
              hobby:'游戏'

    }
  },
  {
    key: 2,
    name: 'Jim Green',
    age: 42,
    sex: '女',
      description: {
            school:"本科",
            zhuanye:'信息管理与信息系统',
            skill:'英语四级，熟悉使用office',
            schoolname:'北大',
            jingli:'无',
            hobby:'游戏'
  }
  },
  {
    key: 3,
    name: 'Joe Black',
    age: 32,
    sex: '男',
      description: {
            school:"本科",
            zhuanye:'信息管理与信息系统',
            skill:'英语四级，熟悉使用office',
            schoolname:'北大',
            jingli:'无',
            hobby:'游戏'
  }
  },
];

export default {
    name:'user',
    data() {
    return {
      data,
      columns,
    };
  },
}
</script>