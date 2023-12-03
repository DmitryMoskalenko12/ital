import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Main from '@/components/main/main';

export default function Home() {
  return (
    <>
    <Main/>
    </>
  )
}

export async function getStaticProps({locale}: {locale: string}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['main']))
    }
  }
}