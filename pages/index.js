import Layout from "../components/Layout";
import Body from "../components/Body";
import Meta from "../components/Meta";

export default function Home() {
  return (
    <Layout>
      <Meta
        title={`D&D Agency`}
        excerpt="An agency you can trust, UI/UX design, Web and App development"
      />
        <Body />
      </Layout>
  );
}
