const FormWrapper = ({ children }) => {
  return (
    <div className="w-full max-w-md grid items-center gap-10 p-6 sm:px-8">
      {children}
    </div>
  );
};

export default FormWrapper;
