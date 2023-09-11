exports.create = async (req, res) => {
    try {

        res.status(200).json({ status: "success", data: "Created" });
    } catch (error) {
        res.status(500).json({ status: "error", portfolio: error.portfolio });
    }
};

exports.read = async (req, res) => {
    try {

        res.status(200).json({ status: "success", data: "Read" });
    } catch (error) {
        res.status(500).json({ status: "error", portfolio: error.portfolio });
    }
};

exports.delete = async (req, res) => {
    try {

        res.status(200).json({ status: "success", data: "Deleted" });
    } catch (error) {
        res.status(500).json({ status: "error",portfolio: error.portfolio });
    }
};

exports.update = async (req, res) => {
    try {

        res.status(200).json({ status: "success", data: "Updated" });
    } catch (error) {
        res.status(500).json({ status: "error", portfolio: error.portfolio });
    }
};
