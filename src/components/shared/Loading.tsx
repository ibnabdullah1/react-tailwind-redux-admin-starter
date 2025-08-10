const Loading = ({ text }: { text?: string }) => {
  return (
    <div className="flex items-center justify-center min-h-[90vh] space-x-3">
      <div className="flex items-center space-x-1">
        <span className="text-gray-600 text-lg">
          {text ?? "Please wait..."}
        </span>
      </div>
    </div>
  );
};

export default Loading;
