const FormWrapper = ({ children }) => {
  return (
    <div className="w-full max-w-md grid items-center gap-10 p-4">
      {children}
    </div>
  );
};

export default FormWrapper;
