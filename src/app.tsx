import { Trans } from 'react-i18next';
import LocaleSwitcher from '@/components/locale-switch';
import useLocalizeDocumentAttributes from '@/hooks/use-localized-document-attributes';

export default function App() {
  useLocalizeDocumentAttributes();

  return (
    <>
      <LocaleSwitcher />
      <Trans i18nKey="hello" values={{ name: 'John' }} />
    </>
  );
}
