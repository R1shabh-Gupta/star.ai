import { useState } from 'react';
import axios from 'axios';
import { EarthCanvas } from './canvas';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';

const QuesAnsSection = () => {
  const [isCopy, setIsCopy] = useState('Copy');
  const [isCopyIcon, setIsCopyIcon] = useState(false);
  const [outputText, setOutputText] = useState('');
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(outputText);
    setIsCopy('Copied');
    setIsCopyIcon(true);
    setTimeout(() => {
      setIsCopy('Copy');
      setIsCopyIcon(false);
    }, 1500);
  };

  const handleRequest = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        'http://127.0.0.1:5000/test',
        {
          text: inputText,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      setOutputText(response.data.data);

      setIsLoading(false);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div
        className={`xl:mt-2 flex xl:flex-row flex-col-reverse gap-52 overflow-hidden`}
      >
        <div className="flex-[0.75] bg-black-100 p-4 rounded-2xl">
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Output
              </label>
              <Button
                variant={'outline'}
                className="transition-all ease-in-out mb-2"
                onClick={() => {
                  copyToClipboard();
                }}
              >
                {!isCopyIcon ? (
                  <>
                    {isCopy}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-6 ml-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                      />
                    </svg>
                  </>
                ) : (
                  <>
                    {isCopy}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-6 ml-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                      />
                    </svg>
                  </>
                )}
              </Button>
            </div>
            <div className="relative">
              {/* Loading spinner */}
              {isLoading && (
                <div className="absolute bg-gray-400 z-10 h-full w-full flex items-center justify-center rounded-md bg-opacity-40">
                  <div className="flex items-center">
                    <div
                      className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-secondary motion-reduce:animate-[spin_1.5s_linear_infinite]"
                      role="status"
                    >
                      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                        Loading...
                      </span>
                    </div>
                  </div>
                </div>
              )}

              <Textarea
                className="block p-2.5 w-[400px] text-sm text-gray-900 bg-gray-50 rounded-lg border h-72 border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Output will be displayed here :)"
                id="message"
                value={outputText}
              />
            </div>
          </div>
          <div className="mt-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>

              <input
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Type your question..."
                value={inputText}
                onChange={(e) => {
                  setInputText(e.target.value);
                }}
                required
              />
              <button
                onClick={handleRequest}
                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
          <EarthCanvas />
          {/* <BlackholeCanvas /> */}
        </div>
      </div>
    </>
  );
};

export default QuesAnsSection;
//
