const Team = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl mb-4">Team</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-md p-4">
          <img
            src="https://via.placeholder.com/150"
            alt="Team Member"
            className="rounded-full mx-auto mb-4"
          />
          <h2 className="font-bold text-lg mb-2">John Doe</h2>
          <p className="text-gray-600">Software Engineer</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <img
            src="https://via.placeholder.com/150"
            alt="Team Member"
            className="rounded-full mx-auto mb-4"
          />
          <h2 className="font-bold text-lg mb-2">Jane Smith</h2>
          <p className="text-gray-600">Product Manager</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <img
            src="https://via.placeholder.com/150"
            alt="Team Member"
            className="rounded-full mx-auto mb-4"
          />
          <h2 className="font-bold text-lg mb-2">Mike Johnson</h2>
          <p className="text-gray-600">UX Designer</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
