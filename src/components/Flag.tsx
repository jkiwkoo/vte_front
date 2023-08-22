import { China } from '@/assets/China';
import { Korea } from '@/assets/Korea';
import { USA } from '@/assets/USA';

type FlagProps = {
  lang?: string;
};

export const Flag = ({ lang }: FlagProps) => {
  switch (lang) {
    case 'en':
      return <USA className="h-[28px] w-[28px]" />;
    case 'kr':
      return <Korea className="h-[28px] w-[28px]" />;
    case 'cn':
      return <China className="h-[28px] w-[28px]" />;
    default:
      return <Korea className="h-[28px] w-[28px]" />;
  }
};
