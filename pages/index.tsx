import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Main from '@/components/main/main'
import Services from '@/components/servicess/services';
import Join from '@/components/join/join';

export default function Home() {
  return (
    <>
    <Main/>
    <Services/>
    <Join/>
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