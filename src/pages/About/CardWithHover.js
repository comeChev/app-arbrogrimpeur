import React from "react";
import ButtonWithIcon from "../../components/ui/buttons/ButtonWithIcon";

const CardWithHover = ({
  icon,
  text,
  to,
  onMouseOver,
  content,
  onMouseOut,
}) => {
  return (
    <div
      className="relative group flex md:flex-col w-full sm:w-3/4 md:w-auto"
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      <ButtonWithIcon text={text} icon={icon} to={to}>
        <div className="mx-2 hidden bg-white rounded-md shadow-md flex-wrap">
          <p className="">{content}</p>
        </div>
      </ButtonWithIcon>
    </div>
  );
};

export default CardWithHover;
