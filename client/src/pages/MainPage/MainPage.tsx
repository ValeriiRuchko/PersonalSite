import "../../styles/App.scss";

type MainPageProps = {
  className: string;
};

function MainPage(props: MainPageProps) {
  return (
    <div className={`${props.className}`}>
      <h1>THIS IS MAIN PAGE</h1>
    </div>
  );
}

export default MainPage;
