import { FC } from "react";
import styles from "./SocialLink.module.scss";

interface SocialLinkProps {
  icon: JSX.Element;
  url: string;
}

const SocialLink: FC<SocialLinkProps> = (props) => {
  const { icon, url } = props;
  return (

      <a className={styles.socialLink} href={url}>
        {icon}
      </a>

  );
};

export default SocialLink;
