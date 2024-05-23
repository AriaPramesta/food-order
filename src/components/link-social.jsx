const LinkSocial = ({ urlImg, children }) => {
  return (
    <button className="bg-white rounded-full px-4 py-2 flex items-center gap-3">
      <img src={urlImg} width={20} />
      {children}
    </button>
  );
};

export default LinkSocial;
