import MingDetailMeasureText from '@/pages/ming/detail/measureText.vue';
import MingDetailEditorTest from '@/pages/ming/detail/editorTest.vue';
import MingDetailArticleTemplate from '@/pages/ming/detail/articleTemplate.vue';

const ming_router: COMMON_TYPE.RouterType[] = [
  {
    path: '/ming_detail_measureText',
    name: 'ming_detail_measureText',
    component: MingDetailMeasureText,
  }, {
    path: '/ming_detail_editorTest',
    name: 'ming_detail_editorTest',
    component: MingDetailEditorTest,
  }, {
    path: '/ming_detail_articleTemplate',
    name: 'ming_detail_articleTemplate',
    component: MingDetailArticleTemplate,
  },
];


export default ming_router;
