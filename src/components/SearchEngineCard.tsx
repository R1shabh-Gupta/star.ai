import { Button } from './ui/button';
import { useEffect, useState } from 'react';
import { storage } from '@/firebase';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import CardIcon from './CardIcon';

const SearchEngineCard = () => {
  const [fileList, setFileList] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState(0); // Initialize with index 0 (All)

  const categories = [
    '',
    'handbook/',
    'software/',
    'electrical/',
    'electronics/',
    'testing/',
  ];

  const handleFilter = (index) => {
    setSelectedFilter(index);
  };

  useEffect(() => {
    setFileList([]);
    const fileListRef = ref(storage, categories[selectedFilter]);

    listAll(fileListRef).then((res) => {
      const promises = res.items.map((item) => {
        return getDownloadURL(item);
      });

      Promise.all(promises).then((urls) => {
        setFileList(urls);
      });
    });
  }, [selectedFilter]); // Re-run this effect whenever the selectedFilter changes

  const tags = [
    'All',
    'Handbook',
    'Software',
    'Electrical',
    'Electronics',
    'Testing',
  ];

  return (
    <div className="h-3/4 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 border border-gray-100 max-w-4xl w-5xl mx-auto flex">
      {/* filter */}
      <div className="flex flex-col w-1/5">
        <h4 className="text-xl font-medium my-1 mx-4">Filters</h4>
        <hr className="my-1 h-[1px] border-t-0 bg-neutral-100 opacity-30 dark:opacity-20" />
        <div>
          <h4 className="text-xl font-medium mb-4 mx-4">Domains</h4>
          <div className="flex flex-wrap gap-2 mx-4">
            {tags.map((tag, index) => (
              <Button
                variant="default"
                key={index}
                onClick={() => handleFilter(index)}
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="w-[1px] h-full bg-neutral-100 opacity-30 dark:opacity-20"></div>

      {/* files */}
      <div className="w-4/5">
        <div className="flex flex-wrap gap-4 flex-row justify-center m-12">
          {fileList.map((url, index) => (
            <CardIcon key={index} url={url} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchEngineCard;
