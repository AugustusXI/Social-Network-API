const router = require("express").Router();

const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/userController");

router.get("/", getAllUser);
router.post("/", createUser);
router.get("/:id", getUserById);
router.put("/:id", updateUser);

router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;
