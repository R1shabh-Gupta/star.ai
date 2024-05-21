const CardIcon = ({ url }) => {
  const nameRegex = /\/([^/]+)\.pdf/;
  const matches = url.match(nameRegex);
  let name = '';

  if (matches && matches.length > 1) {
    name = matches[1];
    console.log(name);
  } else {
    console.log('Name not found in the URL');
  }

  return (
    <>
      <div className="h-fit w-fit bg-gray-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
        <div className="px-4 py-4 flex gap-2 flex-col">
          <h2 className="text-#f1f5f9 text-sm font-bold">{name}</h2>
          {/* <p className="text-#f1f5f9 text-xs">{content.toLowerCase}</p> */}
          <a href={url} target="_blank">
            View
          </a>
        </div>
      </div>
    </>
  );
};

export default CardIcon;
