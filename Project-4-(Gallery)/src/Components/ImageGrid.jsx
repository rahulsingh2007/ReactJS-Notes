import Card from "./Card";

const ImageGrid = ({ data }) => {
    if (data.length === 0) return null;

    return (
        <>
            {data.map((elem, idx) => (
                <div key={elem.id || idx}>
                    <Card elem={elem} />
                </div>
            ))}
        </>
    );
};

export default ImageGrid;
