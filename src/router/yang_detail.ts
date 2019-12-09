import YangDetailGit from '@/pages/yang/detail/git.vue';
import YangDetailUnicode from '@/pages/yang/detail/unicode.vue';

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
];


export default yang_router;
