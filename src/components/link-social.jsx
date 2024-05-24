const LinkSocial = ({ urlImg, children }) => {
  return (
    <button className="bg-white rounded-full px-4 py-2 flex gap-3 items-center font-semibold text-lg hover:shadow-2xl">
      <img src={urlImg} width={20} />
      {children}
    </button>
  );
};

export default LinkSocial;
