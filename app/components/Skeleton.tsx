export const SkeletonHeader = () => {
  return (
    <div className="flex flex-row items-center justify-between w-full p-6 mx-auto space-x-1 border animate-pulse rounded-xl max-w-7xl">
      <div className="flex flex-1">
        <div className="w-4/12 h-6 bg-gray-300 rounded-1/2" />
      </div>
      <div className="flex justify-end flex-1 space-x-4">
        <div className="w-12 h-12 bg-gray-300 rounded-full" />
        <div className="w-12 h-12 bg-gray-300 rounded-full" />
        <div className="w-12 h-12 bg-gray-300 rounded-full" />
        <div className="w-24 h-12 bg-gray-300 rounded-full" />
      </div>
    </div>
  );
};
