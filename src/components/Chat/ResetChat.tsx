import { FC } from 'react';
import { Button } from '../ui/button';
interface Props {
  onReset: () => void;
}

export const ResetChat: FC<Props> = ({ onReset }) => {
  return (
    <div className="flex flex-row items-center">
      <Button variant="outline" onClick={() => onReset()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          zoomAndPan="magnify"
          viewBox="0 0 114.75 131.999998"
          height="20"
          preserveAspectRatio="xMidYMid meet"
          version="1.0"
        >
          <path
            fill="#ffffff"
            d="M 113.292969 6.058594 L 77.003906 72.015625 L 68.597656 67.164062 L 107.535156 2.734375 C 108.460938 1.144531 110.488281 0.585938 112.074219 1.515625 C 113.664062 2.429688 114.21875 4.46875 113.292969 6.058594 Z M 113.292969 6.058594 "
            fill-opacity="1"
            fill-rule="evenodd"
          />
          <path
            fill="#ffffff"
            d="M 75.03125 65.734375 C 83.503906 70.636719 86.40625 81.472656 81.507812 89.953125 L 50.832031 72.226562 C 55.714844 63.746094 66.558594 60.84375 75.03125 65.734375 Z M 75.03125 65.734375 "
            fill-opacity="1"
            fill-rule="evenodd"
          />
          <g clip-path="url(#f34ee431f1)">
            <path
              fill="#ffffff"
              d="M 49.5625 74.414062 L 64.851562 83.25 L 80.144531 92.074219 C 75.535156 102.953125 73.457031 119.089844 73.152344 131.039062 C 70.542969 131.570312 67.804688 131.875 64.972656 131.980469 C 65.011719 123.753906 65.488281 114.109375 66.480469 109.933594 C 64.8125 115.367188 63.089844 124.535156 61.980469 132.007812 C 59.09375 131.96875 56.113281 131.703125 53.082031 131.238281 C 53.96875 123.859375 55.503906 113.84375 57.039062 108.980469 C 54.894531 113.257812 52.167969 123.105469 50.15625 130.710938 C 44.875 129.664062 39.472656 127.953125 34.109375 125.582031 C 37.84375 119.738281 43.140625 107.972656 46.488281 102.886719 C 42.015625 107.761719 34.070312 119.074219 29.492188 123.367188 C 28.339844 122.773438 27.1875 122.136719 26.046875 121.488281 C 24.367188 120.507812 22.738281 119.5 21.175781 118.441406 C 20.59375 117.84375 20.089844 117.261719 19.695312 116.71875 C 24.007812 114.175781 34.585938 102.023438 40.957031 95.175781 C 36.425781 99.441406 22.75 110.425781 15.839844 114.53125 C 9.40625 109.417969 4.109375 103.601562 0.167969 97.519531 C 20.539062 99.136719 40.109375 86.945312 49.5625 74.414062 Z M 49.5625 74.414062 "
              fill-opacity="1"
              fill-rule="evenodd"
            />
          </g>
          <path
            fill="#ffffff"
            d="M 17.628906 77.792969 C 17.390625 78.203125 17.117188 78.585938 16.804688 78.945312 C 16.492188 79.300781 16.144531 79.625 15.769531 79.914062 C 15.390625 80.203125 14.992188 80.453125 14.566406 80.664062 C 14.140625 80.871094 13.699219 81.039062 13.238281 81.160156 C 12.78125 81.285156 12.316406 81.363281 11.839844 81.394531 C 11.367188 81.425781 10.894531 81.410156 10.425781 81.347656 C 9.953125 81.285156 9.496094 81.175781 9.046875 81.023438 C 8.59375 80.871094 8.164062 80.675781 7.753906 80.4375 C 7.34375 80.203125 6.960938 79.925781 6.601562 79.613281 C 6.246094 79.300781 5.921875 78.953125 5.632812 78.578125 C 5.34375 78.203125 5.09375 77.800781 4.886719 77.375 C 4.675781 76.949219 4.507812 76.503906 4.386719 76.046875 C 4.261719 75.585938 4.1875 75.121094 4.15625 74.648438 C 4.125 74.171875 4.140625 73.699219 4.203125 73.230469 C 4.265625 72.757812 4.371094 72.296875 4.523438 71.847656 C 4.675781 71.398438 4.871094 70.96875 5.109375 70.558594 C 5.347656 70.144531 5.621094 69.761719 5.933594 69.40625 C 6.246094 69.046875 6.589844 68.722656 6.96875 68.433594 C 7.34375 68.144531 7.746094 67.894531 8.171875 67.6875 C 8.597656 67.476562 9.039062 67.308594 9.496094 67.1875 C 9.957031 67.0625 10.421875 66.988281 10.894531 66.957031 C 11.371094 66.925781 11.839844 66.941406 12.3125 67 C 12.78125 67.0625 13.242188 67.171875 13.691406 67.324219 C 14.140625 67.476562 14.570312 67.671875 14.984375 67.910156 C 15.394531 68.148438 15.777344 68.421875 16.132812 68.734375 C 16.492188 69.046875 16.8125 69.394531 17.101562 69.769531 C 17.390625 70.148438 17.640625 70.546875 17.851562 70.972656 C 18.0625 71.402344 18.226562 71.84375 18.351562 72.300781 C 18.472656 72.761719 18.550781 73.226562 18.582031 73.699219 C 18.613281 74.175781 18.597656 74.648438 18.535156 75.117188 C 18.472656 75.589844 18.367188 76.050781 18.214844 76.5 C 18.0625 76.949219 17.867188 77.378906 17.628906 77.792969 Z M 17.628906 77.792969 "
            fill-opacity="1"
            fill-rule="nonzero"
          />
          <path
            fill="#ffffff"
            d="M 34.386719 77.664062 C 34.148438 78.074219 33.84375 78.425781 33.46875 78.710938 C 33.09375 79 32.679688 79.203125 32.222656 79.328125 C 31.765625 79.449219 31.304688 79.480469 30.835938 79.417969 C 30.367188 79.355469 29.929688 79.207031 29.519531 78.96875 C 29.113281 78.734375 28.761719 78.429688 28.476562 78.054688 C 28.1875 77.679688 27.984375 77.261719 27.859375 76.804688 C 27.738281 76.351562 27.707031 75.886719 27.769531 75.417969 C 27.832031 74.949219 27.980469 74.511719 28.21875 74.101562 C 28.453125 73.691406 28.757812 73.34375 29.132812 73.054688 C 29.507812 72.769531 29.921875 72.5625 30.378906 72.441406 C 30.835938 72.320312 31.296875 72.289062 31.765625 72.351562 C 32.234375 72.410156 32.671875 72.5625 33.082031 72.796875 C 33.492188 73.035156 33.839844 73.339844 34.125 73.714844 C 34.414062 74.089844 34.617188 74.503906 34.742188 74.960938 C 34.863281 75.417969 34.894531 75.878906 34.832031 76.347656 C 34.769531 76.816406 34.621094 77.257812 34.386719 77.664062 Z M 34.386719 77.664062 "
            fill-opacity="1"
            fill-rule="nonzero"
          />
          <path
            fill="#ffffff"
            d="M 32.996094 60.023438 C 32.808594 60.34375 32.566406 60.621094 32.273438 60.847656 C 31.976562 61.074219 31.648438 61.234375 31.289062 61.332031 C 30.929688 61.425781 30.566406 61.453125 30.199219 61.402344 C 29.828125 61.355469 29.484375 61.238281 29.160156 61.050781 C 28.839844 60.863281 28.5625 60.625 28.335938 60.328125 C 28.109375 60.03125 27.949219 59.703125 27.851562 59.34375 C 27.757812 58.984375 27.734375 58.621094 27.78125 58.25 C 27.828125 57.882812 27.945312 57.535156 28.132812 57.214844 C 28.320312 56.890625 28.558594 56.617188 28.855469 56.390625 C 29.152344 56.164062 29.476562 56 29.835938 55.90625 C 30.195312 55.808594 30.5625 55.785156 30.929688 55.832031 C 31.300781 55.882812 31.644531 56 31.96875 56.183594 C 32.289062 56.371094 32.5625 56.613281 32.789062 56.90625 C 33.015625 57.203125 33.179688 57.53125 33.273438 57.890625 C 33.371094 58.25 33.394531 58.613281 33.347656 58.984375 C 33.296875 59.355469 33.179688 59.699219 32.996094 60.023438 Z M 32.996094 60.023438 "
            fill-opacity="1"
            fill-rule="nonzero"
          />
        </svg>
      </Button>
    </div>
  );
};