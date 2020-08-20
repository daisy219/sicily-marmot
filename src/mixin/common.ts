import { Vue, Component } from 'vue-property-decorator';
import { BASE_TITLE } from '@/constant/common';

@Component
export default class CommonMixin extends Vue {
  private set_title(title: string) {
    (this.$router as any).options.routes[0].children.find((a: any) => a.name === 'content').meta.title = title + '-' + BASE_TITLE;
  }
}
