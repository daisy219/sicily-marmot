import YangDetailGit from '@/pages/yang/detail/git.vue';
import YangDetailUnicode from '@/pages/yang/detail/unicode.vue';
import YangDetailBabel from '@/pages/yang/detail/babel_webpack.vue';

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
    path: '/yang_detail_babel',
    name: 'yang_detail_babel',
    component: YangDetailBabel,
  },
];


export default yang_router;
