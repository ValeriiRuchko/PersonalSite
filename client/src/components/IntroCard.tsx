type CardProps = {
  title: string;
  content: string;

  className: string[];
};

function IntroCard(props: CardProps) {
  return (
    <div className={props.className[0]}>
      <div className={`${props.className[1]}`}>
        <div className={`${props.className[0]}_title`}>
          <h2>{props.title}</h2>
        </div>
        <div className={`${props.className[0]}_content`}>
          <p>{props.content}</p>
        </div>
      </div>
    </div>
  );
}

export default IntroCard;
