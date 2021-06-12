const OwnerTag = () => {
    const getYear = (currentYear) => {
        const d = new Date();
        const year = d.getFullYear();
        return currentYear === year ? currentYear : `${currentYear}-${year}`
    }
    return (
        <div className="copy-right py-3">
            <div className="container mt-2">
                <p className="text-center text-white">
                    &copy; {getYear(2021)} Auto Store. All rights reserved | Designed by Prince Ndu
                </p>
            </div>
        </div>
    )
}

export default OwnerTag;