import PropTypes from "prop-types";

const ButtonPrimary = ({ label, href, target = "_self", icon, classes }) => {
  if (href) {
    return (
      <a href={href} target={target} className={`btn btn-primary ${classes}`}>
        {label}
        {icon ? (
          <span className="material-symbols-rounded">{icon}</span>
        ) : undefined}
      </a>
    );
  } else {
    return <button className={`btn btn-primary ${classes}`}>{label}</button>;
  }

  ButtonPrimary.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string,
  };
};

const ButtonOutline = ({ label, href, target = "_self", icon, classes }) => {
  if (href) {
    return (
      <a href={href} target={target} className={`btn btn-outline + ${classes}`}>
        {label}
        {icon ? (
          <span className="material-symbols-rounded">{icon}</span>
        ) : undefined}
      </a>
    );
  } else {
    return <button className={`btn btn-outline + ${classes}`}>{label}</button>;
  }

  ButtonOutline.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string,
  };
};

export { ButtonPrimary, ButtonOutline };
