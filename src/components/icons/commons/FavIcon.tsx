import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  primaryColor?: string;
  secondaryColor?: string;
  size?: string;
}
const FavIcon: React.FC<IconProps> = ({
  primaryColor = 'currentColor',
  secondaryColor = 'var(--secondary-light)',
  size = '8px',
  className,
  ...rest
}) => {
  const viewBoxSize = parseInt(size) || 50;

  return (
    <div className="icon-wrapper">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
        style={{ width: size, height: size }}
        aria-hidden="true"
        className={className}
        {...rest}
      >
        <defs>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
            <feOffset in="blur" dx="3" dy="3" result="offsetBlur" />
            <feFlood floodColor="rgba(0,0,0,0.3)" result="shadowColor" />
            <feComposite
              in="shadowColor"
              in2="offsetBlur"
              operator="in"
              result="dropShadow"
            />
            <feMerge>
              <feMergeNode in="dropShadow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          d="M41.493 41.12c-.25-1.295-3.41-1.802-7.339-1.269l-1.276-6.594c2.324-1.097 3.806-3.596 3.52-6.244l-1.791-16.505a3.416 3.416 0 0 0-1.361-2.37 3.425 3.425 0 0 0-2.665-.602l-4.931.954a3.437 3.437 0 0 0-.389-.864 3.414 3.414 0 0 0-2.263-1.527l-8.125-1.484a3.415 3.415 0 0 0-2.658.63 3.407 3.407 0 0 0-1.336 2.383L9.265 24.152c-.26 2.652 1.249 5.131 3.586 6.199l-1.208 6.615c-3.935-.49-7.088.049-7.325 1.346-.266 1.457 3.245 3.318 7.842 4.158 4.597.84 8.54.34 8.806-1.117.237-1.299-2.522-2.918-6.376-3.85l1.209-6.621a6.16 6.16 0 0 0 5.545-4.533l1.057-3.912 1.944 6.908a6.177 6.177 0 0 0 5.596 4.482l1.274 6.591c-3.844.972-6.586 2.62-6.335 3.915.281 1.454 4.229 1.914 8.817 1.025 4.586-.885 8.077-2.785 7.796-4.238zM19.905 20.195l-7.324.809L13.86 7.921a.405.405 0 0 1 .159-.284.42.42 0 0 1 .274-.077l.043.001 8.125 1.484a.383.383 0 0 1 .115.04l-.104.021a3.408 3.408 0 0 0-2.249 1.553 3.408 3.408 0 0 0-.379 2.706l.972 3.453-.911 3.377zm2.823-7.644a.403.403 0 0 1 .313-.506l8.186-1.577a.402.402 0 0 1 .402.361l1.418 13.069-7.332-.731-2.987-10.616z"
          className="logo-glasses"
          filter="url(#shadow)"
        />

        {[
          { cx: 17.599, cy: 17.104, r: 1.451 },
          { cx: 16.871, cy: 10.999, r: 1.157 },
          { cx: 21.434, cy: 3.337, r: 1.311 },
          { cx: 25.944, cy: 1.311, r: 1.311 },
          { cx: 26.841, cy: 5.883, r: 1.235 },
          { cx: 26.229, cy: 15.535, r: 1.283 },
          { cx: 29.566, cy: 20.916, r: 1.49 },
        ].map((circle, index) => (
          <circle
            key={index}
            {...circle}
            className="icon-circles"
            filter="url(#shadow)"
          />
        ))}
      </svg>
      <style>{`
        .logo-glasses {
          fill: ${primaryColor};
          stroke: ${primaryColor};
          stroke-width: 0.5;
          transition: all 0.3s ease;
        }
        .icon-circles {
          fill: ${secondaryColor};
          transition: all 0.3s ease;
        }
        .icon-wrapper {
          display: inline-block;
          position: relative;
        }
      `}</style>
    </div>
  );
};

export default React.memo(FavIcon);
