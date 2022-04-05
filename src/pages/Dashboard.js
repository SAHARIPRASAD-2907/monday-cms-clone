import { useState, useEffect, useContext } from "react";
import TicketCard from "../components/TicketCard";
import axios from "axios";
import CategoryContext from "../context";
function Dashboard() {
  const [tickets, setTickets] = useState(null);
  const { categories, setCategories } = useContext(CategoryContext);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    async function fetchDate() {
      const response = await axios.get("http://localhost:8000/tickets");

      const dataObject = response.data.data;

      const arrayOfKeys = Object.keys(dataObject);
      const arrayOfData = Object.keys(dataObject).map((key) => dataObject[key]);

      const formattedArray = [];

      arrayOfKeys.forEach((key, index) => {
        const formattedData = { ...arrayOfData[index], documentId: key };
        formattedArray.push(formattedData);
      });
      setTickets(formattedArray);
      setCategories([
        ...new Set(formattedArray?.map(({ category }) => category)),
      ]);
    }
    fetchDate();
    return () => {
      console.log("Component unmounted");
    };
  }, []);
  const colors = [
    "rgb(255,179,186)",
    "rgb(255,223,186)",
    "rgb(255,255,186)",
    "rgb(186,255,261)",
    "rgb(186,255,255)",
  ];
  return (
    <div className="dashboard">
      <h1>My Projects</h1>
      <div className="ticket-container">
        {tickets &&
          categories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex}>
              <h3>{uniqueCategory}</h3>
              {tickets
                .filter((ticket) => ticket.category === uniqueCategory)
                .map((filteredTicket, _index) => (
                  <TicketCard
                    key={_index}
                    id={_index}
                    color={colors[categoryIndex] || colors[0]}
                    ticket={filteredTicket}
                  />
                ))}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Dashboard;

//   const tickets = [
//     {
//       category: "Q1 2022",
//       color: "red",
//       title: "NFT Safety 101 Video",
//       owner: "Hariprasad",
//       avatar:
//         "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Vijay_at_the_Nadigar_Sangam_Protest.jpg/220px-Vijay_at_the_Nadigar_Sangam_Protest.jpg",
//       status: "done",
//       priority: 5,
//       progress: 80,
//       description:
//         "Make a video showcasing how to work with NFTs safty, including how to know if one is not garunteed",
//       timestamp: "2022-02-11T07:36:17:0000",
//     },
//     {
//       category: "Q1 2022",
//       color: "red",
//       title: "NFT Safety 101 Video",
//       owner: "Hariprasad",
//       avatar:
//         "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Vijay_at_the_Nadigar_Sangam_Protest.jpg/220px-Vijay_at_the_Nadigar_Sangam_Protest.jpg",
//       status: "done",
//       priority: 3,
//       progress: 60,
//       description:
//         "Make a video showcasing how to work with NFTs safty, including how to know if one is not garunteed",
//       timestamp: "2022-02-11T07:36:17:0000",
//     },
//     {
//       category: "Q3 2022",
//       color: "red",
//       title: "NFT Safety 101 Video",
//       owner: "Hariprasad",
//       avatar:
//         "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Vijay_at_the_Nadigar_Sangam_Protest.jpg/220px-Vijay_at_the_Nadigar_Sangam_Protest.jpg",
//       status: "done",
//       priority: 2,
//       progress: 40,
//       description:
//         "Make a video showcasing how to work with NFTs safty, including how to know if one is not garunteed",
//       timestamp: "2022-02-11T07:36:17:0000",
//     },
//   ];
