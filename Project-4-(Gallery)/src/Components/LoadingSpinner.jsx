import { PulseLoader } from "react-spinners";

const LoadingSpinner = () => {
    const override = {
        display: "block",
        margin: "0 auto",
    };

    return (
        <h3 className="text-gray-400 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <PulseLoader
                color="#FFFFFF"
                loading={true}
                cssOverride={override}
                size={15}
                speedMultiplier={1}
            />
        </h3>
    );
};

export default LoadingSpinner;
