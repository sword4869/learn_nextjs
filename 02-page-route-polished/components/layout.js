import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/Image'
import styles from '/components/layout.module.css'
import utilStyles from '/styles/utils.module.css'

const name = 'Your Name'


// images must be inside the directory `public`. 
// so we should emit the prefix `/pubic`, which means that '/public/images/profile.png' is wrong. 
const picturePath = '/images/profile.png'

export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              src={picturePath}
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
              width={400}
              height={400}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  src={picturePath}
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                  width={400}
                  height={400}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
