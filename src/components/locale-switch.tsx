import { supportedLngs } from '@/i18n';
import { useTranslation } from 'react-i18next';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

export default function LocaleSwitcher() {
  const { i18n } = useTranslation();

  return (
    <Select value={i18n.resolvedLanguage} onValueChange={i18n.changeLanguage}>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {Object.entries(supportedLngs).map(([code, name]) => (
          <SelectItem value={code} key={code}>
            {name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
