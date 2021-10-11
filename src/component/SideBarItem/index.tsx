import { Link } from "react-router-dom";
import * as S from "./style";
import { ReactComponent as ProfileIcon } from "../../svgs/profile.svg";
import { ReactComponent as BookIcon } from "../../svgs/book.svg";
import { ReactComponent as MailIcon } from "../../svgs/mail.svg";

type Props = {
  title: string;
  description: string;
  icon: string;
  path: string;
  activeProp: boolean;
};

export const SidebarItem = ({
  title,
  description,
  icon,
  path,
  activeProp,
}: Props) => {
  return (
    <S.Container>
      <Link to={path}>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
        </S.Info>
        <S.IconArea active={activeProp}>
          {icon === "profile" && (
            <ProfileIcon fill="white" width={24} height={24} />
          )}
          {icon === "book" && <BookIcon fill="white" width={24} height={24} />}
          {icon === "mail" && <MailIcon fill="white" width={24} height={24} />}
        </S.IconArea>
        <S.Point active={activeProp}></S.Point>
      </Link>
    </S.Container>
  );
};
