const SpinnerLoading = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary mb-4"></div>
      <span className="text-lg font-medium text-primary">Loading...</span>
    </div>
  )
}

export default SpinnerLoading