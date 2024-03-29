import Head from 'next/head';
import ContactForm from '@/components/contact/contact-form';

function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact | NextJS Blog</title>
        <meta name="description" content="Send me your message" />
      </Head>
      <ContactForm />;
    </>
  );
}

export default ContactPage;
