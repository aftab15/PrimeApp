import FormHelpText from "./FormHelpText";

const FormHeader = ({ heading, subheading, link, linktext }) => {
  return (
    <div className="form-group">
      <h3 className="text-2xl font-bold">{heading}</h3>
      <FormHelpText text={subheading} link={link} linktext={linktext} />
    </div>
  );
};

export default FormHeader;
