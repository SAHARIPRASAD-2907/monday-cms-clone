import TicketCard from "../components/TicketCard";

function Dashboard() {
  const tickets = [
    {
      category: "Q1 2022",
      color: "red",
      title: "NFT Safety 101 Video",
      owner: "Hariprasad",
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Vijay_at_the_Nadigar_Sangam_Protest.jpg/220px-Vijay_at_the_Nadigar_Sangam_Protest.jpg",
      status: "done",
      priority: 5,
      progress: 80,
      description:
        "Make a video showcasing how to work with NFTs safty, including how to know if one is not garunteed",
      timestamp: "2022-02-11T07:36:17:0000",
    },
    {
      category: "Q1 2022",
      color: "red",
      title: "NFT Safety 101 Video",
      owner: "Hariprasad",
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Vijay_at_the_Nadigar_Sangam_Protest.jpg/220px-Vijay_at_the_Nadigar_Sangam_Protest.jpg",
      status: "done",
      priority: 3,
      progress: 60,
      description:
        "Make a video showcasing how to work with NFTs safty, including how to know if one is not garunteed",
      timestamp: "2022-02-11T07:36:17:0000",
    },
    {
      category: "Q3 2022",
      color: "red",
      title: "NFT Safety 101 Video",
      owner: "Hariprasad",
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Vijay_at_the_Nadigar_Sangam_Protest.jpg/220px-Vijay_at_the_Nadigar_Sangam_Protest.jpg",
      status: "done",
      priority: 2,
      progress: 40,
      description:
        "Make a video showcasing how to work with NFTs safty, including how to know if one is not garunteed",
      timestamp: "2022-02-11T07:36:17:0000",
    },
  ];
  const colors = [
    "rgb(255,179,186)",
    "rgb(255,223,186)",
    "rgb(255,255,186)",
    "rgb(186,255,261)",
    "rgb(186,255,255)",
  ];
  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];
  console.log(uniqueCategories);
  return (
    <div className="dashboard">
      <h1>My Project</h1>
      <div className="ticket-container">
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex}>
              <h3>{uniqueCategory}</h3>
              {tickets
                .filter((ticket) => ticket.category === uniqueCategory)
                .map((filteredTicket, _index) => (
                  <TicketCard
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
