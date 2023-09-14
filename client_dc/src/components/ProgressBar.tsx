// DESC: width, height는 tailwind class 그대로 내려주세요

type Props = {
  progress: number;
  width?: string;
  height?: string;
  displayPercentage?: boolean;
};

export default function ProgressBar({ progress = 0, width, height, displayPercentage }: Props) {
  const getBarColor = (progress: number) => {
    if (progress < 34) return '--lightBlue';
    else if (progress < 67) return '--orange';
    else return '--primaryRed';
  };

  const barColorVarName = getBarColor(progress);
  const rootStyles = getComputedStyle(document.documentElement);
  const barColor = rootStyles.getPropertyValue(barColorVarName).trim();

  const barStyle = {
    width: `${progress}%`,
    outline: `2px solid ${barColor}`,
    outlineOffset: '-1px',
    backgroundColor: barColor,
  };

  return (
    <div
      className={`border border-grey-border rounded-full relative ${width ? width : 'w-full'} ${
        height ? height : 'h-5'
      }`}
    >
      <div className='h-full rounded-full' style={barStyle}></div>
      {displayPercentage && (
        <div
          className={`absolute inset-0 flex items-center justify-center text-sm font-medium ${
            progress >= 60 ? 'text-white' : 'text-grey-text'
          }`}
        >
          {progress}%
        </div>
      )}
    </div>
  );
}
