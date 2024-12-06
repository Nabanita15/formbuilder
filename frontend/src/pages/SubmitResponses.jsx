// import { useState } from "react";
// import { submitResponses } from "../api/api";
// import { useParams } from "react-router-dom";

// const SubmitResponses = () => {
// //   const { id } = useParams();
//   const [responses, setResponses] = useState([]);

//   const handleSubmit = async () => {
//     try {
//       await submitResponses(id, responses);
//       alert("Responses submitted successfully!");
//     } catch (error) {
//       console.error("Failed to submit responses:", error);
//     }
//   };

//   return (
//     <div>
//       <h1>Submit Responses</h1>
//       <input
//         type="text"
//         placeholder="Your Answer"
//         onChange={(e) => setResponses([...responses, e.target.value])}
//       />
//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   );
// };

// export default SubmitResponses;
