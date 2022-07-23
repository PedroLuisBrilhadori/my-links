import Icons from "../icons";

export interface CardConfig {
  title: string;
  text: string;
  icon?: string;
  redirect?: string;
}

function CardComponent({ text, title, icon, redirect }: CardConfig) {
  const config = {
    title: title,
    text: text,
    icon: icon,
    redirect: redirect ? redirect : "/",
  };

  if (config.icon) {
    const keys = Object.keys(Icons);

    const icon = keys.filter((key) => {
      return key === config.icon;
    });

    if (!icon[0]) {
      throw new Error(`Icon: ${icon} not found in Icons`);
    }
  }

  const titleCss = config.icon ? `flex justify-between` : `self-center`;

  return (
    <div className="p-1 shadow-xl bg-gradient-to-r from-blue-700 via-purple-500 to-blue-900 rounded-2xl w-full mt-2">
      <a
        rel="noreferrer"
        target="_blank"
        className="flex flex-col p-6 bg-white sm:p-8 rounded-xl"
        href={config.redirect}
      >
        <div className={titleCss}>
          <h5 className="text-xl font-bold text-gray-900">{config.title}</h5>
          {
            //@ts-ignore
            config.icon ? Icons[config.icon] : null
          }
        </div>

        <p className="self-center mt-2 text-sm text-gray-500">{config.text}</p>
      </a>
    </div>
  );
}

export default CardComponent;
