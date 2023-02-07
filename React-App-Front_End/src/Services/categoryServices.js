import https from "../http-common";

const getAll = () => {
  return https.get("/api/category");
};

const getByID = (id) => {
  return https.get(`/api/category/${id}`);
};

const create = (data) => {
  return https.post("/api/category", data);
};

const edit = (id) => {
  return https.get(`/api/category/${id}/edit`);
};

const update = (id, data) => {
  return https.put(`/api/category/${id}`, data);
};

const remove = (id) => {
  return https.delete(`/api/category/${id}`);
};

const CategoryService = {
  getAll,
  getByID,
  create,
  edit,
  update,
  remove,
};

export default CategoryService;
