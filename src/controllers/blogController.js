exports.create = async (req, res) => {
    try {

        res.status(200).json({ status: "success", data: "Created" });
    } catch (error) {
        res.status(500).json({ status: "error", blog: error.blog });
    }
};

exports.read = async (req, res) => {
    try {

        res.status(200).json({ status: "success", data: "Read" });
    } catch (error) {
        res.status(500).json({ status: "error", blog: error.blog });
    }
};

exports.delete = async (req, res) => {
    try {

        res.status(200).json({ status: "success", data: "Deleted" });
    } catch (error) {
        res.status(500).json({ status: "error", blog: error.blog });
    }
};

exports.update = async (req, res) => {
    try {

        res.status(200).json({ status: "success", data: "Updated" });
    } catch (error) {
        res.status(500).json({ status: "error", blog: error.blog });
    }
};


