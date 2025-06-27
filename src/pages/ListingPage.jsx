import { useParams } from "react-router-dom";

function ListingPage() {
  const { id } = useParams();
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">Listing Detail (ID: {id})</h1>
      {/* Show listing details here */}
    </div>
  );
}

export default ListingPage;
