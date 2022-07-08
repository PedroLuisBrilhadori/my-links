import EmailIcon from "./email";
import GithubIcon from "./github";
import WhatsappIcon from "./whatsapp";
import LinkedinIcon from "./linkedin";

export { default as EmailIcon } from "./email";
export { default as WhatsappIcon } from "./whatsapp";
export { default as GithubIcon } from "./github";
export { default as LinkedinIcon } from "./linkedin";

const Icons = {
  EmailIcon: EmailIcon(),
  WhatsappIcon: WhatsappIcon(),
  GithubIcon: GithubIcon(),
  LinkedinIcon: LinkedinIcon(),
};

export default Icons;
