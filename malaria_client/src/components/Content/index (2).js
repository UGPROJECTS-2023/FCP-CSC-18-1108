const Content = ({ children }) => {
  return (
    <div className="flex flex-col bg-light h-full space-y-5 w-full  ">
      {children}
    </div>
  );
};

Content.Container = ({ children }) => {
  return <div className="flex flex-col pb-10 space-y-5">{children}</div>;
};

Content.Divider = ({ thick }) => {
  return thick ? (
    <hr className="border-2 dark:border-gray-600" />
  ) : (
    <hr className="border dark:border-gray-700" />
  );
};

Content.Empty = ({ children }) => {
  return (
    <div>
      <div className="flex items-center justify-center p-5 border-4 border-dashed rounded">
        <p>{children}</p>
      </div>
    </div>
  );
};

Content.Title = ({ subtitle, title }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold md:text-4xl">{title}</h1>
      <h3 className="text-gray-400">{subtitle}</h3>
    </div>
  );
};

Content.Container.displayName = "Container";
Content.Divider.displayName = "Divider";
Content.Empty.displayName = "Empty";
Content.Title.displayName = "Title";

export default Content;
