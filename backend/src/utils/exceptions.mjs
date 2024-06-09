const ProductNotFound = (res, err) => {
    res
        .status(404)
        .json({ error: err });
};

const ProductNotAdded = (res, err) => {
    res
        .status(400)
        .json({ error: err });
};

const HandleError = (res, err) => {
    res.status(500).json({ error: err });
};


export { ProductNotFound, ProductNotAdded, HandleError }