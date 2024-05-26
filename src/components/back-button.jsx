const BackButton = ({ url }) => {
  return (
    <a
      href={url}
      className=" bg-slate-100 px-4 py-2 rounded-xl shadow-xl hover:bg-slate-200 w-10"
    >
      &lt;
    </a>
  );
};

export default BackButton;
