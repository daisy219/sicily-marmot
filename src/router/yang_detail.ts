import YangDetailGit from '@/pages/yang/detail/git.vue';
import YangDetailUnicode from '@/pages/yang/detail/unicode.vue';
import YangDetailBabel1 from '@/pages/yang/detail/babel_webpack_1.vue';
import YangDetailBabel2 from '@/pages/yang/detail/babel_webpack_2.vue';
import YangDetailBabel3 from '@/pages/yang/detail/babel_webpack_3.vue';

const yang_router: COMMON_TYPE.RouterType[] = [
  {
    path: '/yang_detail_git',
    name: 'yang_detail_git',
    component: YangDetailGit,
  },
  {
    path: '/yang_detail_unicode',
    name: 'yang_detail_unicode',
    component: YangDetailUnicode,
  },
  {
    path: '/yang_detail_babel_1',
    name: 'yang_detail_babel_1',
    component: YangDetailBabel1,
  },
  {
    path: '/yang_detail_babel_2',
    name: 'yang_detail_babel_2',
    component: YangDetailBabel2,
  },
  {
    path: '/yang_detail_babel_3',
    name: 'yang_detail_babel_3',
    component: YangDetailBabel3,
  },
];


export default yang_router;
