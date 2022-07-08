interface CardConfig {
  title: string;
  text: string;
  icon?: JSX.Element;
  redirect?: string;
}

function CardComponent({ text, title, icon, redirect }: CardConfig) {
  const config = {
    title: title,
    text: text,
    icon: icon,
    redirect: redirect ? redirect : "/",
  };

  const titleCss = config.icon ? `flex justify-between` : `self-center`;

  return (
    <div className="p-1 shadow-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-2xl w-full max-w-md m-2">
      <a
        rel="noreferrer"
        target="_blank"
        className="flex flex-col p-6 bg-white sm:p-8 rounded-xl"
        href={config.redirect}
      >
        <div className={titleCss}>
          <h5 className="text-xl font-bold text-gray-900">{config.title}</h5>
          {config.icon ? config.icon : null}
        </div>

        <p className="self-center mt-2 text-sm text-gray-500">{config.text}</p>
      </a>
    </div>
  );
}

export default CardComponent;
