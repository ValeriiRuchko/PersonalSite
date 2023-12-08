type CardProps = {
  title: string;
  content: string;

  className: string[];
};

function IntroCard(props: CardProps) {
  return (
    <div className={props.className[0]}>
      <div className={`${props.className[1]}`}>
        <div
          className={
            props.className.length === 2
              ? `${props.className[0]}__title`
              : `${props.className[0]}__title ${props.className
                .slice(2)
                .join(" ")}`
          }
        >
          <h3>{props.title}</h3>
        </div>
        <div className={`${props.className[0]}__content`}>
          <p>{props.content}</p>
        </div>
      </div>
    </div>
  );
}

export default IntroCard;
