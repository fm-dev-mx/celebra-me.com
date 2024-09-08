import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}
const CakeIcon: React.FC<IconProps> = ({
  className,
  size = 32,
  color = 'currentColor',
  ...rest
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className={className}
    aria-hidden="true"
    fill={color}
    width={size}
	strokeWidth={2}
    height={size}
    {...rest}
  >
    <path
      d="M28 13.75h-2.75v-2.75c0-0.69-0.56-1.25-1.25-1.25s-1.25 0.56-1.25 1.25v0 2.75h-5.5v-2.75c0-0.69-0.56-1.25-1.25-1.25s-1.25 0.56-1.25 1.25v0 2.75h-5.5v-2.75c0-0.69-0.56-1.25-1.25-1.25s-1.25 0.56-1.25 1.25v0 2.75h-2.75c-1.794 0.002-3.248 1.456-3.25 3.25v11c0.002 1.794 1.456 3.248 3.25 3.25h24c1.794-0.001 3.249-1.456 3.25-3.25v-11c-0.002-1.794-1.456-3.248-3.25-3.25h-0zM4 16.25h2.75v1.75c0 0.69 0.56 1.25 1.25 1.25s1.25-0.56 1.25-1.25v0-1.75h5.5v1.75c0 0.69 0.56 1.25 1.25 1.25s1.25-0.56 1.25-1.25v0-1.75h5.5v1.75c0 0.69 0.56 1.25 1.25 1.25s1.25-0.56 1.25-1.25v0-1.75h2.75c0.412 0.006 0.744 0.338 0.75 0.749v5.979l-1.865-1.865c-0.231-0.225-0.547-0.364-0.896-0.364-0.040 0-0.080 0.002-0.119 0.005l0.005-0c-0.385 0.039-0.714 0.248-0.915 0.55l-0.003 0.005c-1.086 1.641-2.75 3.6-4.363 3.438-1.682-0.133-3.063-2.4-3.454-3.262-0.202-0.437-0.636-0.734-1.14-0.734s-0.938 0.298-1.136 0.727l-0.003 0.008c-0.386 0.85-1.754 3.084-3.431 3.223-1.616 0.172-3.296-1.775-4.393-3.406-0.205-0.303-0.533-0.509-0.911-0.546l-0.005-0c-0.035-0.003-0.076-0.005-0.117-0.005-0.346 0-0.66 0.139-0.888 0.365l0-0-1.866 1.866v-5.98c0.006-0.412 0.338-0.744 0.75-0.75h0.001zM28 28.75h-24c-0.412-0.006-0.744-0.338-0.75-0.749v-1.484l2.602-2.602c1.231 1.952 3.358 3.24 5.789 3.285l0.007 0c1.827-0.295 3.369-1.328 4.335-2.777l0.015-0.023c0.984 1.494 2.54 2.542 4.349 2.835l0.037 0.005c0.127 0.010 0.252 0.016 0.377 0.016 2.281-0.225 4.226-1.487 5.379-3.303l0.017-0.029 2.594 2.596v1.483c-0.006 0.412-0.338 0.744-0.749 0.75h-0.001z"
    />
    {/* Candles */}
    <path
      d="M7.991 9.25c1.972-0.032 3.58-1.553 3.749-3.486l0.001-0.014c-0.484-1.837-1.473-3.399-2.81-4.576l-0.010-0.009c-0.229-0.255-0.561-0.415-0.929-0.415-0 0-0 0-0 0h-0.002c-0.369 0.001-0.701 0.162-0.93 0.417l-0.001 0.001c-1.3 1.215-2.273 2.764-2.782 4.511l-0.018 0.071c0.165 1.943 1.766 3.463 3.729 3.5l0.004 0zM7.995 3.943c0.465 0.541 0.878 1.151 1.216 1.805l0.025 0.053c-0.192 0.526-0.669 0.904-1.239 0.949l-0.005 0c-0.559-0.051-1.025-0.404-1.237-0.892l-0.004-0.01c0.349-0.728 0.765-1.354 1.254-1.915l-0.009 0.01z"
    />
    <path
      d="M15.991 9.25c1.972-0.032 3.579-1.553 3.748-3.486l0.001-0.014c-0.484-1.837-1.473-3.399-2.809-4.576l-0.010-0.009c-0.229-0.255-0.56-0.415-0.929-0.415-0 0-0.001 0-0.001 0h-0.002c-0.369 0.001-0.701 0.162-0.93 0.417l-0.001 0.001c-1.3 1.215-2.273 2.764-2.782 4.511l-0.018 0.071c0.165 1.943 1.766 3.463 3.729 3.5l0.004 0zM15.994 3.944c0.466 0.541 0.879 1.15 1.216 1.804l0.024 0.052c-0.192 0.526-0.668 0.904-1.238 0.949l-0.005 0c-0.559-0.051-1.025-0.404-1.237-0.892l-0.004-0.01c0.349-0.727 0.764-1.354 1.253-1.914l-0.009 0.01z"
    />
    <path
      d="M23.99 9.25c1.972-0.032 3.579-1.553 3.749-3.486l0.001-0.014c-0.484-1.837-1.473-3.399-2.81-4.576l-0.010-0.009c-0.229-0.255-0.56-0.415-0.928-0.415-0.001 0-0.001 0-0.002 0h-0.002c-0.37 0.001-0.702 0.162-0.931 0.417l-0.001 0.001c-1.299 1.215-2.271 2.765-2.779 4.511l-0.018 0.071c0.164 1.943 1.764 3.463 3.727 3.5l0.004 0zM23.994 3.944c0.466 0.541 0.878 1.15 1.216 1.804l0.025 0.052c-0.192 0.526-0.669 0.904-1.239 0.949l-0.005 0c-0.558-0.051-1.023-0.404-1.235-0.892l-0.004-0.01c0.346-0.728 0.761-1.354 1.25-1.914l-0.008 0.01z"
    />
  </svg>
);

export default React.memo(CakeIcon);
