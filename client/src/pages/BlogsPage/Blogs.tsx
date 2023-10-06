type BlogsPageProps = {
  className: string;
};

function Blogs(props: BlogsPageProps) {
  return (
    <div className={`${props.className}`}>
      <h1>THIS IS BLOGS PAGE</h1>
    </div>
  );
}

export default Blogs;
