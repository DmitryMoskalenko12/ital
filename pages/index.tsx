import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Main from '@/components/main/main'
import Services from '@/components/servicess/services';

export default function Home() {
  return (
    <>
    <Main/>
    <Services/>
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