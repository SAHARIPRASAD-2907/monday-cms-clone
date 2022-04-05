import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import CategoryContext from "../context";
function TicketPage({ editMode }) {
  const navigate = useNavigate();
  let { id } = useParams();
  const { categories } = useContext(CategoryContext);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "non started",
    progress: 0,
    timestamp: new Date().toISOString(),
    category: "",
    priority: 1,
    owner: "",
    avatar: "",
  });
  const fetchData = async () => {
    const response = await axios.get(`http://localhost:8000/tickets/${id}`, {
      data: formData,
    });
    setFormData(response.data.data);
  };
  useEffect(() => {
    fetchData();
    return () => {
      console.log("Component unmounted");
    };
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submit");
    if (editMode) {
      const responses = await axios.put(`http://localhost:8000/tickets/${id}`, {
        data: formData,
      });
      const success = responses.status === 200;
      if (success) {
        navigate("/");
      }
    }
    if (!editMode) {
      console.log("Working");
      const response = await axios.post("http://localhost:8000/tickets", {
        data: formData,
      });
      console.log(response);
      const success = response.status === 200;
      if (success) {
        navigate("/");
      }
    }
  };
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div className="ticket">
      <h1>{editMode ? "Update your Ticket" : "Crate a Ticket"}</h1>
      <div className="ticket-container">
        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              required={true}
              onChange={handleChange}
              value={formData.title}
            />
            <label htmlFor="description">Description</label>
            <input
              type="text"
              id="description"
              name="description"
              required={true}
              onChange={handleChange}
              value={formData.description}
            />
            <label htmlFor="new-category">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              {categories?.map((category, _index) => (
                <option key={_index} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <label htmlFor="new-category">New category</label>
            <input
              type="text"
              id="new-category"
              name="category"
              onChange={handleChange}
              value={formData.category}
            />
            <label htmlFor="new-category">Priority</label>
            <div className="multiple-input-container">
              <input
                id="priority-1"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={1}
                checked={formData.priority == 1}
              />
              <label htmlFor="priority-1">1</label>
              <input
                id="priority-2"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={2}
                checked={formData.priority == 2}
              />
              <label htmlFor="priority-2">2</label>
              <input
                id="priority-3"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={3}
                checked={formData.priority == 3}
              />
              <label htmlFor="priority-3">3</label>
              <input
                id="priority-4"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={4}
                checked={formData.priority == 4}
              />
              <label htmlFor="priority-4">4</label>
              <input
                id="priority-5"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={5}
                checked={formData.priority == 5}
              />
              <label htmlFor="priority-5">5</label>
            </div>
            {editMode && (
              <>
                <input
                  type="range"
                  id="progress"
                  name="progress"
                  value={formData.progress}
                  min="0"
                  max="100"
                  onChange={handleChange}
                />
                <label htmlFor="progress">Progress</label>
              </>
            )}
            {editMode && (
              <>
                {" "}
                <label>Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option selected={formData.status === "done"} value="done">
                    Done
                  </option>
                  <option
                    selected={formData.status === "working on it"}
                    value="working on it"
                  >
                    Working on it
                  </option>
                  <option selected={formData.status === "stuck"} value="stuck">
                    Stuck
                  </option>
                  <option
                    selected={formData.status === "not started"}
                    value="not started"
                  >
                    Not Started
                  </option>
                </select>
              </>
            )}
            <input type="submit" value="submit" />
          </section>
          <section>
            <label htmlFor="owner">Owner</label>
            <input
              type="text"
              id="owner"
              name="owner"
              required={true}
              onChange={handleChange}
              value={formData.owner}
            />
            <label htmlFor="avatar">Avatar</label>
            <input
              type="url"
              id="avatar"
              name="avatar"
              required={true}
              onChange={handleChange}
              value={formData.avatar}
            />
            <div className="img-preview">
              {formData.avatar && (
                <img
                  src={formData.avatar}
                  alt="image Preview"
                  width={100}
                  height={100}
                />
              )}
            </div>
          </section>
        </form>
      </div>
    </div>
  );
}

export default TicketPage;
