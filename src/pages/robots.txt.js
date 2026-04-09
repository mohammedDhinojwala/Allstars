export default function Robots() {
  return null;
}

export async function getServerSideProps({ res }) {
  res.setHeader('Content-Type', 'text/plain');
  res.write(`User-agent: *
Allow: /
Sitemap: https://www.alllstars.com/sitemap.xml`);
  res.end();

  return { props: {} };
}