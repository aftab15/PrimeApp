import { Link } from "react-router-dom";

const FormHelpText = ({ text, link, linktext }) => {
  return (
    <div className="form-group">
      <p className="text-sm font-normal text-gray-500">
        {text}{" "}
        <Link replace to={link} className="text-blue-700 font-medium text-sm">
          {linktext}
        </Link>
      </p>
    </div>
  );
};

export default FormHelpText;
