import { Nav } from '@/components/nav';
import useLocalizeDocumentAttributes from '@/hooks/use-localized-document-attributes';

export default function Layout({ children }: { children: React.ReactNode }) {
  useLocalizeDocumentAttributes();

  return (
    <>
      <Nav />
      <main>{children}</main>
    </>
  );
}
