import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Having development background, with a year of experience in designing,
          developing and maintaining web projects using different tools and
          technologies. <br></br> <br></br>
          {/* Expertise:<br></br><br></br><br></br>
          - HTML, CSS, JavaScript, Java, ReactJS, AngularJS, NodeJS, <br></br><br></br>
          - Web services (Restful APIs) <br></br><br></br>
          - SQL Server2000/2005, MySQL Database Knowledge About: - MERN/MEAN Stack Core<br></br><br></br>
          Competencies:<br></br><br></br><br></br>
          - Professional reputation as intelligent, creative and hardworking.<br></br><br></br>
          - Good interpersonal skills, communication skills and a
          team player.<br></br><br></br>
          - Ability to perform well under a fast paced environment
          and multiple assignments.<br></br><br></br>
          - Analysis and Reporting.<br></br><br></br>
          - Problem Solving and Decision Making Love the web and developing for it as well as
          breaking its conventions. */}
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
