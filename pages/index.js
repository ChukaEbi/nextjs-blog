import Link from "next/link";
import Date from "../components/date";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import FeatureGate from "../components/featureGate";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const userId = 42323;
  const featureId = "1";
  const otherFeatureId = "3";
  return {
    props: {
      allPostsData,
    },
  };
}
export default function Home({ allPostsData }) {
  const [user, setUser] = useState("")
  const router = useRouter()

  useEffect(() => {
    const stringifiedUser = localStorage.getItem("user")
    console.log(JSON.parse(stringifiedUser))
    setUser(JSON.parse(stringifiedUser))
  }, [])

  function logOut() {
    localStorage.setItem("user", null)
    router.push("/login")
  }

  function showFeature(text) {
    alert(text)
  }

  if (user == "") return ""
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <code>UserId: {user.external_id}</code>
        <br />
        <code>UserEmail: {user.email}</code>
        <p>
          Next big thing {" "}
          <a href="https://twitter.com/atulord" target="_blank">
            Twitter
          </a>
        </p>
        <p>
          Next unicorn right here 🦄
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <FeatureGate featureId="feature-one" userId={user.external_id}>
          <button onClick={() => showFeature("Basic feature")}>
            Feature One
          </button>
        </FeatureGate>

        <FeatureGate featureId="feature-two" userId={user.external_id}>
          <button onClick={() => showFeature("Premium feature")}>
            Feature two
          </button>
        </FeatureGate>

        {/* <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul> */}
        <br />
        <br />
        <button onClick={(e) => {
          e.preventDefault()
          logOut()
        }}>Log out</button>
      </section>
    </Layout>
  );
}
