export function generateStaticParams() {
  const slugs = ["1", "2", "3"];
  return slugs.map((slug) => ({ slug }));
}

const ProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  return <div>Product : {slug}</div>;
};

export default ProductPage;
