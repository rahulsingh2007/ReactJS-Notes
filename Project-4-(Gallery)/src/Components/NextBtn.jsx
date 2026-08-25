const NextBtn = (props) => {
    return (
        <div>
            <button
                className="bg-amber-500 text-black text-sm cursor-pointer active:scale-95 rounded px-4 py-2 font-semibold"
                disabled={props.loading}
                onClick={() => {
                    props.setUserData([])
                    props.setIndex(props.index + 1)
                }}>
                Next
            </button>
        </div>
    )
}

export default NextBtn
